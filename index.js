

const superbowlWin = (array) => {
  let team = array.find(team => team.result == 'W')
  if (team) {
    return team.year
  }
  return undefined
}