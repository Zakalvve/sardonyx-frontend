import { useContext } from "react";
import { LoggingContext } from "@/core/context/loggingContext";

export const useLogging = () => useContext(LoggingContext);