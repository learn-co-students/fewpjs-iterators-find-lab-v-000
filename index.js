function superbowlWin(records) {
  let win = records.find( record => record.result === "W" )
    if (win)
      return win.year
    else
      return undefined
  }