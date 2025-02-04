import { Button } from "@/core/components/ui/button";
import React, { useState } from "react";

// Custom hook to manage counter state
export function useCounter(initialValue: number = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return { count, increment, decrement };
}

// HOC Factory that accepts an initial count and returns an HOC
export function withCounter(initialValue: number = 0) {
    return function HOC<TProps>(
        WrappedComponent: React.ComponentType<TProps & { count: number; increment: () => void; decrement: () => void }>
    ) {
        return function CounterComponent(props: TProps) {
            const counter = useCounter(initialValue); // ✅ Uses the provided initial value

            return <WrappedComponent {...props} {...counter} />;
        };
    };
}

// Example component to be wrapped
const CounterDisplayComponent = ({ count, increment, decrement }: { count: number; increment: () => void; decrement: () => void }) => (
    <div>
        <p>Count: {count}</p>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
    </div>
);

// ✅ Apply the HOC with an initial value
export const CounterDisplay = withCounter(10)(CounterDisplayComponent);

export default CounterDisplay;