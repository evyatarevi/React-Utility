const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => setCounter(counter + 1);
  const removeOne = () => setCounter(counter - 1);

  return [counter, addOne, removeOne];
};

export default useCounter;
