import { day4Puzzle1, day4Puzzle2 } from './day-4.puzzle'

describe('Day 4', () => {
  it('Puzzle 1', () => {
    expect(day4Puzzle1('./data/mock.txt')).toBe(4512)
    expect(day4Puzzle1('./data/input.txt')).toBe(8136)
  })

  it('Puzzle 2', () => {
    expect(day4Puzzle2('./data/mock.txt')).toBe(1924)
    expect(day4Puzzle2('./data/input.txt')).toBe(12738)
  })
})
