import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'
import { useState } from 'react'

function App() {

  const { value } = useSelector( state => state.counter )
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noreferrer'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is: { value }</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={ () => {
          dispatch( incrementByAmount(Number(incrementAmount)));
        }}>
          Increment by { incrementAmount }
        </button>
      </div>
    </>
  )
}

export default App
