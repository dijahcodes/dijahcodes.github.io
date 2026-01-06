import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Folder, FileText, X, Monitor, ChevronRight, User, Mail, Code, ExternalLink, ArrowLeft } from 'lucide-react';

// --- DATA & CONTENT ---

const PROJECT_DATA = [
  {
    id: 'eco-tracker',
    title: 'Coming Soon', // Updated to 'Coming Soon'
    description: 'A React Native app for tracking personal carbon footprints.',
    details: 'Built with React Native and Firebase. Features include real-time data visualization, gamified challenges, and social sharing. Achieved 10k+ downloads on launch.',
    tech: ['React Native', 'Firebase', 'D3.js'],
    link: '#'
  },
  {
    id: 'algo-viz',
    title: 'Coming Soon', // Updated to 'Coming Soon'
    description: 'Interactive sorting algorithm visualizer built with pure JS.',
    details: 'A web-based educational tool to help students understand complex algorithms. visualizing Bubble, Quick, and Merge sort with step-by-step execution.',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS Grid'],
    link: '#'
  },
  {
    id: 'shop-stream',
    title: 'Coming Soon', // Updated to 'Coming Soon'
    description: 'Full-stack e-commerce dashboard with real-time inventory.',
    details: 'Next.js application using Stripe for payments and WebSockets for live inventory updates. Includes an admin dashboard for analytics.',
    tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
    link: '#'
  }
];

// --- TERMINAL UTILS ---

const FILE_SYSTEM = {
  '~': {
    type: 'dir',
    children: {
      'about.txt': { type: 'file', content: "Hi! I'm Dijah McDonald (aka Dijahcodes), a passionate Full Stack Developer and Software Engineering student at Arizona State University.\nI love building interactive web experiences and solving complex problems.\nBased in the Cloud, usually found coding." },
      'contact.txt': { type: 'file', content: "Email: dev@example.com\nGitHub: github.com/dijahcodes\nTwitter: @dijahcodes" },
      'projects': {
        type: 'dir',
        children: PROJECT_DATA.reduce((acc, proj) => {
          acc[`${proj.id}.txt`] = { 
            type: 'file', 
            content: `TITLE: ${proj.title}\nDESC: ${proj.description}\nTECH: ${proj.tech.join(', ')}\nDETAILS: ${proj.details}` 
          };
          return acc;
        }, {})
      }
    }
  }
};

// --- COMPONENTS ---

const LandingPage = ({ onSelectMode }) => (
  <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center font-sans">
    <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-4 animate-fade-in-down">
      Hello, I'm Dijah
    </h1>
    <p className="text-pink-400 mb-12 text-lg">Choose your browsing experience</p>
    
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center">
      <button 
        onClick={() => onSelectMode('basic')}
        className="group relative bg-white border-2 border-pink-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-pink-400 transition-all duration-300 flex flex-col items-center w-full md:w-1/2"
      >
        <div className="bg-pink-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
          <Monitor size={48} className="text-pink-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Simplified Version</h2>
        <p className="text-gray-500 text-sm">Clean, standard-portfolio</p>
      </button>

      <button 
        onClick={() => onSelectMode('terminal')}
        className="group relative bg-gray-900 border-2 border-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-pink-500 transition-all duration-300 flex flex-col items-center w-full md:w-1/2"
      >
        <div className="bg-gray-800 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
          <Terminal size={48} className="text-pink-500" />
        </div>
        <h2 className="text-2xl font-bold text-pink-500 mb-2">Cool Version</h2>
        <p className="text-gray-400 text-sm">CLI based navigation for the hackers at heart.</p>
      </button>
    </div>
  </div>
);

const BasicPortfolio = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans relative">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-pink-100 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-pink-600 flex items-center gap-2">
          <Code className="w-6 h-6" /> DijahCodes
        </div>
        <button 
          onClick={onBack}
          className="text-sm font-semibold text-pink-500 hover:text-pink-700 flex items-center gap-1"
        >
          <ArrowLeft size={16} /> Switch Mode
        </button>
      </nav>

      {/* Hero */}
      <header className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
          👋
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Hi, I'm <span className="text-pink-500">Dijah McDonald</span>
        </h1>
        {/* Updated tagline */}
        <p className="text-xl text-gray-600 leading-relaxed">
          Software Engineer and Security Enthusiast
        </p>
      </header>

      {/* About Me Section (NEW) */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-pink-500 pl-4">About Me</h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            My journey into software engineering is rooted in creativity; I began my career as an **artist** before making the pivot to technology and subsequently returning to Arizona State University to study Software Engineering. This transition allows me to bring unique perspectives on design and user experience to technical challenges.
          </p>
          <p>
            I am deeply passionate about **cybersecurity**, which I study in my free time. I'm currently focused on **penetration testing** and exploring innovative ways to **leverag e AI** in development and security practices. I believe in continuous learning to build secure and intelligent systems.
          </p>
          <p>
            Beyond the screen, my background is rich with cultural experiences. I grew up partially in **Japan** and have spent a considerable amount of time in **Mexico**. These global perspectives inform my work and life. When I'm not coding, you can find me enjoying **musicals**, perfecting **Japanese home-cooking**, or capturing the world through **photography**.
          </p>
        </div>
      </section>
      
      {/* Grid */}
      <main className="px-6 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-pink-500 pl-4">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-40 bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                <Monitor size={40} className="text-pink-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs font-medium bg-pink-50 text-pink-600 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-100 py-8 text-center text-pink-800">
        <p>© 2024 DijahCodes. Vibe coded and made with some 💖 in Washington, DC</p>
      </footer>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-pink-50 rounded-full hover:bg-pink-100 text-pink-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="h-32 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
            </div>
            
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About the Project</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map(t => (
                  <span key={t} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <ExternalLink size={18} /> Live Demo
                </button>
                <button className="flex-1 border-2 border-gray-200 hover:border-pink-500 hover:text-pink-500 text-gray-600 font-bold py-3 px-6 rounded-xl transition-colors">
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TerminalPortfolio = ({ onBack }) => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to PinkTerm v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' }
  ]);
  const [input, setInput] = useState('');
  const [currentPath, setCurrentPath] = useState(['~']);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input on click
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getDirectory = (pathArray) => {
    let current = FILE_SYSTEM['~'];
    // We only support one level deep for simplicity in this demo (~/projects)
    if (pathArray.length > 1 && pathArray[1] === 'projects') {
      return current.children['projects'];
    }
    return current;
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      const args = cmd.split(' ');
      const mainCmd = args[0].toLowerCase();
      
      const newHistory = [...history, { type: 'command', content: `${currentPath.join('/')} $ ${cmd}` }];
      
      let output = '';
      const currentDir = getDirectory(currentPath);

      switch (mainCmd) {
        case 'help':
          output = "Available commands:\n  help      - Show this help message\n  ls        - List directory contents\n  cd [dir]  - Change directory\n  cat [file]- Read file content\n  whoami    - Display user info\n  clear     - Clear terminal\n  exit      - Return to GUI";
          break;
        case 'whoami':
          output = "User: Dijah McDonald\nAlias: Dijahcodes\nRole: Full Stack Developer\nEducation: Software Engineering Student @ Arizona State University\nMission: Building the future, one line of code at a time.";
          break;
        case 'ls':
          output = Object.keys(currentDir.children).map(k => {
            const isDir = currentDir.children[k].type === 'dir';
            return isDir ? `${k}/` : k;
          }).join('  ');
          break;
        case 'cd':
          if (!args[1] || args[1] === '~') {
            setCurrentPath(['~']);
          } else if (args[1] === '..') {
            setCurrentPath(['~']);
          } else if (currentDir.children[args[1]] && currentDir.children[args[1]].type === 'dir') {
            setCurrentPath([...currentPath, args[1]]);
          } else {
            output = `cd: no such directory: ${args[1]}`;
          }
          break;
        case 'cat':
          if (!args[1]) {
            output = "usage: cat [file]";
          } else if (currentDir.children[args[1]] && currentDir.children[args[1]].type === 'file') {
            output = currentDir.children[args[1]].content;
          } else {
            output = `cat: ${args[1]}: No such file or directory`;
          }
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'exit':
          onBack();
          return;
        case '':
          break;
        default:
          output = `command not found: ${mainCmd}`;
      }

      if (output) {
        newHistory.push({ type: 'output', content: output });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div 
      className="min-h-screen bg-fuchsia-950 text-pink-400 font-mono p-4 md:p-10 flex flex-col"
      onClick={focusInput}
    >
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={onBack}
          className="bg-pink-900/50 hover:bg-pink-800 text-pink-300 px-4 py-2 border border-pink-700 rounded text-sm uppercase tracking-wider transition-colors"
        >
          Exit Terminal
        </button>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full border border-pink-900/50 bg-black/40 rounded-lg shadow-[0_0_30px_rgba(236,72,153,0.15)] p-6 overflow-hidden flex flex-col">
        {/* Terminal Header */}
        <div className="flex gap-2 mb-4 border-b border-pink-900/30 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs text-pink-700">visitor@dijahcodes: ~</span>
        </div>

        {/* Output Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {history.map((entry, i) => (
            <div key={i} className="mb-2 whitespace-pre-wrap leading-relaxed">
              {entry.type === 'command' ? (
                <span className="text-pink-300 font-bold">{entry.content}</span>
              ) : (
                <span className="text-pink-500/90">{entry.content}</span>
              )}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center mt-2 text-pink-300 font-bold">
            <span className="mr-2">{currentPath.join('/')} $</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-1 text-pink-400 font-normal caret-pink-500"
              autoFocus
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>

      <div className="text-center text-pink-900/50 mt-4 text-xs">
        Try: "help", "ls", "whoami", "cd projects", "cat [file]"
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [mode, setMode] = useState('landing'); // landing, basic, terminal

  if (mode === 'landing') return <LandingPage onSelectMode={setMode} />;
  if (mode === 'basic') return <BasicPortfolio onBack={() => setMode('landing')} />;
  if (mode === 'terminal') return <TerminalPortfolio onBack={() => setMode('landing')} />;

  return null;
};

export default App;