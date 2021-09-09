export const prepareTime = (start) => {
  const end = new Date().getTime();
  const time = end - start;
  let seconds = parseInt((time / 1000) % 60);
  let minutes = parseInt((time / (1000 * 60)) % 60);
  let hours = parseInt((time / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
