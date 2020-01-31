function superbowlWin(record) {
    const winning = record.find(({ result }) => result === 'W');
    if (winning != null) {
        return winning.year;
    }
}