import { day4Puzzle } from './day-4.puzzle'

describe('Day 4', () => {
  it('Puzzle 1', () => {
    expect(day4Puzzle('./data/mock.txt')).toBe(4512)
    expect(day4Puzzle('./data/input.txt')).toBe(8136)
  })

  it('Puzzle 2', () => {
    expect(day4Puzzle('./data/mock.txt', true)).toBe(1924)
    expect(day4Puzzle('./data/input.txt', true)).toBe(12738)
  })
})
