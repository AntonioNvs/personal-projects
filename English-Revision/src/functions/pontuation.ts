import { RegularizationString, SimilarityBetweenStrings } from "./manipulationStrings"
import { PhraseDTO, PhraseWithTranslate } from "./phrases"

const key = 'pontuation'

interface GetPontuationParams {
  answer: string;
  data: PhraseDTO
}

interface GetPontuationParamsTranslate {
  answer: string;
  data: PhraseWithTranslate;
}

export function GetPontuationInAPhrase({ answer, data }: GetPontuationParams): number {
  const resultOfAlgoritmh = SimilarityBetweenStrings(RegularizationString(answer), data.phrase)
  
  return GetPnt(answer.length, data.complexity, resultOfAlgoritmh, 3)
}

function GetPnt(length: number, complexity: number, resultOfAlgoritmh: number, w = 5): number {
  return (length - w*resultOfAlgoritmh > 0) ? complexity : -complexity
}

export function GetPontuationInAPhraseTranslate({ answer, data }: GetPontuationParamsTranslate): number {
  const resultOfAlgoritmh = SimilarityBetweenStrings(RegularizationString(answer), RegularizationString(data.translate))
  
  return GetPnt(answer.length, data.complexity, resultOfAlgoritmh)
}

export function GetPontuation(): number {
  return Number(localStorage.getItem(key))
}

export function SetPontuation(pont: number): number {
  const sum = GetPontuation() + pont

  localStorage.setItem(key, String(sum))

  return sum
}

