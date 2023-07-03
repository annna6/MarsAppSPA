import React, { createContext, useEffect, useState} from "react";
import { CounterWithMessage } from "./CounterWithMessage";
import { ButtonContainer } from "./ButtonContainer";
import "./Counter.scss";
export interface CounterInterface {
    value : number,
    incrementCounter : any
}

export const CounterContext = createContext<CounterInterface | null>(null);

export function CounterContainer() {
    const [counter, setCounter] = useState<number>(0);
    useEffect(() : void => {
        let countKey : string | null = localStorage.getItem("counter");
        setCounter(countKey ? Number(countKey) : 0);
    }, []);

    function incrementCounter() : void {
        localStorage.setItem("counter", JSON.stringify(counter + 1));
        setCounter(counter + 1);
    }

    return (
        <div>
            <CounterContext.Provider value={{value: counter, incrementCounter: incrementCounter}}>
                <div className="counter-container">
                    <ButtonContainer/>
                    <CounterWithMessage/>
                </div>
            </CounterContext.Provider>
        </div>
    )
}

/*

Comp 1 - Comp 2 AND Comp 3
Comp 2 - button
Comp 3 - Comp 4 + message
 */