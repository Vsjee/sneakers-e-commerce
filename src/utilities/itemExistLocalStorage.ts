const itemExistLocalStorage = (item: string): boolean => {
  const data = localStorage.getItem(`${item}`);
  const dataSet = data !== null ? true : false;
  return dataSet;
};

export default itemExistLocalStorage;
