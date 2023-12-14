import React, {useState} from "react";

const  TextEditor = () => {
    const [newtext, setnewtext] = useState("");


    return (
        <div>
            <div>
                <p>
                    {newtext === "Hello"}
                </p>
            </div>
            <div>
                <input value={newtext} onChange={(e)=>setnewtext(e.target.value)}/>
            </div>
        </div>
    )
}

export default TextEditor;