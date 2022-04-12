import React, { useState, useRef } from 'react';

import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export const QEditor = ({ initialContent }) => {
  const { quill, quillRef } = useQuill();
  const [isEditable, setIsEditable] = useState(true);
  // const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(initialContent);
  const y = useRef();
  const toggleEditable = () => {
    setIsEditable((flag) => !flag);
  };

  console.log({ quill, y });
  console.log({ quillRef, y }); // { current: undefined } > { current: Quill Editor Reference }
  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(content);
    }
  }, [quill, content, isEditable]);
  const divStyle = isEditable
    ? { width: 500, height: 300 }
    : { display: 'none' };
  const textStyle = !isEditable
    ? { width: 500, height: 300 }
    : { display: 'none' };
  // return isEditable ? (
  //   <div style={divStyle}>
  //     <div ref={y}>hello</div>
  //     <button onClick={toggleEditable}>save</button>
  //     <div ref={quillRef} />
  //   </div>
  // ) : (
  //   <h6 onClick={toggleEditable}>
  //     Share of Voice estimates the percentage of searches our pages receive,
  //     across tracked keywords. It is a weighted click-through-rate model driven
  //     by keyword rankings, factoring in the amount of search volume per keyword.
  //   </h6>
  // );

  return (
    <div>
      <div style={divStyle}>
        <div ref={y}>hello</div>
        <button onClick={toggleEditable}>save</button>
        <div ref={quillRef} />
      </div>
      <h6 style={textStyle} onClick={toggleEditable}>
        Share of Voice estimates the percentage of searches our pages receive,
        across tracked keywords. It is a weighted click-through-rate model
        driven by keyword rankings, factoring in the amount of search volume per
        keyword.
      </h6>
    </div>
  );
};
