from database.database import EnglishRevisionDatabase
from requests import get
from bs4 import BeautifulSoup
from os import system
from time import sleep

def capture_data_in_ted(data: EnglishRevisionDatabase):
  links: list[str] = read_text('assets/links/TED/technology.txt')

  for link in links[1:]:
    # Caso não tenha a tag 'transcript', ela é colocada
    if not 'transcript' in link:
      index_before_language = link.find('language')

      link = link[:index_before_language-1] + "/transcript?language=en"

    html = get(link)

    sleep(0.5)

    soup = BeautifulSoup(html.text, 'html.parser')
    
    # Seções de textos
    sections = soup.find(attrs={ 'class': 'm-b:7' }).find_all(attrs={'class': 'Grid--with-gutter'})

    all_lines = []

    # Indo texto por texto e adicionando no vetor de frases
    for section in sections:
      div_text = section.find(attrs={ 'class': 'flx-s:1' })
    
      for line in div_text.p.text.split('\n'):
        line = line.strip()

        if line != "":
          all_lines.append(line)

    # Inserindo o documento
    data.insert_document(link)

    id_document, _ = data.find_documment_by_url(link)[0]

    # Inserindo as frases
    index = 0
    for phrase in all_lines:
      phrase = phrase.replace("'", "''")

      data.insert_phrase(phrase, id_document)
      
      index += 1

      system("cls")
      print(f'Frase {index}: {len(all_lines)}')


def read_text(filename) -> list:
  lines = []
  with open(filename, 'r', encoding='utf-8') as source:
    lines = source.read().split('\n')

  return lines


if __name__ == "__main__":
  database = EnglishRevisionDatabase()
  capture_data_in_ted(database)
