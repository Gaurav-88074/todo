import React from 'react'
import './NoteCard.css'
import { useState } from 'react';
const NoteCard = (props) => {
    const notes = props.notes;
    const setNotes = props.setNotes;
    function deleteButtonHandler() {
        props.marked.delete(props.data);
        setNotes(
            notes.filter((element, index) => {
                return index != props.id
            })
        )
    }
    const [selected, setSelected] = useState(false);
    props.marked.set(props.data,selected);

    return (
        <div className='noteCard'>
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Note {props.id + 1}</h5>
                    <p className="card-text">
                        {
                            props.data
                        }</p>
                    <a href="#" className="btn btn-danger"
                        onClick={deleteButtonHandler}
                    >Delete</a>
                    {
                        selected==false
                        &&
                        <button 
                            type="button" 
                            className="btn btn-outline-secondary"
                            onClick={()=>{setSelected(!selected) } }
                        >Select</button>
                    }
                    {
                        selected==true
                        &&
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={()=>{setSelected(!selected) } }
                        >Selected</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default NoteCard