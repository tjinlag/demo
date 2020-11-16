const tokenFormatDate = /D{1,2}|M{1,2}|YY(?:YY)?|([Hms])\1?|"[^"]*"|'[^']*'/g;

function pad(vNumber, width = 2) {
  let numAsString = vNumber.toString();

  while (numAsString.length < width) {
    numAsString = '0' + numAsString;
  }

  return numAsString;
}

const Format = {
  money: (amount) => `${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
  date: (date, mask = 'HH:mm DD-MM-YYYY') => {
    if (!(date instanceof Date)) {
      // eslint-disable-next-line no-param-reassign
      date = new Date(date);
    }
  
    if (Number.isNaN(date)) {
      throw TypeError('Invalid date');
    }
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const flags = {
      H: hours,
      HH: pad(hours),
      m: minutes,
      mm: pad(minutes),
      s: seconds,
      ss: pad(seconds),
      D: day,
      DD: pad(day),
      M: month + 1,
      MM: pad(month + 1),
      YY: String(year).slice(2),
      YYYY: year
    };
    return mask.replace(tokenFormatDate, function replacer(match) {
      if (match in flags) {
        return flags[match];
      }
  
      return match.slice(1, match.length - 1);
    });
  }
}

export default Format;