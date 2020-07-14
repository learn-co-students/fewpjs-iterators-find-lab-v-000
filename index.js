const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records){
  let result = records.find(record => record.result === 'W')
  return result ? result.year : undefined;
};