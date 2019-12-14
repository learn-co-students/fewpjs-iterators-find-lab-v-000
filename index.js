function superbowlWin(record) {

  let win = record.find(object => object["result"] == "W");

  if (win == undefined) {
    return win
  } else {
    return win["year"];
  }

}
