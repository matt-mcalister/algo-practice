function humanReadable(seconds) {
  let h = `${parseInt(seconds/3600, 10)}`
  let min = `${parseInt(seconds%3600/60, 10)}`
  let sec = `${parseInt(seconds%3600%60, 10)}`
  return [h,min,sec].map(el => el.length === 1 ? `0${el}` : el ).join(":")
}

// seconds to HH:MM:SS

console.log(humanReadable(0) === '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5) === '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60) === '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399) === '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999) === '99:59:59', 'humanReadable(359999)');
