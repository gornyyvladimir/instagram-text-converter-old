import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const textareaRef = useRef(null);
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const handleCovertClick = event => {
    event.preventDefault();
    const convertedText = text.replace(/\s*\n{2,}/g, '\n⠀\n').replace(/\s+\n/g, '\n');
    setConvertedText(convertedText);
    setDisabled(false);
  };

  const handleCopyClick = event => {
    event.preventDefault();
    textareaRef.current.select();
    document.execCommand('copy');
    alert(
      'Текст скопирован! Теперь вы можете вставить текст со специальными пробелами в свой пост в Instagram!',
    );
  };

  const handleTextareaFocus = event => {
    event.target.select();
  };

  return (
    <div className="container">
      <h1 className="title">Как сделать абзац в инстаграм?</h1>
      <p className="text">
        Этот инструмент поможет вам добавить специальный пробел в инстаграм, для того чтобы ваши
        описания в инстаграм могли начинаться с новой строки.
      </p>
      <div className="wrapper">
        <form className="form">
          <textarea
            className="textarea"
            onChange={handleTextChange}
            value={text}
            placeholder="Пожалуйста, введите текст"
            rows="5"
            cols="30"
          />
          <button className="button" type="submit" onClick={handleCovertClick}>
            Конвертировать
          </button>
        </form>
        <form className="form">
          <textarea
            className="textarea"
            ref={textareaRef}
            onFocus={handleTextareaFocus}
            value={convertedText}
            rows="5"
            cols="30"
            readOnly
          />
          <button className="button" type="submit" onClick={handleCopyClick} disabled={disabled}>
            Копировать
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
