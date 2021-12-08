import fs from 'fs'
import path from 'path'

const og = ['abcefg', 'cf', 'acdeg', 'acdfg', 'bcdf', 'abdfg', 'abdefg', 'acf', 'abcdefg', 'abcdfg']
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const fwL = (pattern: string[], len: number): string => pattern.find(n => n.length === len)!
const fiwL = (pattern: string[], len: number): string[] => pattern.filter(n => n.length === len)
const fiC = (input: string, cToFi: string[]) => input.replace(new RegExp(`([\\b${cToFi.join('')}\\b])`, 'g'), '')
const prepareData = (file: string) => fs
  .readFileSync(path.join(__dirname, file)).toString().split('\n').filter(l => l.length).map(l => {
    return { pattern: l.split(' | ')[0].trim().split(' '), output: l.split(' | ')[1].trim().split(' ') }
  })

export const day8Puzzle1 = (file: string) => prepareData(file)
  .reduce((sum, curr) => sum + curr.output.filter(o => [2, 4, 3, 7].includes(o.length)).length, 0)

export const day8Puzzle2 = (file: string) => {
  const lines = prepareData(file)
  return lines.reduce((sum, { pattern, output }) => {
    const pat = pattern.map(toSort => toSort.split('').sort().join('').trim())
    const a = fiC(fwL(pat, 3), [fwL(pat, 2)])
    const fiveFi = fiwL(pat, 5).map(n => fiC(n, [fwL(pat, 4), a]))
    const g = fwL(fiveFi, 1)
    const e = fwL(fiveFi.map(n => fiC(n, [g])), 1)
    const d = fwL(fiwL(pat, 5).map(n => fiC(n, [fwL(pat, 2), g, a, e])), 1)
    const b = fiC(fwL(pat, 4), [d, fwL(pat, 2)])
    const f = fwL(fiwL(pat, 5).map(n => fiC(n, [a, b, d, g])), 1)
    const c = fiC(fwL(pat, 2), [f])
    const mapped = output.map(n => {
      return n.split('').map(char => letters[[a, b, c, d, e, f, g].findIndex(l => l === char)]).sort().join('')
    })
    return sum + parseInt(mapped.map(m => og.findIndex(v => v === m)).join(''))
  }, 0)
}

