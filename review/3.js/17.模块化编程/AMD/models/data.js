define(function (require, factory) {
  function getDate() {
    let date = new Date();
    return `今天是${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
  }
  return {
    getDate,
  };
});
