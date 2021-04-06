import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes'));
  const [notes, setNotes ] = useState(notesData || []);
  const [title, setTitle ] = useState('');
  const [body, setBody ] = useState('');

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  useEffect(() => {
      const notesData = JSON.parse(localStorage.getItem('notes'))

      if (notesData) {
          setNotes(notesData)
      }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
          <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <p>Add note</p>

      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>add Note</button>
      </form>
    </div>
  )

}

const Note = ({ note, removeNote }) => {
    useEffect(() => {
        console.log('Setting up effect!');
    }, []); //若不加 [] , 每輸入一次就會render一次

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>X</button>
        </div>
    )
}

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
