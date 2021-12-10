export const day1Puzzle1 = (sweeps: number[]): number => {
  return sweeps.reduce((previous, current, index, array) => {
    return index > 0 && current > array[index-1] ? previous+1 : previous
  }, 0)
}

export const day1Puzzle2 = (sweeps: number[]): number => {
  const sweepWindows = sweeps
    .reduce((previous, current, index, array) => array[index+1] && array[index+2]
      ? [...previous, current + array[index+1] + array[index+2]] : previous, [] as number[])

  return day1Puzzle1(sweepWindows)
}
