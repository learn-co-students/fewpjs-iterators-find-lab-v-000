const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
    let found = record.find(item => {
    return item.result === "W"
    //if an es6 function goes over two lines you have to use return
   })
    return !!found ? found.year : undefined
}
