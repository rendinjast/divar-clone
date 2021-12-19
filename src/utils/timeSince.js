const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  interval = seconds / 2592000;
  if (interval > 1) {
    return `${Math.floor(interval)} ماه`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return `${Math.floor(interval)} روز پیش`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return `${Math.floor(interval)} ساعت پیش`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)} دقیقه پیش`;
  }
  return 'چند لحظه پیش';
};
export default timeSince;
