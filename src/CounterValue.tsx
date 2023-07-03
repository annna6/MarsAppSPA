import {useContext} from "react";
import {CounterContext, CounterInterface} from "./CounterContainer";
export function CounterValue() {
    const counterContext : CounterInterface | null = useContext(CounterContext);
    return (
        <span> Hello {counterContext?.value} </span>
    )
}