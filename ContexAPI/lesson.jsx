// create context

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  const setGoku = () => {
    setCounter(9001);
  };

  return (
    <AppContext.Provider
      value={{
        counter,
        increaseCounter,
        decreaseCounter,
        resetCounter,
        setGoku,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider }; //  באופן עקרוני לא צריך לייצא את שפפקןנטקסק כיון שהשימוש בו נעשה כבר בפונקציה הבאה

export const useAppContext = () => {
  return useContext(AppContext);
};

// wrap the consumers
const App = () => {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
};

// use context value
const MainPage = () => {
  const { counter } = useAppContext(); // return value object;

  return <div className="main-page"></div>;
};

export default MainPage;


const Content = () => {
    const {increaseCounter} = useAppContext();

    return(
        <button onClick={increaseCounter}>+</button>
    )
}

export default Content;