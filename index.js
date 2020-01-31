function superbowlWin(record) {
  return record.find(readStats) ? record.find(readStats).year : undefined;
  function readStats(stat) { return stat.result === "W" ? stat : undefined };
};

