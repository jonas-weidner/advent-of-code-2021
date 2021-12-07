import fs from 'fs'
import path from 'path'

export const day7Puzzle = (file: string, second?: boolean) => {
  const horPos = fs.readFileSync(path.join(__dirname, file)).toString().split(',').map(s => parseInt(s))
  const fuelCosts: number[] = []
  for (let pos = Math.min(...horPos); pos <= Math.max(...horPos); pos++) {
    fuelCosts.push(horPos.reduce((fuel, current) => {
      const diff = Math.abs(current - pos)
      if (!second) { return fuel + diff }
      let secondSum = 0
      for (let i=1; i<=diff; i++) { secondSum += i }
      return fuel + secondSum
    }, 0))
  }
  return Math.min(...fuelCosts)
}
