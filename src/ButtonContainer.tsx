import {useContext} from "react";
import {CounterContext, CounterInterface} from "./CounterContainer";
export function ButtonContainer() {
    const counterContext : CounterInterface | null = useContext(CounterContext);
    return (
        <button onClick={counterContext?.incrementCounter}> Click me </button>
    );
}