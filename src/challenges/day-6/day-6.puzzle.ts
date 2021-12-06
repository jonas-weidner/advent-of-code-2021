import fs from 'fs'
import path from 'path'

const prepareData = (file: string) => {
  const fish = fs
    .readFileSync(path.join(__dirname, file)).toString().split(',').map(s => parseInt(s.trim()))
  return Array.from(Array(9), (_, i) => fish.filter(f => f === i).length)
}

export const day6Puzzle = (file: string, days: number = 80) => {
  const fish = prepareData(file)
  for (let day = 0; day < days; day++) {
    const hasSpawnNew = fish.shift()
    fish[6] = fish[6] + hasSpawnNew!
    fish.push(hasSpawnNew!)
  }
  return fish.reduce((sum, curr) => sum+curr, 0)
}
