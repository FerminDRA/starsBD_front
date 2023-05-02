import React, { useState } from 'react';

function CommentForm(props) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Comentario:</p>  
      </div>
      <div>
        
        <textarea id="text" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div>
        <button className='buttonStl' type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default CommentForm;
