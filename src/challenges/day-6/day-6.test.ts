import { day6Puzzle } from './day-6.puzzle'

describe('Day 5', () => {
  it('Puzzle 1', () => {
    expect(day6Puzzle('./data/mock.txt')).toBe(5934)
    expect(day6Puzzle('./data/input.txt')).toBe(362666)
  })

  it('Puzzle 2', () => {
    expect(day6Puzzle('./data/mock.txt', 256)).toBe(26984457539)
    expect(day6Puzzle('./data/input.txt', 256)).toBe(1640526601595)
  })
})
