const useLocalStorage = (name) => {
  const data = localStorage.getItem(name);
  if (data == null) {
    return [];
  } else {
    return JSON.parse(data);
  }
};

export default useLocalStorage;
