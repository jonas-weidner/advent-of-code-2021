import { day2Puzzle1 } from './day-2.puzzle-1'
import { day2Data, day2Mock } from './day-2.data'
import { day2Puzzle2 } from './day-2.puzzle-2'

describe('Day 2', () => {
  it('Puzzle 1', () => {
    expect(day2Puzzle1(day2Mock)).toBe(150)
    expect(day2Puzzle1(day2Data)).toBe(1882980)
  })

  it('Puzzle 2', () => {
    expect(day2Puzzle2(day2Mock)).toBe(900)
    expect(day2Puzzle2(day2Data)).toBe(1971232560)
  })
})
