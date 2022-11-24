const getDataLocalStorage = (item: string): Object => {
  const data = localStorage.getItem(`${item}`);
  const parseData = data !== null ? JSON.parse(data) : null;
  return parseData;
};

export default getDataLocalStorage;
