interface Position {
  depth: number
  horizontal: number
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
      return {
        ...previous,
        horizontal: horizontal + value
      }

    return {
      ...previous,
      depth: command === 'down' ? depth+value : depth-value
    }
  }, initial)

  return position.depth * position.horizontal
}
