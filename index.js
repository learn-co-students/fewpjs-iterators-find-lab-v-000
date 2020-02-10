function superbowlWin(record){
    let reco = record.find(r => r.result === "W")
    return !!reco ? reco.year : undefined
}