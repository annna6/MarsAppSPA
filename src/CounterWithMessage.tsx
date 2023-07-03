import {CounterValue} from "./CounterValue";

export function CounterWithMessage(props : any) {
    return (
        <div>
            <CounterValue count = {props.counter}></CounterValue>
            <p>Intense counting</p>
        </div>
    )
}