export function getFullTimeZone(timezone) {
  let options = {
    timeZone: `${timezone}`,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);
  const formatDate = formatter.format(new Date())
  return formatDate
}

export function getHourWithTimeZone(timezone, hourAfter) {
  let options = {
    timeZone: `${timezone}`,
    hour: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);
  const formatHour = formatter.format(new Date())
  const newHour = parseInt(formatHour) + hourAfter
  if(newHour === 24) {
    return "00"
  } else if (newHour > 24) {
    return newHour - 24
  }
   else {
    return newHour
  }
}