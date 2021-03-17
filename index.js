function superbowlWin(objArray) {
  const obj = objArray.find(obj => obj.result == "W");
  return !!obj ? obj.year : obj;
}