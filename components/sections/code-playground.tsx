"use client"

import { useState, useEffect, Fragment } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Play, 
  Files, 
  Search, 
  GitBranch, 
  Bug, 
  Blocks,
  ChevronRight,
  ChevronDown,
  FileCode,
  Terminal,
  X,
  Minus,
  Square,
  Circle
} from "lucide-react"
import { Button } from "@/components/ui/button"

const codeExamples = {
  html: {
    filename: "index.html",
    language: "HTML",
    code: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Site</title>
</head>
<body>
  <header class="hero">
    <h1>Olá, Mundo!</h1>
    <p>Bem-vindo ao futuro.</p>
    <button id="cta">
      Começar Agora
    </button>
  </header>
</body>
</html>`,
    preview: (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Olá, Mundo!</h1>
        <p className="text-slate-300 mb-4">Bem-vindo ao futuro.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Começar Agora
        </button>
      </div>
    ),
  },
  css: {
    filename: "styles.css",
    language: "CSS",
    code: `.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
}

.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  color: white;
}

#cta {
  padding: 1rem 2rem;
  border-radius: 50px;
  background: white;
  color: #667eea;
  font-weight: 600;
}`,
    preview: (
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
        <h1 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Título Estilizado</h1>
        <button className="px-6 py-3 bg-white text-indigo-500 rounded-full font-semibold hover:scale-105 transition-transform">
          Botão Hover
        </button>
      </div>
    ),
  },
  javascript: {
    filename: "app.js",
    language: "JavaScript",
    code: `// Contador interativo
let count = 0;
const display = document.getElementById('count');
const btn = document.getElementById('increment');

btn.addEventListener('click', () => {
  count++;
  display.textContent = count;
  
  // Animação de pulso
  display.classList.add('pulse');
  setTimeout(() => {
    display.classList.remove('pulse');
  }, 300);
});

// Inicialização
console.log('App iniciado!');
display.textContent = count;`,
    preview: <JavaScriptPreview />,
  },
  typescript: {
    filename: "api.ts",
    language: "TypeScript",
    code: `interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  timestamp: Date;
}

async function fetchUser(
  id: number
): Promise<ApiResponse<User>> {
  const response = await fetch(
    \`/api/users/\${id}\`
  );
  
  if (!response.ok) {
    throw new Error('User not found');
  }
  
  const user: User = await response.json();
  
  return {
    data: user,
    success: true,
    timestamp: new Date()
  };
}`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
        <div className="text-green-400 mb-2">Type check passed</div>
        <div className="text-slate-400 mb-2">{">"} Fetching user...</div>
        <div className="text-cyan-400">
          {"{"}<br/>
          &nbsp;&nbsp;data: {"{"}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;id: 1,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;name: &quot;João Silva&quot;,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;role: &quot;admin&quot;<br/>
          &nbsp;&nbsp;{"}"}<br/>
          {"}"}
        </div>
      </div>
    ),
  },
  python: {
    filename: "bot.py",
    language: "Python",
    code: `import discord
from discord.ext import commands

bot = commands.Bot(
    command_prefix='!',
    intents=discord.Intents.all()
)

@bot.event
async def on_ready():
    print(f'{bot.user} está online!')
    await bot.change_presence(
        activity=discord.Game('Ajudando!')
    )

@bot.command()
async def ping(ctx):
    latency = round(bot.latency * 1000)
    embed = discord.Embed(
        title="Pong!",
        description=f"Latência: {latency}ms",
        color=0x5865F2
    )
    await ctx.send(embed=embed)`,
    preview: (
      <div className="bg-[#36393f] p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
            B
          </div>
          <span className="text-white font-medium">MyBot</span>
          <span className="text-xs bg-indigo-500 text-white px-1.5 py-0.5 rounded">BOT</span>
        </div>
        <div className="bg-[#2f3136] rounded-lg p-3 border-l-4 border-indigo-500">
          <div className="text-white font-semibold mb-1">Pong!</div>
          <div className="text-slate-300 text-sm">Latência: 45ms</div>
        </div>
      </div>
    ),
  },
}

function JavaScriptPreview() {
  const [count, setCount] = useState(0)
  const [pulse, setPulse] = useState(false)

  const handleClick = () => {
    setCount(c => c + 1)
    setPulse(true)
    setTimeout(() => setPulse(false), 300)
  }

  return (
    <div className="bg-slate-900 p-6 rounded-lg text-center">
      <div 
        className={`text-5xl font-bold text-white mb-4 transition-transform ${pulse ? 'scale-125' : 'scale-100'}`}
      >
        {count}
      </div>
      <button 
        onClick={handleClick}
        className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium"
      >
        Incrementar
      </button>
    </div>
  )
}

type LanguageKey = keyof typeof codeExamples

// Token types for syntax highlighting
type TokenType = 'keyword' | 'string' | 'comment' | 'number' | 'tag' | 'attribute' | 'default'

interface Token {
  type: TokenType
  value: string
}

function tokenize(code: string, lang: LanguageKey): Token[][] {
  const lines = code.split('\n')
  
  const tokenColors: Record<TokenType, string> = {
    keyword: 'text-purple-400',
    string: 'text-amber-400',
    comment: 'text-slate-500',
    number: 'text-cyan-400',
    tag: 'text-pink-400',
    attribute: 'text-sky-400',
    default: 'text-slate-300'
  }
  
  const keywords: Record<string, string[]> = {
    html: [],
    css: ['display', 'flex', 'column', 'center', 'bold', 'white', 'ease'],
    javascript: ['let', 'const', 'function', 'document', 'getElementById', 'addEventListener', 'setTimeout', 'console', 'log', 'textContent', 'classList', 'add', 'remove'],
    typescript: ['interface', 'type', 'async', 'function', 'await', 'const', 'return', 'Promise', 'throw', 'new', 'Error', 'if', 'number', 'string', 'boolean', 'Date'],
    python: ['import', 'from', 'def', 'async', 'await', 'print', 'return', 'class', 'self', 'True', 'False', 'None', 'if', 'else', 'for', 'in'],
  }

  return lines.map(line => {
    const tokens: Token[] = []
    
    // Check for comment lines
    if ((lang === 'javascript' || lang === 'typescript') && line.trim().startsWith('//')) {
      return [{ type: 'comment' as TokenType, value: line }]
    }
    if (lang === 'python' && line.trim().startsWith('#')) {
      return [{ type: 'comment' as TokenType, value: line }]
    }
    
    // For HTML, do simpler parsing
    if (lang === 'html') {
      // Match tags and content
      const parts = line.split(/(<[^>]+>)/g)
      parts.forEach(part => {
        if (part.startsWith('<')) {
          tokens.push({ type: 'tag', value: part })
        } else if (part) {
          tokens.push({ type: 'default', value: part })
        }
      })
      return tokens.length > 0 ? tokens : [{ type: 'default', value: line }]
    }
    
    // For CSS, highlight properties and values
    if (lang === 'css') {
      if (line.includes(':')) {
        const colonIndex = line.indexOf(':')
        const property = line.slice(0, colonIndex + 1)
        const value = line.slice(colonIndex + 1)
        tokens.push({ type: 'keyword', value: property })
        tokens.push({ type: 'string', value: value })
        return tokens
      }
      if (line.includes('{') || line.includes('}')) {
        tokens.push({ type: 'tag', value: line })
        return tokens
      }
      return [{ type: 'default', value: line }]
    }
    
    // For JS/TS/Python, do word-based highlighting
    const langKeywords = keywords[lang] || []
    let remaining = line
    
    while (remaining.length > 0) {
      // Check for strings
      const stringMatch = remaining.match(/^(["'`])([^"'`]*)\1/)
      if (stringMatch) {
        tokens.push({ type: 'string', value: stringMatch[0] })
        remaining = remaining.slice(stringMatch[0].length)
        continue
      }
      
      // Check for numbers
      const numberMatch = remaining.match(/^\d+/)
      if (numberMatch) {
        tokens.push({ type: 'number', value: numberMatch[0] })
        remaining = remaining.slice(numberMatch[0].length)
        continue
      }
      
      // Check for keywords
      let foundKeyword = false
      for (const kw of langKeywords) {
        if (remaining.startsWith(kw)) {
          const nextChar = remaining[kw.length]
          if (!nextChar || !/\w/.test(nextChar)) {
            tokens.push({ type: 'keyword', value: kw })
            remaining = remaining.slice(kw.length)
            foundKeyword = true
            break
          }
        }
      }
      if (foundKeyword) continue
      
      // Check for @ decorators in Python
      if (lang === 'python' && remaining.startsWith('@')) {
        const match = remaining.match(/^@\w+/)
        if (match) {
          tokens.push({ type: 'keyword', value: match[0] })
          remaining = remaining.slice(match[0].length)
          continue
        }
      }
      
      // Default: take one character
      tokens.push({ type: 'default', value: remaining[0] })
      remaining = remaining.slice(1)
    }
    
    // Merge adjacent tokens of the same type
    const merged: Token[] = []
    tokens.forEach(token => {
      const last = merged[merged.length - 1]
      if (last && last.type === token.type) {
        last.value += token.value
      } else {
        merged.push({ ...token })
      }
    })
    
    return merged.length > 0 ? merged : [{ type: 'default', value: '' }]
  })
}

function getTokenColor(type: TokenType): string {
  const colors: Record<TokenType, string> = {
    keyword: 'text-purple-400',
    string: 'text-amber-400',
    comment: 'text-slate-500',
    number: 'text-cyan-400',
    tag: 'text-pink-400',
    attribute: 'text-sky-400',
    default: 'text-slate-300'
  }
  return colors[type]
}

export function CodePlayground() {
  const [activeTab, setActiveTab] = useState<LanguageKey>("javascript")
  const [showPreview, setShowPreview] = useState(false)
  const [typedCode, setTypedCode] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "$ pnpm dev",
    "Ready in 1.2s",
    "Listening on http://localhost:3000",
  ])

  const currentExample = codeExamples[activeTab]

  useEffect(() => {
    setTypedCode("")
    setIsTyping(true)
    setShowPreview(false)
    let index = 0
    const code = currentExample.code

    const interval = setInterval(() => {
      if (index < code.length) {
        setTypedCode(code.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 15)

    return () => clearInterval(interval)
  }, [activeTab, currentExample.code])

  const handleRun = () => {
    setShowPreview(true)
    setTerminalOutput(prev => [
      ...prev,
      `$ Executando ${currentExample.filename}...`,
      "Código executado com sucesso!",
    ])
  }

  const sidebarItems = [
    { icon: Files, active: true },
    { icon: Search, active: false },
    { icon: GitBranch, active: false },
    { icon: Bug, active: false },
    { icon: Blocks, active: false },
  ]

  const tokenizedLines = tokenize(typedCode, activeTab)

  return (
    <section id="playground" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Playground
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ambiente de <span className="gradient-text">Código</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore exemplos de código em diferentes linguagens com syntax highlighting e preview interativo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* VSCode-like Editor */}
          <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl">
            {/* Title bar */}
            <div className="bg-[#1e1e1e] px-4 py-2 flex items-center justify-between border-b border-[#333]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <Circle className="w-3 h-3 text-red-500 fill-red-500" />
                  <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <Circle className="w-3 h-3 text-green-500 fill-green-500" />
                </div>
                <span className="text-slate-400 text-sm ml-2 hidden sm:inline">Code Playground</span>
              </div>
              <div className="flex items-center gap-2">
                <Minus className="w-4 h-4 text-slate-500" />
                <Square className="w-3 h-3 text-slate-500" />
                <X className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar - Hidden on mobile */}
              <div className="bg-[#252526] w-full md:w-12 flex md:flex-col items-center py-2 border-b md:border-b-0 md:border-r border-[#333] overflow-x-auto">
                <div className="flex md:flex-col gap-0">
                  {sidebarItems.map((item, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 flex items-center justify-center cursor-pointer transition-colors ${
                        item.active ? 'text-white md:border-l-2 border-primary bg-[#37373d]' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* File Explorer - Hidden on mobile */}
              <div className="bg-[#252526] w-48 border-r border-[#333] hidden lg:block">
                <div className="p-2 text-xs text-slate-400 uppercase tracking-wider">
                  Explorer
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-1 text-slate-300 text-sm py-1">
                    <ChevronDown className="w-4 h-4" />
                    <span>projeto</span>
                  </div>
                  <div className="ml-4 space-y-0.5">
                    {(Object.keys(codeExamples) as LanguageKey[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`flex items-center gap-2 w-full text-left py-1 px-2 rounded text-sm transition-colors ${
                          activeTab === key ? 'bg-[#37373d] text-white' : 'text-slate-400 hover:text-white hover:bg-[#2a2d2e]'
                        }`}
                      >
                        <FileCode className="w-4 h-4 shrink-0" />
                        <span className="truncate">{codeExamples[key].filename}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Editor Area */}
              <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
                {/* Tabs - Scrollable on mobile */}
                <div className="flex items-center border-b border-[#333] bg-[#252526] overflow-x-auto">
                  <div className="flex shrink-0">
                    {(Object.keys(codeExamples) as LanguageKey[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-3 md:px-4 py-2 text-xs md:text-sm flex items-center gap-1 md:gap-2 border-r border-[#333] transition-colors whitespace-nowrap ${
                          activeTab === key 
                            ? 'bg-[#1e1e1e] text-white border-t-2 border-t-primary' 
                            : 'text-slate-400 hover:text-white bg-[#2d2d2d]'
                        }`}
                      >
                        <FileCode className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                        <span className="hidden sm:inline">{codeExamples[key].filename}</span>
                        <span className="sm:hidden">{codeExamples[key].language}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 min-w-4" />
                  <Button
                    size="sm"
                    onClick={handleRun}
                    disabled={isTyping}
                    className="m-2 bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 text-xs md:text-sm"
                  >
                    <Play className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span className="hidden sm:inline">Executar</span>
                    <span className="sm:hidden">Run</span>
                  </Button>
                </div>

                {/* Code Area */}
                <div className="flex flex-col md:flex-row flex-1 min-h-[300px] md:min-h-[350px]">
                  <div className="flex-1 p-2 md:p-4 font-mono text-xs md:text-sm overflow-auto min-w-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-slate-300"
                      >
                        {tokenizedLines.map((tokens, lineIndex) => (
                          <div key={lineIndex} className="flex">
                            <span className="w-6 md:w-8 text-right pr-2 md:pr-4 text-slate-600 select-none text-xs shrink-0">
                              {lineIndex + 1}
                            </span>
                            <span className="whitespace-pre">
                              {tokens.map((token, tokenIndex) => (
                                <span key={tokenIndex} className={getTokenColor(token.type)}>
                                  {token.value}
                                </span>
                              ))}
                            </span>
                          </div>
                        ))}
                        {isTyping && (
                          <span className="inline-block w-2 h-4 bg-white animate-pulse ml-1" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Preview Panel */}
                  <AnimatePresence>
                    {showPreview && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t md:border-t-0 md:border-l border-[#333] overflow-hidden md:w-[280px] lg:w-[300px] shrink-0"
                      >
                        <div className="p-2 bg-[#252526] text-xs text-slate-400 border-b border-[#333]">
                          Preview
                        </div>
                        <div className="p-3 md:p-4">
                          {currentExample.preview}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Terminal */}
                <div className="border-t border-[#333]">
                  <div className="flex items-center gap-2 px-3 md:px-4 py-1 bg-[#252526] text-xs">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400">Terminal</span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span className="text-slate-500">bash</span>
                  </div>
                  <div className="bg-[#1e1e1e] p-2 md:p-3 font-mono text-xs h-20 md:h-24 overflow-auto">
                    {terminalOutput.map((line, index) => (
                      <div 
                        key={index} 
                        className={`${
                          line.includes('sucesso') ? 'text-emerald-400' : 
                          line.startsWith('$') ? 'text-slate-400' : 
                          'text-slate-300'
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
