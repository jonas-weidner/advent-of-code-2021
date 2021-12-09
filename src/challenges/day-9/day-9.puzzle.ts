import fs from 'fs'
import path from 'path'

const prepareData = (file: string) => fs.readFileSync(path.join(__dirname, file)).toString().split('\n')
  .filter(l => l.length).map(l => l.split('').map(c => parseInt(c)))

const lowPoints = (file: string, lines: number[][]) => lines.reduce((lineCoordinates, line, lineIdx, arr) => {
  return [...lineCoordinates, ...line.reduce((colCoordinates, height, colIdx) => {
    if (line[colIdx+1] <= height || line[colIdx-1] <= height) { return colCoordinates }
    if (arr[lineIdx-1] && arr[lineIdx-1][colIdx] <= height) { return colCoordinates }
    if (arr[lineIdx+1] && arr[lineIdx+1][colIdx] <= height) { return colCoordinates }
    return [...colCoordinates, [lineIdx, colIdx]]
  }, [] as number [][])]
}, [] as number[][])


export const day9Puzzle1 = (file: string) => {
  const lines = prepareData(file)
  return lowPoints(file, prepareData(file)).reduce((risk, point) => risk + 1 + lines[point[0]][point[1]], 0)
}

const go = (cs: number[][], lines: number[][]): number[][] => {
  const lineIdx = cs[cs.length-1][0]
  const colIdx = cs[cs.length-1][1]
  const unique = (arr: number[][]) => arr.filter(c => !cs.find(co => co[0] === c[0] && co[1]===c[1]))
  const condition = (lIdx: number, cIdx: number) => {
    return !!lines[lIdx] && !!lines[lIdx][cIdx] && lines[lIdx][cIdx] !== 9 && !cs.find(c => c[0]===lIdx && c[1]===cIdx)
  }
  [[lineIdx-1, colIdx], [lineIdx+1, colIdx], [lineIdx, colIdx-1], [lineIdx, colIdx+1]].forEach(c => {
    if (condition(c[0], c[1])) { cs.push(...unique(go([...cs, c], lines))) }
  })
  return cs
}

export const day9Puzzle2 = (file: string) => {
  const lines = prepareData(file)
  const basins = lowPoints(file, lines).map(point => go([point], lines).length).sort((a, b) => b-a)
  return basins[0] * basins[1] * basins[2]
}
