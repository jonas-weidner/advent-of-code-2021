import fs from 'fs'
import path from 'path'

type BingoField = {
  value: number;
  called: boolean
}

const assignCalled = (boards: BingoField[][][], drawnNumber: number) => {
  for (let boardIndex=0; boardIndex<boards.length; boardIndex++) {
    for (let lineIndex=0; lineIndex<5; lineIndex++) {
      const numberIndex = boards[boardIndex][lineIndex]
        .findIndex(field => field.value === drawnNumber)
      if (numberIndex !== -1) { boards[boardIndex][lineIndex][numberIndex].called = true }
    }
  }
}

const prepareData = (filePath: string) => {
  const input = fs.readFileSync(path.join(__dirname, filePath)).toString()
  const lines = input.split('\n')
  const drawnNumbers: number[] = lines.splice(0, 1)[0].split(',')
    .map(stringNumber => parseInt(stringNumber))

  const boards: BingoField[][][] = []
  while (lines.length >= 6) {
    const boardLines: BingoField[][] = []
    for (let i=1; i<6; i++)
    { boardLines.push(lines[i].trim()
      .replace(/\s{2,}/g, ' ').split(' ').map(stringNumber => {
        return {
          value: parseInt(stringNumber.trim()),
          called: false
        }
      })) }

    boards.push(boardLines)
    lines.splice(0, 6)
  }

  return {
    boards,
    drawnNumbers
  }
}

const checkForCompleteRow = (boards: BingoField[][][]): number[] => {
  const indices: number[] = []
  for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
    for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
      const complete = boards[boardIndex][rowIndex].filter(row => !row.called)
      if (!complete.length) { indices.push(boardIndex) }
    }
  }
  return indices
}

const checkForCompleteColumn = (boards: BingoField[][][]): number[] => {
  const indices: number[] = []
  boards.forEach((board, boardIndex) => {
    const boardColumns = [0, 1, 2, 3, 4].map(columnIndex => board.map(row => row[columnIndex]))
    boardColumns.forEach(boardColumn => {
      const complete = boardColumn.filter(column => !column.called)
      if (!complete.length) { indices.push(boardIndex) }
    })
  })
  return indices
}

const calculateUnmarkedSum = (rows: BingoField[][]) => {
  return rows.reduce((unmarkedSum, currRow) => {
    return unmarkedSum + currRow.reduce((lineUnmarkedSum, currField) => {
      return !currField.called ? lineUnmarkedSum+currField.value : lineUnmarkedSum
    }, 0)
  }, 0)
}


export const day4Puzzle1 = (filePath: string): number => {
  const { drawnNumbers, boards } = prepareData(filePath)
  for (const drawnNumber of drawnNumbers) {
    assignCalled(boards, drawnNumber)
    const completedRow = checkForCompleteRow(boards)[0]
    const completedColumn = checkForCompleteColumn(boards)[0]
    if (completedRow || completedColumn) {
      return calculateUnmarkedSum(boards[(completedRow || completedColumn) as number]) * drawnNumber
    }
  }
  return 0
}

const calculateResult = (boards: BingoField[][][], drawnNumber: number, boardsThatWon: {boardIndex: number; result: number}[], indices: number[]): {boardIndex: number; result: number}[] => {
  return indices.map(boardIndex => {
    const hasAlreadyWon = boardsThatWon.find(boardThatWon => boardThatWon.boardIndex === boardIndex)
    if (!hasAlreadyWon) {
      return {
        boardIndex,
        result: calculateUnmarkedSum(boards[boardIndex]) * drawnNumber
      }
    }
    return undefined
  }).filter(el => !!el) as {boardIndex: number; result: number}[]
}

export const day4Puzzle2 = (filePath: string): number => {
  const { drawnNumbers, boards } = prepareData(filePath)
  const boardsThatWon: {boardIndex: number; result: number}[] = []
  for (const drawnNumber of drawnNumbers) {
    assignCalled(boards, drawnNumber)
    boardsThatWon.push(...calculateResult(boards, drawnNumber, boardsThatWon, checkForCompleteRow(boards)))
    boardsThatWon.push(...calculateResult(boards, drawnNumber, boardsThatWon, checkForCompleteColumn(boards)))
  }
  return boardsThatWon[boardsThatWon.length-1].result
}
