superbowlWin = (totalRecord) => {
  let resultObj = totalRecord.find(record => record.result === 'W' || record.result === 'w')
  return (!!resultObj ? resultObj.year : undefined)
}