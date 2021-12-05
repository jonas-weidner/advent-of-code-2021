import fs from 'fs'
import path from 'path'

type Coordinate = {
  x: number,
  y: number
}

type Line = {
  start: Coordinate
  end: Coordinate
}

type Grid = number[][]

const prepareData = (filePath: string): Line[] => {
  const rows = fs.readFileSync(path.join(__dirname, filePath)).toString().split('\n')
  return rows.filter(row => !!row.length).map(row => {
    const coordinates = row.trim().split(' -> ')
    const start = coordinates[0].trim().split(',').map(stringNumber => parseInt(stringNumber))
    const end = coordinates[1].trim().split(',').map(stringNumber => parseInt(stringNumber))
    return {
      start: {
        x: start[0],
        y: start[1]
      },
      end: {
        x: end[0],
        y: end[1]
      }
    }
  })
}

const findMaxValues = (input: Line[]): Coordinate => {
  return input.reduce((previousMax, current) => {
    return {
      x: Math.max(previousMax.x, current.start.x, current.end.x),
      y: Math.max(previousMax.y, current.start.y, current.end.y)
    }
  }, {
    x: 0,
    y: 0
  })
}

const createGrid = (lines: Line[]): Grid => {
  const maxValues = findMaxValues(lines)
  return Array(maxValues.y+1).fill(Array(maxValues.x+1).fill(0))
}

const fillDiagonal = (grid: Grid, line: Line) => {
  const xSteps = Math.abs(line.end.x - line.start.x)
  const ySteps = Math.abs(line.end.y - line.start.y)
  const isDiagonal = xSteps === ySteps
  if (isDiagonal) {
    const sorted = line.start.x > line.end.x ? {
      start: line.end,
      end: line.start
    } : line
    for (let i = 0; i <= xSteps; i++) {
      grid[sorted.start.y > sorted.end.y ? sorted.start.y-i : sorted.start.y+i][sorted.start.x + i]++
    }
  }
}

const fillVerticalOrHorizontal = (isHorizontal: boolean, grid: Grid, line: Line) => {
  const xy = isHorizontal ? 'x' : 'y'
  const start = Math.min(line.start[xy], line.end[xy])
  const end = Math.max(line.start[xy], line.end[xy])
  for (let i = start; i <= end; i++) {
    grid[isHorizontal ? line.start.y : i][isHorizontal ? i : line.start.x]++
  }
}

const fillGrid = (lines: Line[], referenceGrid: Grid, diagonal: boolean = false) => {
  const grid: Grid = JSON.parse(JSON.stringify(referenceGrid))
  lines.forEach(line => {
    const isHorizontal = line.start.y === line.end.y
    const isVertical = line.start.x === line.end.x
    if (isVertical || isHorizontal) { fillVerticalOrHorizontal(isHorizontal, grid, line) }
    if (diagonal && !isVertical && !isHorizontal) { fillDiagonal(grid, line) }
  })
  return grid
}

export const day5Puzzle1 = (filePath: string): number => {
  const lines = prepareData(filePath)
  return fillGrid(lines, createGrid(lines))
    .reduce((occurrence, current) => occurrence + current.filter(value => value >= 2).length, 0)
}

export const day5Puzzle2 = (filePath: string): number => {
  const lines = prepareData(filePath)
  return fillGrid(lines, createGrid(lines), true)
    .reduce((occurrence, current) => occurrence + current.filter(value => value >= 2).length, 0)
}
