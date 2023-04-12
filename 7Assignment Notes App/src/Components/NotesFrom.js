import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../Redux/action';
import "./NotesFrom.css"
import '../App.css';


function NotesFrom() {

    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    const dispatch = useDispatch();

    function titleData(e) {
        return (
            setTitle(e.target.value)
        )
    }

    function contentData(e) {
        return (
            setContent(e.target.value)
        )
    }

    function handleSubmission(e) {
        e.preventDefault() // to prevent page refresh
        console.log(title);
        console.log(content);
        console.log("hi...");

        dispatch(addNote(title, content))
        setTitle("")
        setContent("")
    }


    return (
        <div id='notesform_div'>
            <h1>NOTES APP</h1>
            <div>

            <form onSubmit={handleSubmission} className='add_card'>
                {/* <label>Title</label> */}
                <input type='text' name='title' value={title} placeholder='Title...' onChange={titleData} className='input_text ' required />
                {/* <label>Content</label> */}
                {/* <input type='text' name='content' value={content} placeholder='Enter content...' onChange={contentData} /> */}
                <textarea name='content' value={content} placeholder='Note...' onChange={contentData}  className='input_textarea' required/>

                <button type='submit' class="button-3 btn_submit" >Add Note</button>
            </form>

            
            </div>
        </div>
    );
}

export default NotesFrom;