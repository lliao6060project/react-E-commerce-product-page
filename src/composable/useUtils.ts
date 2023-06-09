export const mobileDevice = window.matchMedia('only screen and (max-width: 992px)').matches;

export const isMobileDevice = () => {
  const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
  return isMobileDevice
}

export const numberFormat = (num: number) => {
  return num
    .toString()
    .split(/(?=(?:\d{3})+(?:\.|$))/g)
    .join(",");
};