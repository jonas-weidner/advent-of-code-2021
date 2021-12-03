import { day1Puzzle1 } from 'challenges/day-1/day-1.puzzle-1'

export const day1Puzzle2 = (sweeps: number[]): number => {
  const sweepWindows = sweeps
    .reduce((previous, current, index, array) => array[index+1] && array[index+2]
      ? [...previous, current + array[index+1] + array[index+2]] : previous, [] as number[])

  return day1Puzzle1(sweepWindows)
}
