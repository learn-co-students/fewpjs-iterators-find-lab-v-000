const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(aryOfObjs){
  let winner = aryOfObjs.find(obj=>obj.result==="W");
  return (!!winner)? winner.year : winner;
}
