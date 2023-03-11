from database.database import EnglishRevisionDatabase
import pandas as pd
import csv

field_names = ['id', 'phrase', 'document_id', 'level']
data_to_csv = []

database = EnglishRevisionDatabase()

dataframe = pd.read_csv('data/files/phrases.csv')

for row in dataframe.values:
  phrase = database.find_phrase_by_id(row[0])[0]

  try:
    data_to_csv.append({
      'id': row[0],
      'phrase': phrase[1],
      'document_id': row[2],
      'level': row[3]
    })
  except IndexError:
    pass

with open('data/files/phrases2.csv', 'w') as csvfile:
  writer = csv.DictWriter(csvfile, fieldnames=field_names)
  writer.writeheader()
  writer.writerows(data_to_csv)