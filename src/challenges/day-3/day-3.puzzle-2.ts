export const day3Puzzle2 = (report: string[]): number => {
  const oxygen = findRating('oxygen', JSON.parse(JSON.stringify(report)))
  const co2 = findRating('co2', JSON.parse(JSON.stringify(report)))
  return oxygen * co2
}

const findRating = (type: 'oxygen' | 'co2', report: string[]): number => {
  for (let i = 0; i < report[0].length; i++) {
    const zero = report.filter(line => parseInt(line.substring(i, i+1)) === 0)
    const one = report.filter(line => parseInt(line.substring(i, i+1)) === 1)
    if (type === 'oxygen') report = one.length >= zero.length ? one : zero
    else report = zero.length > one.length ? one : zero
    if (report.length === 1) return parseInt(report[0], 2)
  }
  return 0
}
