import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NodeList = ({ removeNote }) => {
    const { notes } = useContext(NotesContext)
    return notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote} />
    ))
}

export { NodeList as default }