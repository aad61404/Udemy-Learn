import React, { useEffect} from 'react'


const Note = ({ note, removeNote }) => {
    useEffect(() => {
        console.log('Setting up effect!');

        return () => {
            console.log('Cleaning up effect!');
        }
    }, []); //若不加 [] , 每輸入一次就會render一次

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>X</button>
        </div>
    )
}

export { Note as default }