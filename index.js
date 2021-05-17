function superbowlWin(records){
  const record = records.find( obj => obj.result === "W")
  return record ? record.year : undefined
}