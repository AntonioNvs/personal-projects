from database import EnglishRevisionDatabase
import pandas as pd

data = EnglishRevisionDatabase().list_phrases()

dict_to_json = list()

for row in data:
  dict_to_json.append({
    'id': row[0],
    'translate': row[3].strip()
  })

dataframe = pd.DataFrame(dict_to_json)

dataframe.to_json('data/files/translate_phrases.json', orient='records')
