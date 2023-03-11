from selenium import webdriver
from time import sleep
from database.database import EnglishRevisionDatabase
from unidecode import unidecode
from os import system

driver = webdriver.Chrome(executable_path="C:\\ProgramData\\chocolatey\\lib\\chromedriver\\tools\\chromedriver.exe")

data = []

limitator = 50
separator = "|"


def main(database: EnglishRevisionDatabase):
  data_agroup = ['']
  index = 0

  # Separando as frases em grupos
  for i, phrase in enumerate(data):
    if (i % limitator and i > 0) == 0:
      data_agroup.append('')
      index += 1

    text = phrase[1].replace('.', '')

    data_agroup[index] += f'{text} {separator} '

  lines = []

  for i, text in enumerate(data_agroup):
    # Impressão
    system('cls')
    print(f'{i+1} de {len(data_agroup)}')

    text_without_porcent = text.replace('%', '¨')
    driver.get(f'https://translate.google.com.br/?sl=en&tl=pt&text={text_without_porcent}&op=translate&hl=pt-BR')

    sleep(2)

    # Obtendo tradução
    try:
      text_translate = driver.find_element_by_class_name('zkZ4Kc').get_attribute('data-text')
    except:
      text_translate = text_without_porcent

    # Retornando as frases originais, e retirando a última
    split_text_translate = text_translate.split(separator)
    split_text_translate.pop(len(split_text_translate)-1)

    # Adicionando em um vetor as traduções
    for line in split_text_translate:
      lines.append(line.replace(separator, '').replace('¨', '%'))

    real_size = len(data) - (int(len(data)/limitator) * limitator) if i+1 == len(data_agroup) else limitator

    diff = real_size - len(split_text_translate)

    # Caso haja uma incoerência na tradução, adicione linhas falsas para não atrapalhar o resto
    if diff > 0 and i > 0:
      for _ in range(diff):
        lines.append('')

  # Salvando as traduções aos respectivos dados
  for i, text in enumerate(lines):
    try:
      database.add_translate(data[i][0], text.replace('"', '""').replace("'", "''"))
    except: pass
  
  driver.quit()

if __name__ == "__main__":
  database = EnglishRevisionDatabase()

  data = database.list_phrases()

  main(database)
