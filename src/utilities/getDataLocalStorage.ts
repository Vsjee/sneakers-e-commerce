const getDataLocalStorage = (item: string) => {
  const data = localStorage.getItem(`${item}`);
  const parseData = data !== null ? JSON.parse(data) : null;
  return parseData;
};

export default getDataLocalStorage;
