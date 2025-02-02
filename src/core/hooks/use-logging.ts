import { useContext } from "react";
import { LoggingContext } from "@/core/context/logging-context";

export const useLogging = () => useContext(LoggingContext);