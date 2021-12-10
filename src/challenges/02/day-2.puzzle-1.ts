interface Position {
  depth: number
  horizontal: number
  aim?: number
}

export const day2Puzzle1 = (input: {command: string, value: number}[]): number => {
  const initial: Position = {
    depth: 0,
    horizontal: 0
  }

  const position = input.reduce((previous, current) => {
    const { depth, horizontal } = previous
    const { command, value } = current
    if (command === 'forward')
    { return {
      ...previous,
      horizontal: horizontal + value
    } }

    return {
      ...previous,
      depth: command === 'down' ? depth+value : depth-value
    }
  }, initial)

  return position.depth * position.horizontal
}


export const day2Puzzle2 = (input: {command: string, value: number}[]): number => {
  const initial: Position = {
    depth: 0,
    horizontal: 0,
    aim: 0
  }

  const position = input.reduce((previous, current) => {
    const { depth, horizontal, aim } = previous
    const { command, value } = current
    if (command === 'forward')
    { return {
      ...previous,
      horizontal: horizontal + value,
      depth: depth + (aim! * value)
    } }

    return {
      ...previous,
      aim: command === 'down' ? aim!+value : aim!-value
    }
  }, initial)
  return position.depth * position.horizontal
}
