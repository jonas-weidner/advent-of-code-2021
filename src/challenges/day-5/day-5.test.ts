import { day5Puzzle1, day5Puzzle2 } from './day-5.puzzle'

describe('Day 5', () => {
  it('Puzzle 1', () => {
    expect(day5Puzzle1('./data/mock.txt')).toBe(5)
    expect(day5Puzzle1('./data/input.txt')).toBe(6461)
  })

  it('Puzzle 2', () => {
    expect(day5Puzzle2('./data/mock.txt')).toBe(12)
    expect(day5Puzzle2('./data/input.txt')).toBe(18065)
  })
})
