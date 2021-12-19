const useLocalStorage = () => {
  const storage = localStorage;

  const add = (key, value) => {
    storage.setItem(key, value);
  };
  const remove = (key) => {
    storage.removeItem(key);
  };
  const get = (key) => {
    storage.getItem(key);
  };

  return { add, remove, get };
};

export default useLocalStorage;
