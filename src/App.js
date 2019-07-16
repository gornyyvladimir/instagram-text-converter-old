import React, { useState, useRef } from 'react';
import Notification from './components/Notification';
import './App.css';

function App() {
  const textareaRef = useRef(null);
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [notificationState, setNotificationState] = useState(false);

  const showNotification = (delay = 3000) => {
    setNotificationState(true);
    setTimeout(() => {
      setNotificationState(false);
    }, delay);
  };

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const handleCovertClick = event => {
    event.preventDefault();
    const convertedText = 
    text
    .replace(/⠀/g, '')
    .replace(/\s*\n{2,}/g, '\n⠀\n')
    .replace(/\s+\n/g, '\n');
    setConvertedText(convertedText);
    setDisabled(false);
  };

  const handleCopyClick = event => {
    event.preventDefault();
    textareaRef.current.select();
    document.execCommand('copy');
    showNotification();
  };

  const handleTextareaFocus = event => {
    event.target.select();
  };

  return (
    <>
      <Notification show={notificationState}>
        Текст скопирован! Вставьте его в Instagram.
      </Notification>
      <div className="container">
        <h1 className="title">Как сделать абзац в инстаграм?</h1>
        <p className="text">
          Этот инструмент поможет вам добавить специальный пробел в инстаграм, чтобы ваши
          описания в инстаграм могли начинаться с новой строки.
        </p>
        <div className="wrapper">
          <form className="form">
            <label className="label" htmlFor="text">
              Текст, который вы хотите преобразовать
            </label>
            <textarea
              id="text"
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
            <label className="label" htmlFor="converted-text">
              Преобразованный текст
            </label>
            <textarea
              id="converted-text"
              className="textarea"
              ref={textareaRef}
              onFocus={handleTextareaFocus}
              value={convertedText}
              placeholder="Здесь будет преобразованный текст"
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
    </>
  );
}

export default App;
