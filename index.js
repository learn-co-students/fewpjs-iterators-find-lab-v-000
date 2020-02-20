const superbowlWin = (records) => {
  const search = records.find(record => record.result === "W");
  return (search === undefined) ? undefined : search.year;
}