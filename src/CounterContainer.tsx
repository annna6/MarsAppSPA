import React, {useEffect, useState} from "react";
import { CounterWithMessage } from "./CounterWithMessage";
import { ButtonContainer } from "./ButtonContainer";

export function CounterContainer() {
    const [count, setCount] = useState<number>(0);
    useEffect(() : void => {
        let countKey : string | null = localStorage.getItem("count");
        setCount(countKey ? Number(countKey) : 0);
    }, []);

    function incrementCounter() : void {
        localStorage.setItem("count", JSON.stringify(count + 1));
        setCount(count + 1);
    }

    return (
        <div>
            <ButtonContainer incrementCounter={incrementCounter}/>
            <CounterWithMessage counter={count}/>
        </div>
    )
}

/*

Comp 1 - Comp 2 AND Comp 3
Comp 2 - button
Comp 3 - Comp 4 + message
 */