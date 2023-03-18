// code your solution here
function superbowlWin(records) {
    const win = records.find(record => record.result === "W");
    return win ? win.year : undefined;
  }