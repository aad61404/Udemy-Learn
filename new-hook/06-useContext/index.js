import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NoteApp from './components/NoteApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <NoteApp />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  

// const App = (props) => {
//   // const array = useState(10)
//   // useState不必使用 object ，每一次更新都是帶入新的object
//   // const [state, setState ] = useState({
//   //   count: props.count,
//   //   text: ''
//   // })

//   // const increment = () => {
//   //   setState({ count: state.count +1})
//   // }
//   // const decrement = () => {
//   //   setState({ count: state.count -1})
//   // }

//   // const reset = () => {
//   //   setState({ count: 0})
//   // }

//   const [count, setCount ] = useState(props.count);
//   const [text, setText ] = useState('');

//   useEffect(() => {
//     console.log('useEffect ran');
//     document.title = count
//   }, [count])

//   const increment = () => {
//     setCount(count +1)
//   }
//   const decrement = () => {
//     setCount(count -1)
//   }

//   const reset = () => {
//     setCount(0)
//   }


//   return (
//     <div>
//       {/* <p>The current count is {array[0]}</p> */}
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>reset</button>
//       <input value={text} onChange={(e) => setText(e.target.value) }/>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }


