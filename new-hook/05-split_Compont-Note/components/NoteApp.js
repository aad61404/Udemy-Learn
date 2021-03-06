import React, { useEffect, useState, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import Note from './Note'


const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])
    const [title, setTitle ] = useState('');
    const [body, setBody ] = useState('');

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    }

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))

        if (notesData) {
            dispatch({ type: 'POPULATE_NOTES', notes: notesData })
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

export { NoteApp as default }