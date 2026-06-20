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
 setTokens(mockBackendResponse);
      setIsAnalyzing(false);
      setStatus('success');
    }, 1200); // 1.2 second simulated delay
  };

  const handleClear = () => {
    setSourceCode('');
    setTokens([]);
    setStatus('idle');
  };

  // Helper to color-code token types for dark glass UX
  const getTokenTypeColor = (type) => {
    switch (type) {
      case 'Keyword': return 'text-purple-300 bg-purple-500/20 border-purple-500/30';
      case 'Identifier': return 'text-blue-300 bg-blue-500/20 border-blue-500/30';
      case 'Operator': return 'text-rose-300 bg-rose-500/20 border-rose-500/30';
      case 'Constant': return 'text-emerald-300 bg-emerald-500/20 border-emerald-500/30';
      case 'Punctuation': return 'text-slate-300 bg-slate-500/20 border-slate-500/30';
      default: return 'text-gray-300 bg-gray-500/20 border-gray-500/30';
    }
  };
return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-fuchsia-950 font-sans text-slate-100 relative selection:bg-indigo-500/30 overflow-hidden">
      
      {/* Decorative blurred background shapes to enhance glass effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-500/80 backdrop-blur-sm border border-indigo-400/50 rounded-lg shadow-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white drop-shadow-md">Lexical Analyzer</h1>
              <p className="text-xs text-indigo-200 font-medium">Compiler Construction Lab</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-slate-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm">UI by Atif</span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm">Engine by Talha</span>
          </div>
        </div>
      </header>
return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-fuchsia-950 font-sans text-slate-100 relative selection:bg-indigo-500/30 overflow-hidden">
      
      {/* Decorative blurred background shapes to enhance glass effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-500/80 backdrop-blur-sm border border-indigo-400/50 rounded-lg shadow-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white drop-shadow-md">Lexical Analyzer</h1>
              <p className="text-xs text-indigo-200 font-medium">Compiler Construction Lab</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-slate-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm">UI by Atif</span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm">Engine by Talha</span>
          </div>
        </div>
      </header>
    {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Code Editor */}
          <div className="flex flex-col h-[700px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden relative group">
            <div className="px-4 py-3 border-b border-white/10 bg-black/20 flex justify-between items-center z-10">
              <div className="flex items-center space-x-2 text-slate-200 font-semibold">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Source Code Input</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handleClear}
                  className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/20 rounded-md transition-all"
                  title="Clear Editor"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="flex items-center space-x-2 bg-indigo-600/80 hover:bg-indigo-500 disabled:bg-slate-600/50 backdrop-blur-md border border-indigo-400/50 text-white px-4 py-2 rounded-md font-medium transition-all shadow-lg"
                >
                  {isAnalyzing ? (
                    <div className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Code'}</span>
                </button>
              </div>
            </div>
            
