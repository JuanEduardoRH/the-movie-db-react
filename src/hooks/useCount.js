import { useState } from "react";

export const useCount = (initial = 0) => {
    const [count, setCount] = useState(initial)

    const setValue = (value) => {
        setCount(value);
    }

    const increment = (step = 1) => {
        setCount(count + step);
    }

    const decrement = (step = 1) => {
        if (count <= 0) {
            reset();
            return;
        }
        setCount(count - step);
    }

    const reset = () => {
        setCount(initial);
    }

    return { setValue, increment, decrement, reset, count };
}
