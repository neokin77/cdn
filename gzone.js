const urlTarget = "https://gojoanimes.biz/";

function handlePopup(url) {
  window.open(url, "_blank");
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function popEvent(url, time) {
  localStorage.setItem('popupday', time);
  handlePopup(url);
}

document.addEventListener('click', (e) => {
  const popupStorage = localStorage.getItem('popupday');
  const timePop = new Date().getTime();
  const expireTimePop = 1000 * 60 * 60 * 24;
  console.log(expireTimePop);
  if (popupStorage === null) {
    popEvent(urlTarget, timePop);
  } else {
    const timeDiff = timePop - popupStorage;
    if (timeDiff > expireTimePop) {
      popEvent(urlTarget, timePop);
    }
  }
});
