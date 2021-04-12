module.exports = (num) => {
  const NINE = 9;
  if (num <= NINE) return `0${num}`;
  return num;
};
