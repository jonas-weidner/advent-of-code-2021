import { day3Puzzle1 } from './day-3.puzzle-1'
import { day3Puzzle2 } from './day-3.puzzle-2'
import { day3Data, day3Mock } from './day-3.data'

describe('Day 3', () => {
  it('Puzzle 1', () => {
    expect(day3Puzzle1(day3Mock)).toBe(198)
    expect(day3Puzzle1(day3Data)).toBe(4174964)
  })

  it('Puzzle 2', () => {
    expect(day3Puzzle2(day3Mock)).toBe(230)
    expect(day3Puzzle2(day3Data)).toBe(4474944)
  })
})
