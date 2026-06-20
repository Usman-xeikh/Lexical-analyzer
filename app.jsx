import React, { useState } from 'react';
import { Play, Trash2, Code2, Table2, Terminal, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [sourceCode, setSourceCode] = useState('// Enter your C++ source code here\nint main() {\n    int a = 5;\n    float b = 3.14;\n    return 0;\n}');
  const [tokens, setTokens] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, success, error

  // This function simulates sending the code to Talha's C++ backend
  const handleAnalyze = () => {
    if (!sourceCode.trim()) return;
    
    setIsAnalyzing(true);
    setStatus('idle');
    setTokens([]);
 // Simulating API delay (Connecting to C++ backend)
    setTimeout(() => {
      // Mock data that Talha's C++ engine would return as JSON
      const mockBackendResponse = [
        { id: 1, lexeme: 'int', type: 'Keyword', line: 2 },
        { id: 2, lexeme: 'main', type: 'Identifier', line: 2 },
        { id: 3, lexeme: '(', type: 'Punctuation', line: 2 },
        { id: 4, lexeme: ')', type: 'Punctuation', line: 2 },
        { id: 5, lexeme: '{', type: 'Punctuation', line: 2 },
        { id: 6, lexeme: 'int', type: 'Keyword', line: 3 },
        { id: 7, lexeme: 'a', type: 'Identifier', line: 3 },
        { id: 8, lexeme: '=', type: 'Operator', line: 3 },
        { id: 9, lexeme: '5', type: 'Constant', line: 3 },
        { id: 10, lexeme: ';', type: 'Punctuation', line: 3 },
        { id: 11, lexeme: 'float', type: 'Keyword', line: 4 },
        { id: 12, lexeme: 'b', type: 'Identifier', line: 4 },
        { id: 13, lexeme: '=', type: 'Operator', line: 4 },
        { id: 14, lexeme: '3.14', type: 'Constant', line: 4 },
        { id: 15, lexeme: ';', type: 'Punctuation', line: 4 },
        { id: 16, lexeme: 'return', type: 'Keyword', line: 5 },
        { id: 17, lexeme: '0', type: 'Constant', line: 5 },
        { id: 18, lexeme: ';', type: 'Punctuation', line: 5 },
        { id: 19, lexeme: '}', type: 'Punctuation', line: 6 },
      ];
