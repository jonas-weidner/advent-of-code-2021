import { day4Puzzle1 } from './day-4.puzzle-1'
// import { day4Puzzle2 } from './day-4.puzzle-2'
import { day4Mock } from './day-4.data'

describe('Day 3', () => {
  it('Puzzle 1', () => {
    expect(day4Puzzle1(day4Mock)).toBe(198)
    // expect(day4Puzzle1(day4Data)).toBe(4174964)
  })

  // it('Puzzle 2', () => {
  //   expect(day4Puzzle2(day4Mock)).toBe(230)
  //   expect(day4Puzzle2(day4Data)).toBe(4474944)
  // })
})
