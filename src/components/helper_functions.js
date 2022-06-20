export const formatNum = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " KZT";
