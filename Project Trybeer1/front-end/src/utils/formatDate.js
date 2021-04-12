import addZero from './addZero';

const formatDate = (orderDate) => {
  const date = new Date(orderDate);
  const day = addZero(date.getDate()).toString();
  const month = addZero(date.getMonth() + 1).toString();
  const formatedDate = `${day}/${month}`;

  return formatedDate;
};

export default formatDate;
