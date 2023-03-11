from database.database import EnglishRevisionDatabase
import csv

data = EnglishRevisionDatabase().list_phrases()

dict_to_csv = list()

for row in data:
  # Filtrando a frase
  size_split = len(row[1].split(' '))

  if size_split <= 2: continue

  dict_to_csv.append({
    'id': row[0],
    'phrase': row[1],
    'document_id': row[3]
  })

field_names = ['id', 'phrase', 'document_id']


with open('data/files/all_phrases.csv', 'w', encoding='utf-8') as csvfile:
  writer = csv.DictWriter(csvfile, fieldnames=field_names)
  writer.writeheader()
  writer.writerows(dict_to_csv)

