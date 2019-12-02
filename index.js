const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(ob){
  let football = ob.find(element => element.result === 'W')
  if (football){
  return football.year
}
else {
  return undefined
}

}
