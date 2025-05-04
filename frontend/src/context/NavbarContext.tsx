'use client';
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface ShowNavbarContextValue {
  showNavbar: boolean;
  setShowNavbar: (val: boolean) => void;
}

const ShowNavbarContext = createContext<ShowNavbarContextValue>({
  showNavbar: false,
  setShowNavbar: () => {},
});

export function ShowNavbarProvider({ children }: { children: ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <ShowNavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </ShowNavbarContext.Provider>
  );
}

export function useShowNavbarContext() {
    return useContext(ShowNavbarContext);
}
