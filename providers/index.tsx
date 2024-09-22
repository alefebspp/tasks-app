"use client";
import React, { ReactNode } from "react";

import { TaskContextProvider } from "@/contexts/taskContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return <TaskContextProvider>{children}</TaskContextProvider>;
};

export default Providers;
