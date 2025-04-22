"use client";

import { PrimeReactProvider } from "primereact/api";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const PrimeUIProvider = ({ children }: PropsWithChildren) => {
  return (
    <PrimeReactProvider
      value={{
        // unstyled: true,
        ripple: true,
        pt: {},
        ptOptions: {
          mergeSections: true,
          mergeProps: true,
          classNameMergeFunction: twMerge,
        },
      }}
    >
      {children}
    </PrimeReactProvider>
  );
};
