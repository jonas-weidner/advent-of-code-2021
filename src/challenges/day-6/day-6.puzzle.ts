import fs from 'fs'
import path from 'path'

const prepareData = (file: string) => {
  const fish = fs.readFileSync(path.join(__dirname, file)).toString().split(',').map(s => parseInt(s))
  return Array.from(Array(9), (_, i) => fish.filter(f => f === i).length)
}

export const day6Puzzle = (file: string, days: number = 80) => {
  const fish = prepareData(file)
  Array.from(Array(days)).forEach(() => {
    const fishThatSpawnNewFish = fish.shift()
    fish[6] += fishThatSpawnNewFish!
    fish.push(fishThatSpawnNewFish!)
  })
  return fish.reduce((sum, curr) => sum+curr, 0)
}
