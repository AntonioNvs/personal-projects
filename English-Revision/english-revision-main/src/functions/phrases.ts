import Database from '../database/data/phrases_with_complexity.json'
import TranslateDatabase from '../database/data/translate_phrases.json'
import { RegularizationString } from './manipulationStrings'

export interface PhraseDTO {
  id: number;
  phrase: string;
  complexity: number;
}

export interface PhraseWithTranslate extends PhraseDTO {
  translate: string;
}

export function SelectPhrases(): PhraseDTO {
  const size = Database.length

  const index = Math.ceil(Math.random() * size)

  const data = Database[index]

  return { ...data, phrase: RegularizationString(data.phrase)}
}

export function SelectPhrasesWithTranslate(): PhraseWithTranslate {
  const phraseData = SelectPhrases() as PhraseWithTranslate

  for(let row of TranslateDatabase) {
    if(row.id === phraseData.id) {
      phraseData.translate = RegularizationString(row.translate)
      break
    }
  }

  return phraseData
}