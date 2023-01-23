import React, { useState, useRef, useEffect } from 'react';

import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export const QEditor = ({ initialContent }) => {
  const { quill, quillRef } = useQuill();
  const [isEditable, setIsEditable] = useState(true);
  const [content, setContent] = useState(initialContent);
  const y = useRef();
  const toggleEditable = () => {
    setIsEditable((flag) => !flag);
  };

  console.log({ quill, y, content });
  console.log({ quillRef, y }); // { current: undefined } > { current: Quill Editor Reference }
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(content);
    }
  }, [quill, content, isEditable]);

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        // console.log('Text change!');
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        console.log(quill.root?.innerHTML); // Get innerHTML using quill
        setContent(quill.root?.innerHTML);
        console.log(quillRef?.current?.firstChild?.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  const divStyle = isEditable
    ? { width: 500, height: 300 }
    : { display: 'none' };
  const textStyle = !isEditable
    ? { width: 500, height: 300 }
    : { display: 'none' };
  return isEditable ? (
    <div style={divStyle}>
      <div ref={y}>hello</div>
      <button onClick={toggleEditable}>save</button>
      <div ref={quillRef} />
    </div>
  ) : (
    <h6 onClick={toggleEditable}>{content}</h6>
  );

  // return (
  //   <div>
  //     <div style={divStyle}>
  //       <div ref={y}>hello</div>
  //       <button onClick={toggleEditable}>save</button>
  //       <div ref={quillRef} />
  //     </div>
  //     <h6 style={textStyle} onClick={toggleEditable}>
  //       {content}
  //     </h6>
  //   </div>
  // );
};
