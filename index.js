
function superbowlWin(anArrayOfObjects){
  let foundObj = anArrayOfObjects.find(obj => obj.result === "W")
  if (!!foundObj) {
    return foundObj.year
  }
    
}
