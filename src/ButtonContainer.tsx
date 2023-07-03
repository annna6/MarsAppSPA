import {useContext} from "react";
import {CounterContext, CounterInterface} from "./CounterContainer";
import "./Counter.scss";
export function ButtonContainer() {
    const counterContext : CounterInterface | null = useContext(CounterContext);
    return (
        <button onClick={counterContext?.incrementCounter}> Click me </button>
    );
}