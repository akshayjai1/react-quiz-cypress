import { useState } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import classes from './editor.module.scss';
export const QCEditor = ({ initialContent, updateContent }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleChange = (value) => {
    setContent(value);
  };
  const toggleEditable = () => {
    setIsEditable((flag) => !flag);
    updateContent(content);
  };

  return (
    <div>
      {isEditable ? (
        <div className={classes.editorWrapper}>
          <button onClick={toggleEditable} className={classes.save}>
            save
          </button>
          <ReactQuill value={content} onChange={handleChange} />
        </div>
      ) : (
        <div
          onClick={toggleEditable}
          dangerouslySetInnerHTML={{ __html: content }}></div>
      )}
    </div>
  );
};
