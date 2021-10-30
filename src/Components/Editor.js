import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { useDispatch } from 'react-redux';


const dummy = "";

export const CustomEditor = () => {
    // state = { code };
    const [code, setCode] = useState("#include<bits/stdc++.h> \nusing namespace std;\n\nvoid initialize() {\n    #ifndef ONLINE_JUDGE\n    freopen(\"input.txt\",\"r\",stdin);\n    freopen(\"output.txt\",\"w\",stdout);\n    #endif\n}\n\nint main() {\n//WRITE YOUR CODE HERE\n\n}");
    const dispatch = useDispatch();
    const storeCode = (codeX) => {
        dispatch({ type: "CODE_STORE", payload: codeX });
    }

    return (
        <Editor
            value={code}
            onValueChange={code => { setCode(code); storeCode(code); }}
            highlight={code => highlight(code, languages.clike)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
            }}
        />
    );

}