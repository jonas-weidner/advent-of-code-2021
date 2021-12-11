import { day11Puzzle } from './day-11.puzzle'

describe('Day 11', () => {
  it('Puzzle 1', () => {
    expect(day11Puzzle('./data/mock.txt')).toBe(1656)
    expect(day11Puzzle('./data/input.txt')).toBe(1649)
  })

  it('Puzzle 2', () => {
    expect(day11Puzzle('./data/mock.txt', true)).toBe(195)
    expect(day11Puzzle('./data/input.txt', true)).toBe(256)
  })
})
