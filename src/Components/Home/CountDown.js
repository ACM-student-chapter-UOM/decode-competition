export const countDown = () => {
  const countDate = new Date("Nov 13 2021 08:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day).toString().padStart(2, '0');
  const textHour = Math.floor((gap % day) / hour).toString().padStart(2, '0');
  const textMinute = Math.floor((gap % hour) / minute).toString().padStart(2, '0');
  const textSecond = Math.floor((gap % minute) / second).toString().padStart(2, '0');

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

