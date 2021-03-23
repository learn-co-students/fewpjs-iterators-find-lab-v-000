const testVar = {}

function testFunc() {
    return "hi"
}

function superbowlWin(aryOfObjs) {
    //   let winner = aryOfObjs.find(obj=>obj.result==="W");
    //   return (!!winner)? winner.year : winner;

    let win = aryOfObjs.find(win => win.result === "W")
    return win && win.year
}