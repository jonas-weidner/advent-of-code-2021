import { day10Puzzle1, day10Puzzle2 } from './day-10.puzzle'

describe('Day 10', () => {
  it('Puzzle 1', () => {
    expect(day10Puzzle1('./data/mock.txt')).toBe(26397)
    expect(day10Puzzle1('./data/input.txt')).toBe(323691)
  })

  it('Puzzle 2', () => {
    expect(day10Puzzle2('./data/mock.txt')).toBe(288957)
    expect(day10Puzzle2('./data/input.txt')).toBe(2858785164)
  })
})
