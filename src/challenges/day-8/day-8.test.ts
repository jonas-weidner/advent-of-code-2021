import { day8Puzzle1, day8Puzzle2 } from './day-8.puzzle'

describe('Day 8', () => {
  it('Puzzle 1', () => {
    expect(day8Puzzle1('./data/mock.txt')).toBe(26)
    expect(day8Puzzle1('./data/input.txt')).toBe(369)
  })

  it('Puzzle 2', () => {
    expect(day8Puzzle2('./data/mock.txt')).toBe(61229)
    expect(day8Puzzle2('./data/input.txt')).toBe(1031553)
  })
})
