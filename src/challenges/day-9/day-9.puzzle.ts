import fs from 'fs'
import path from 'path'

const prepareData = (file: string) => fs
  .readFileSync(path.join(__dirname, file)).toString().split('\n').filter(l => l.length).map(l => {
    return l.split('').map(c => parseInt(c))
  })

export const day9Puzzle1 = (file: string) => prepareData(file).reduce((risk, line, lineIdx, arr) => {
  return risk + line.reduce((lineRisk, height, colIdx) => {
    if (line[colIdx+1] <= height || line[colIdx-1] <= height) { return lineRisk }
    if (arr[lineIdx-1] && arr[lineIdx-1][colIdx] <= height) { return lineRisk }
    if (arr[lineIdx+1] && arr[lineIdx+1][colIdx] <= height) { return lineRisk }
    return lineRisk + 1 + height
  }, 0)
}, 0)
