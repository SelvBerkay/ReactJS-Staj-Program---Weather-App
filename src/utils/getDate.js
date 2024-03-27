export function getDate() {
  const dt = new Date();
  const month = dt.getMonth() + 1;
  const year = dt.getFullYear();
  const date = dt.getDate();
  let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dt.getDay()]
  return `${weekday} - ${month}/${date}/${year}`;
}