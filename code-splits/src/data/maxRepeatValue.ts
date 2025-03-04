export const task = `
/*
 Given a list of words, the task is to identify which word or words occur most frequently.\n The goal is to determine the highest frequency of repetition and present the results in \n a structured sentence that includes the number of occurrences and the most repeated words.\n The solution should also handle cases where there is a tie for the maximum frequency \n of repetition.
*/

const words = [
  'sun',
  'water',
  'star',
  'wind',
  'star',
  'water',
  'earth'
];

function findMostFrequentWords(arr: string[]): string | null {
  // Write your code here
}
`
export const resolution = `
// Used to format the list of possible outcomes
const formatList = new Intl.ListFormat('es', {
  style: 'long',
  type: 'conjunction',
})

function findMostFrequentWords(arr: string[]): string | null {
  if (!arr || !Array.isArray(arr) || arr.length <= 0) return null;

  const words: Record<string, number> = {};

  for (const element of arr) {
    words[element] = (words[element] || 0) + 1;
  }

  const maxRepeat = Math.max(...Object.values(words));
  const coincidences = Object.keys(words).filter((w) => words[w] === maxRepeat);
  const pluralRepeat = maxRepeat > 1 ? 'times' : 'time';
  const pluralCoincidences = coincidences.length > 1 ? 'repeat' : 'repeats';
  const result =
    "\`\${formatList.format(coincidences)} \${pluralCoincidences} \${maxRepeat} \${pluralRepeat}\`";

  return result;
}
`
