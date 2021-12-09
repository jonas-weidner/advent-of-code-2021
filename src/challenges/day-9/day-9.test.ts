import { day9Puzzle1 } from './day-9.puzzle'

describe('Day 9', () => {
  it('Puzzle 1', () => {
    expect(day9Puzzle1('./data/mock.txt')).toBe(15)
    expect(day9Puzzle1('./data/input.txt')).toBe(478)
  })

  // it('Puzzle 2', () => {
  //   expect(day8Puzzle2('./data/mock.txt')).toBe(61229)
  //   expect(day8Puzzle2('./data/input.txt')).toBe(1031553)
  // })
})
