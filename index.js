const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records){
  if (records.find(record => record['result']==="W"))
    return records.find(record => record['result']==="W")['year']
  else
    return undefined
}