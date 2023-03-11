export function RegularizationString(text: string): string {
  let newText = text.toLowerCase()

  return newText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
}

export function SimilarityBetweenStrings(first: string, second: string): number {
  if(first.length < second.length)
    return SimilarityBetweenStrings(second, first)

  if(second.length === 0)
    return first.length

  let predicted_row = []

  for(let i = 0; i <= second.length; i++) {
    predicted_row.push(i)
  }

  for(let i = 0; i < first.length; i++) {
    const c1 = first[i]

    let current_row = [i + 1]
    
    let insertions = 0
    let deletions = 0
    let substitutions = 0

    for(let j = 0; j < second.length; j++) {
      const c2 = second[j]

      insertions = predicted_row[j + 1] + 1

      deletions = current_row[j] + 1

      substitutions = predicted_row[j] + ((c1 !== c2) ? 1 : 0)
      
      current_row.push(Math.min(insertions, deletions, substitutions))
    }

    predicted_row = current_row
  }

  return predicted_row[predicted_row.length-1]
}