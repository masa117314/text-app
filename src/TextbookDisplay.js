import React, { useState } from "react";

const TextbookDisplay = () => {
    const [text, setText] = useState("");

    return(
        <div>
            <input
              type="text"
              value={text}
              onchange={(event) => setText(event.target.value)}
            />
            <p>{text}</p>
        </div>
    ); 
};

export default TextbookDisplay;