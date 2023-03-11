from database import EnglishRevisionDatabase
from os import system
import csv, random

data = []

data_to_csv = []

field_names = ['id', 'phrase', 'document_id', 'level']

def init_values(database: EnglishRevisionDatabase):
  with open('phrases.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
      
    for row in spamreader:
      try:
        data_to_csv.append({
          'id': row[0],
          'phrase': row[1],
          'document_id': row[2],
          'level': row[3]
        })
      except IndexError:
        pass

  return database.list_phrases()

def clean():
  system("cls")

def classify():
  index = 1
  size = len(data_to_csv)

  for row in data[size:]:
    clean()

    print(f'Frase {index}..')
    print()
    print(row[1])
    
    level = input()

    if level == 'q':
      break

    data_to_csv.append({
      'id': row[0],
      'phrase': row[1],
      'document_id': row[2],
      'level': level
    })  

    index += 1

  clean()


def save():
  with open('data/files/phrases.csv', 'w') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=field_names)
    writer.writeheader()
    writer.writerows(data_to_csv)

if __name__ == "__main__":
  database = EnglishRevisionDatabase()
  
  data = init_values(database)

  random.shuffle(data)

  classify()

  save()