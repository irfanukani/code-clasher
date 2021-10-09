import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const dummy = `
// Currently We Only Support C++
#include <bits/stdc++.h>
using namespace std;

void solve() {
    //Your Code Here
}

int main() {
    int t;
    cin>>t;
    while(t--) solve();
    return 0;
}
`;

export const CustomEditor = () => {
    // state = { code };
    const [code, setCode] = useState(dummy);

    return (
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.clike)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
            }}
        />
    );

}