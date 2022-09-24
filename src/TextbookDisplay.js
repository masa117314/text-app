import React, { useState } from "react";

const TextbookDisplay = () => {
    const [text, setText] = useState("");
    const [addText, setAddText] = useState("");

    const onClickAddText = () =>{
        setAddText(text);
        setText("");
    }

    return(
        <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button onClick={onClickAddText}>追加</button>

            <p>
                ボタンクリック：{addText}
            </p>
        </div>
    ); 
};

export default TextbookDisplay;