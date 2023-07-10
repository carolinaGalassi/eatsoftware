import React, { useState, createContext } from "react";

export const EatContext = createContext();

export const ContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [openSideBar, setOpenSideBar] = useState(false);

  const updateStep = (value) => setStep(value);
  const updateOpenSideBar = (value) => setOpenSideBar(value);

  return (
    <EatContext.Provider
      value={{ step, updateStep, openSideBar, updateOpenSideBar }}
    >
      {children}
    </EatContext.Provider>
  );
};
