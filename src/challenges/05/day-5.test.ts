import { day5Puzzle } from './day-5.puzzle'

describe('Day 5', () => {
  it('Puzzle 1', () => {
    expect(day5Puzzle('./data/mock.txt')).toBe(5)
    expect(day5Puzzle('./data/input.txt')).toBe(6461)
  })

  it('Puzzle 2', () => {
    expect(day5Puzzle('./data/mock.txt', true)).toBe(12)
    expect(day5Puzzle('./data/input.txt', true)).toBe(18065)
  })
})
