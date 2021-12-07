import { day7Puzzle } from './day-7.puzzle'

describe('Day 7', () => {
  it('Puzzle 1', () => {
    expect(day7Puzzle('./data/mock.txt')).toBe(37)
    expect(day7Puzzle('./data/input.txt')).toBe(342534)
  })

  it('Puzzle 2', () => {
    expect(day7Puzzle('./data/mock.txt', true)).toBe(168)
    expect(day7Puzzle('./data/input.txt', true)).toBe(94004208)
  })
})
