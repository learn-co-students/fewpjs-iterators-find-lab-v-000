const testVar = {}

function superbowlWin(array) {
  let win = array.find( s => s.result === "W" )
  if (win === undefined)
    return undefined
  else
    return win.year
}