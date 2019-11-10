function superbowlWin(arr) {
  let bowlWin = arr.find(el => el['result'] === 'W')
  if (bowlWin) {
    return bowlWin.year
  }
}