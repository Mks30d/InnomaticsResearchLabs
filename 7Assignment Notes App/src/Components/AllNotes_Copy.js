import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote, updateNote } from '../Redux/action';
import "./AllNotes.css"
import '../App.css';


export default function AllNotes() {

  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const handleEditClick = (id, title, content) => {
    setEditingId(id);
    setEditedTitle(title);
    setEditedContent(content);
  };

  function  handleDeleteClick(index) {
    // confirm("Press a button!");
    let post = confirm('Are you sure you want to delete?');
        console.log(post)

        if(post==true) {
            console.log("Succes") 
            dispatch(removeNote(index))
        }
        else
        console.log("Canceled")
  }

  const handleUpdateClick = (id, title, content) => {
    if ( title=="" || content==""  ) {
      console.log("Error!!!!");
      alert("Title/Note can't be empty...")
    }

    else{
      dispatch(updateNote(id, title, content));
      setEditingId(null);
    }
  };  

  const renderNote = (note, index) => {
    
    if (editingId === index) {
      return (
        <>
            <div key={index} className='add_card' id='add_card'>
              <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value) } className='input_text' placeholder='Title...' required/>
              {/* <input type="text"  value={editedContent} onChange={(e) => setEditedContent(e.target.value)} /> */}
              
              <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className='input_textarea' placeholder='Note...' required/>

              <button  class="button-3 btn_submit"  onClick={() => handleUpdateClick(index, editedTitle, editedContent)}>Update</button>
            </div>
          
        </>
      );
    } 

    else {
      return (
        <>
          <div className='allnotes_main_div'>
            <div key={index} className='allnotes_div'>
              <div className='title'>{note.title}</div>
              <div className='content'>{note.content}</div>
              <button  class="button-3 img_btn"  onClick={() => handleEditClick(index, note.title, note.content)}> <img src="./edit.png" /> </button>
              {/* <button  class="button-3 img_btn"  onClick={() => dispatch(removeNote(index))}><img src="./delete.png" /></button> */}
              <button  class="button-3 img_btn"  onClick={() => handleDeleteClick(index)}><img src="./delete.png" /></button>
            </div>
          </div>
        </>
      );
    }
  };

  const renderNotes = () => {
    const renderedNotes = [];
    for (let i = 0; i < notes.length; i++) {
      renderedNotes.push(renderNote(notes[i], i));
    }
    return renderedNotes;
  };
// ===============================================================
return (
  <>
  {/* AllNotes */}
    <div id='allnotes_main_div'>
      {renderNotes()}
    </div>
    </>
  );
}



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeNote, updateNote } from '../Redux/action';
// import "./AllNotes.css"
// import '../App.css';


// export default function AllNotes() {

//   const notes = useSelector((state) => state.notes);
//   const dispatch = useDispatch();

//   const [editingId, setEditingId] = useState(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedContent, setEditedContent] = useState('');

//   const handleEditClick = (id, title, content) => {
//     setEditingId(id);
//     setEditedTitle(title);
//     setEditedContent(content);
//   };

//   const handleUpdateClick = (id, title, content) => {
//     dispatch(updateNote(id, title, content));
//     setEditingId(null);
//   };

//   const renderNote = (note, index) => {
    
//     if (editingId === index) {
//       return (
//         <>
//             <div key={index} className='add_card' id='add_card'>
//               <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value) } className='input_text' placeholder='Title...' required/>
//               {/* <input type="text"  value={editedContent} onChange={(e) => setEditedContent(e.target.value)} /> */}
              
//               <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className='input_textarea' placeholder='Note...' required/>

//               <button  class="button-3 btn_submit"  onClick={() => handleUpdateClick(index, editedTitle, editedContent)}>Update</button>
//             </div>
          
//         </>
//       );
//     } 

//     else {
//       return (
//         <>
//           <div className='allnotes_main_div'>
//             <div key={index} className='allnotes_div'>
//               <div className='title'>{note.title}</div>
//               <div className='content'>{note.content}</div>
//               <button  class="button-3 img_btn"  onClick={() => handleEditClick(index, note.title, note.content)}> <img src="./edit.png" /> </button>
//               <button  class="button-3 img_btn"  onClick={() => dispatch(removeNote(index))}><img src="./delete.png" /></button>
//             </div>
//           </div>
//         </>
//       );
//     }
//   };

//   const renderNotes = () => {
//     const renderedNotes = [];
//     for (let i = 0; i < notes.length; i++) {
//       renderedNotes.push(renderNote(notes[i], i));
//     }
//     return renderedNotes;
//   };
// // ===============================================================
// return (
//   <>
//   {/* AllNotes */}
//     <div id='allnotes_main_div'>
//       {renderNotes()}
//     </div>
//     </>
//   );
// }


// ==================================================

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeNote, updateNote } from '../Redux/action';

// export default function AllNotes() {

//   const notes = useSelector((state) => state.notes);
//   const dispatch = useDispatch();

//   const [editingId, setEditingId] = useState(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedContent, setEditedContent] = useState('');

//   const handleEditClick = (id, title, content) => {
//     setEditingId(id);
//     setEditedTitle(title);
//     setEditedContent(content);
//   };

//   const handleUpdateClick = (id, title, content) => {
//     dispatch(updateNote(id, title, content));
//     setEditingId(null);
//   };

//   return (
//     <div>
//       AllNotes
//       {notes.map((note, index) => {
//         return (
//           <div key={index}>
//             <div>{note.title}</div>
//             <div>{note.content}</div>

//             { 
//                 editingId === index ? (
//                 <>
//                     <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
//                     <input type="text" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
//                     <button onClick={() => handleUpdateClick(index, editedTitle, editedContent)}>Update</button>
//                 </>
//                 ) : (
//                 <>
//                     <button onClick={() => handleEditClick(index, note.title, note.content)}>Edit</button>
//                     <button onClick={() => dispatch(removeNote(index))}>Delete</button>
//                 </>
//                 )
//             }

//           </div>
//         );
//       })}
//     </div>
//   );
// }


// ==========================================================

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeNote, updateNote } from '../Redux/action';

// export default function AllNotes() {

//     const notes = useSelector((state) => state.notes);
//     const dispatch = useDispatch();

//     const [editingId, setEditingId] = useState(null);
//     const [editedTitle, setEditedTitle] = useState('');
//     const [editedContent, setEditedContent] = useState('');

//     const handleEditClick = (id, title, content) => {
//         setEditingId(id);
//         setEditedTitle(title);
//         setEditedContent(content);
//     };

//     const handleUpdateClick = (id, title, content) => {
//         dispatch(updateNote(id, title, content));
//         setEditingId(null);
//     };

//     return (
//         <div>
//             AllNotes
//             {notes.map((note, index) => {
//                 return (

//                     <div key={index}>

//                         <div>{note.title}</div>
//                         <div>{note.content}</div>

//                         {
//                             editingId === index ? (
//                                 <>
//                                     <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
//                                     <input type="text" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
//                                     <button onClick={() => handleUpdateClick(index, editedTitle, editedContent)}>Update</button>
//                                 </>
//                             ) : (
//                                 <>
//                                     <button onClick={() => handleEditClick(index, note.title, note.content)}>Edit</button>
//                                     <button onClick={() => dispatch(removeNote(index))}>Delete</button>
//                                 </>
//                             )
                            
//                         }

//                     </div>

//                 );
//             })}
//         </div>
//     );
// }
