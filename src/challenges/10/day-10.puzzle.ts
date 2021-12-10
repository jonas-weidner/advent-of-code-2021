import fs from 'fs'
import path from 'path'

const prepareData = (file: string, incomplete?: boolean) => fs.readFileSync(path.join(__dirname, file))
  .toString().split('\n').filter(l => l.length).map(l => {
    while (l.match(/<>|\[]|\(\)|{}/g)?.length) { l = l.replace(/<>|\[]|\(\)|{}/g, '') }
    return l
  }).filter(l => incomplete ? !l.match(/[)}>\]]/g)?.length : l.match(/[)}>\]]/g)?.length)

export const day10Puzzle1 = (file: string) => prepareData(file).reduce((sum, curr) => {
  const first = curr.match(/[)}>\]]/g)![0]
  if (first === '>') { return sum + 25137 }
  if (first === '}') { return sum + 1197 }
  if (first === ']') { return sum + 57 }
  if (first === ')') { return sum + 3 }
  return sum
}, 0)

export const day10Puzzle2 = (file: string) => {
  const scores = prepareData(file, true).map(l => l.split('').reverse().reduce((sum, curr) => {
    if (curr === '(') { return sum*5 + 1 }
    if (curr === '[') { return sum*5 + 2 }
    if (curr === '{') { return sum*5 + 3 }
    if (curr === '<') { return sum*5 + 4 }
    return sum
  }, 0)).sort((a, b) => b-a)
  return scores[(scores.length-1)/2]
}
