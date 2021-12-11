import fs from 'fs'
import path from 'path'

const wasFlashed = (flashed: number[][], c: number[]) => flashed.find(f => f[0]===c[0] && f[1]===c[1])
const prepareData = (file: string) => fs.readFileSync(path.join(__dirname, file))
  .toString().split('\n').map(l => l.split('').map(v => parseInt(v)))

const adjacentArr = (lIdx: number, cIdx: number): number[][] => {
  return [
    [lIdx, cIdx+1], [lIdx, cIdx-1], [lIdx+1, cIdx], [lIdx-1, cIdx],
    [lIdx+1, cIdx+1], [lIdx-1, cIdx+1], [lIdx+1, cIdx-1], [lIdx-1, cIdx-1]
  ]
}

const flash = (coordinate: number[], lines: number[][], toFlash: number[][], flashed: number[][]) => {
  const lIdx = coordinate[0]
  const cIdx = coordinate[1]
  lines[lIdx][cIdx] = 0

  adjacentArr(lIdx, cIdx).forEach(c => {
    if (lines[c[0]] && lines[c[0]][c[1]] && !wasFlashed(flashed, c)) {
      if (lines[c[0]][c[1]]+1 > 9) { toFlash.push([c[0], c[1]]) }
      lines[c[0]][c[1]] += 1
    }
  })
  return flashed
}

export const day11Puzzle = (file: string, second?: boolean) => {
  let flashes = 0
  let step = 0
  const lines = prepareData(file)
  while (second || step < 100) {
    const flashed: number[][] = []
    const toFlash: number[][] = []
    lines.forEach((_, lIdx) => lines[lIdx] = lines[lIdx].map((c, cIdx) => {
      if (c+1 > 9) { toFlash.push([lIdx, cIdx]) }
      return c+1
    }))

    while (toFlash.length > 0) {
      const c = toFlash.shift()!
      if (!wasFlashed(flashed, c)) {
        flashes++
        flashed.push(c)
        flash(c, lines, toFlash, flashed)
      }
    }
    step++
    if (second && flashed.length === 100) { return step }
  }

  return flashes
}
