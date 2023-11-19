import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, resetCounter } from "../redux/state/counter/counterSlice"

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h1 className="card-title text-light">Counter App</h1>
            </div>
            <div className="card-body">
                <h5 className="number">{count}</h5>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increment</button>
                    <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrement</button>
                    <button className="btn btn-primary" onClick={() => dispatch(resetCounter())}>Reset Counter</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
