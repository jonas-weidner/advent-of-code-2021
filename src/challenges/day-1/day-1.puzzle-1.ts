export const day1Puzzle1 = (sweeps: number[]): number => {
  return sweeps.reduce((previous, current, index, array) => {
    return index > 0 && current > array[index-1] ? previous+1 : previous
  }, 0)
}



