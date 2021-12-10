import { day1Puzzle1, day1Puzzle2 } from './day-1.puzzle-1'
import { puzzle1Data, puzzle1Mock } from './day-1.data'

describe('Day 1', () => {
  it('Puzzle 1', () => {
    expect(day1Puzzle1(puzzle1Mock)).toBe(7)
    expect(day1Puzzle1(puzzle1Data)).toBe(1696)
  })

  it('Puzzle 2', () => {
    expect(day1Puzzle2(puzzle1Mock)).toBe(5)
    expect(day1Puzzle2(puzzle1Data)).toBe(1737)
  })
})



