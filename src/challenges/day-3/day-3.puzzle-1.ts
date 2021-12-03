export const day3Puzzle1 = (report: string[]): number => {
  let gammaBinary = ''
  let epsilonBinary = ''
  for (let i = 0; i < report[0].length; i++) {
    const zero = report.filter(line => parseInt(line.substring(i, i+1)) === 0).length
    const one = report.filter(line => parseInt(line.substring(i, i+1)) === 1).length
    gammaBinary = `${gammaBinary}${one > zero ? '1' : '0'}`
    epsilonBinary = `${epsilonBinary}${zero > one ? '1' : '0'}`
  }
  return parseInt(gammaBinary, 2) * parseInt(epsilonBinary, 2)
}
