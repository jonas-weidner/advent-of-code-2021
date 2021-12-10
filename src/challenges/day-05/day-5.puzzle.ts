import fs from 'fs'
import path from 'path'

type Coordinate = { x: number; y: number; }
type Line = { start: Coordinate; end: Coordinate; }
type Grid = number[][]

const createGrid = (maxVal: Coordinate): Grid => Array(maxVal.y+1).fill(Array(maxVal.x+1).fill(0))
const equal = (line: Line, dir: 'x'|'y') => line.start[dir] === line.end[dir]
const diff = (line: Line, dir: 'x'|'y') => Math.abs(line.end[dir] - line.start[dir])
const occurrenceFilter = (g: Grid) => g.reduce((occ, curr) => occ + curr.filter(v => v>=2).length, 0)

const prepareData = (file: string): Line[] => fs.readFileSync(path.join(__dirname, file))
  .toString().split('\n').filter(row => !!row.length).map(row => {
    const cs = row.split('->').map(c => c.split(',').map(str => parseInt(str)))
    return { start: { x: cs[0][0], y: cs[0][1] }, end: { x: cs[1][0], y: cs[1][1] } }
  })

const gridSize = (lines: Line[]): Coordinate => lines.reduce((prevMax, curr) => {
  const { start, end } = curr
  return { x: Math.max(prevMax.x, start.x, end.x), y: Math.max(prevMax.y, start.y, end.y) }
}, { x: 0, y: 0 })

const fillDiagonal = (grid: Grid, line: Line) => {
  if (diff(line, 'x') === diff(line, 'y')) {
    const { start, end } = line.start.x > line.end.x ? { start: line.end, end: line.start } : line
    for (let i = 0; i <= diff(line, 'x'); i++) {
      grid[start.y > end.y ? start.y - i : start.y + i][start.x + i]++
    }
  }
}

const fillVerticalOrHorizontal = (isHorizontal: boolean, grid: Grid, line: Line) => {
  const xy = isHorizontal ? 'x' : 'y'
  for (let i = Math.min(line.start[xy], line.end[xy]); i <= Math.max(line.start[xy], line.end[xy]); i++) {
    grid[isHorizontal ? line.start.y : i][isHorizontal ? i : line.start.x]++
  }
}

const fillGrid = (lines: Line[], diagonal?: boolean) => lines.reduce((grid, line) => {
  if (equal(line, 'x') || equal(line, 'y')) { fillVerticalOrHorizontal(equal(line, 'y'), grid, line) }
  if (diagonal && !equal(line, 'x') && !equal(line, 'y')) { fillDiagonal(grid, line) }
  return grid
}, JSON.parse(JSON.stringify(createGrid(gridSize(lines)))))

export const day5Puzzle = (file: string, diagonal?: boolean) => occurrenceFilter(fillGrid(prepareData(file), diagonal))
