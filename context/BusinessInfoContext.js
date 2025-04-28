"use client";

import { createContext, useContext } from "react";
import { businessInfo } from "@/constants/content";

const BusinessInfoContext = createContext(null);

export function BusinessInfoProvider({ children }) {
  return (
    <BusinessInfoContext.Provider value={businessInfo}>
      {children}
    </BusinessInfoContext.Provider>
  );
}

export function useBusinessInfo() {
  const context = useContext(BusinessInfoContext);
  if (!context) {
    throw new Error(
      "useBusinessInfo must be used within a BusinessInfoProvider"
    );
  }
  return context;
}
