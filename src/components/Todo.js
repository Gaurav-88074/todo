import React from 'react'
import './Todo.css'
import { useState } from 'react'
import NoteCard from './NoteCard'
const Todo = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);
    // const [checked, setChecked] = useState([]);
    const marked = new Map();
    function addButtonHandler() {
        console.log(note);
        setNotes(
            [
                ...notes,
                note
            ]
        )
        setNote("");
    }
    function resetButtonHandler() {
        setNote("");
    }
    function clearButtonHandler() {
        setNotes(
            notes.filter((value,index)=>marked.get(value)==false)
        );
        console.log(marked);
        marked.clear();
        console.log(marked);
    }
    function renderCard(note, index) {
        // marked.clear();
        return <NoteCard
            data={note}
            key={note}
            id={index}
            setNotes={setNotes}
            notes={notes}
            marked={marked}
        />
    }
    return (
        <section className='todo'>
            <div className="container-1">
                <div className="form-group">
                    <label >what needs to be done?</label>
                    <textarea
                        value={note}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={(e) => { setNote(e.target.value) }}
                    ></textarea>
                </div>
            </div>
            <div className="container-2">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addButtonHandler}
                >Add </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetButtonHandler}
                >Reset </button>
                <button 
                    type="button" 
                    className="btn btn-outline-warning"
                    onClick={clearButtonHandler}
                >Clear Completed</button>
            </div>
            <div className="container-3">
                
            </div>
            <div className="container-4">
                {
                    notes.map(renderCard)
                }
            </div>


        </section>
    )
}

export default Todo