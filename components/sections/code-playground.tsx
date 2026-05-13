"use client"

import { useState, useEffect } from "react"
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
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

#cta {
  padding: 1rem 2rem;
  border-radius: 50px;
  background: white;
  color: #667eea;
  font-weight: 600;
  transition: transform 0.3s ease;
}

#cta:hover {
  transform: scale(1.05);
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
console.log('App iniciado! 🚀');
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
}

// Uso com type safety
const result = await fetchUser(1);
console.log(result.data.name);`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
        <div className="text-green-400 mb-2">✓ Type check passed</div>
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
        title="🏓 Pong!",
        description=f"Latência: {latency}ms",
        color=0x5865F2
    )
    await ctx.send(embed=embed)

@bot.command()
async def info(ctx, member: discord.Member):
    embed = discord.Embed(
        title=f"Info de {member.name}",
        color=member.color
    )
    embed.set_thumbnail(url=member.avatar.url)
    embed.add_field(
        name="ID", 
        value=member.id
    )
    await ctx.send(embed=embed)

bot.run('TOKEN')`,
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
          <div className="text-white font-semibold mb-1">🏓 Pong!</div>
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
      "✓ Código executado com sucesso!",
    ])
  }

  const sidebarItems = [
    { icon: Files, active: true },
    { icon: Search, active: false },
    { icon: GitBranch, active: false },
    { icon: Bug, active: false },
    { icon: Blocks, active: false },
  ]

  const highlightCode = (code: string, lang: LanguageKey) => {
    const keywords: Record<string, string[]> = {
      html: ['<!DOCTYPE', '<html', '<head', '<body', '<header', '<meta', '<title', '</head>', '</body>', '</html>', '</header>', '<h1', '</h1>', '<p', '</p>', '<button', '</button>', 'class=', 'lang=', 'charset=', 'id='],
      css: ['display', 'flex', 'flex-direction', 'align-items', 'justify-content', 'min-height', 'background', 'linear-gradient', 'font-size', 'font-weight', 'color', 'text-shadow', 'padding', 'border-radius', 'transition', 'transform', ':hover'],
      javascript: ['let', 'const', 'function', 'document', 'getElementById', 'addEventListener', 'setTimeout', 'console', 'log', 'textContent', 'classList', 'add', 'remove'],
      typescript: ['interface', 'type', 'async', 'function', 'await', 'const', 'return', 'Promise', 'throw', 'new', 'Error', 'if', 'number', 'string', 'boolean', 'Date'],
      python: ['import', 'from', 'def', 'async', 'await', 'print', 'return', 'class', 'self', 'True', 'False', 'None', 'if', 'else', 'for', 'in', '@'],
    }

    const lines = code.split('\n')
    
    return lines.map((line, lineIndex) => {
      let processedLine = line
      const langKeywords = keywords[lang] || []
      
      // Highlight strings
      processedLine = processedLine.replace(/(["'`])([^"'`]*)\1/g, '<span class="text-amber-400">$&</span>')
      
      // Highlight comments
      if (lang === 'python' && line.trim().startsWith('#')) {
        processedLine = `<span class="text-slate-500">${line}</span>`
      } else if ((lang === 'javascript' || lang === 'typescript') && line.trim().startsWith('//')) {
        processedLine = `<span class="text-slate-500">${line}</span>`
      } else if (lang === 'css' && line.includes('/*')) {
        processedLine = `<span class="text-slate-500">${line}</span>`
      } else if (lang === 'html' && line.includes('<!--')) {
        processedLine = `<span class="text-slate-500">${line}</span>`
      }
      
      // Highlight keywords
      langKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g')
        if (lang === 'html' || lang === 'css') {
          processedLine = processedLine.replace(keyword, `<span class="text-pink-400">${keyword}</span>`)
        } else {
          processedLine = processedLine.replace(regex, `<span class="text-purple-400">${keyword}</span>`)
        }
      })

      // Highlight numbers
      processedLine = processedLine.replace(/\b(\d+)\b/g, '<span class="text-cyan-400">$1</span>')

      return (
        <div key={lineIndex} className="flex">
          <span className="w-8 text-right pr-4 text-slate-600 select-none text-xs">
            {lineIndex + 1}
          </span>
          <span dangerouslySetInnerHTML={{ __html: processedLine }} />
        </div>
      )
    })
  }

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
                <span className="text-slate-400 text-sm ml-2">Code Playground</span>
              </div>
              <div className="flex items-center gap-2">
                <Minus className="w-4 h-4 text-slate-500" />
                <Square className="w-3 h-3 text-slate-500" />
                <X className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="bg-[#252526] w-12 flex flex-col items-center py-2 border-r border-[#333]">
                {sidebarItems.map((item, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center cursor-pointer transition-colors ${
                      item.active ? 'text-white border-l-2 border-primary bg-[#37373d]' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                ))}
              </div>

              {/* File Explorer */}
              <div className="bg-[#252526] w-48 border-r border-[#333] hidden md:block">
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
                        <FileCode className="w-4 h-4" />
                        {codeExamples[key].filename}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Editor Area */}
              <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                {/* Tabs */}
                <div className="flex items-center border-b border-[#333] bg-[#252526]">
                  {(Object.keys(codeExamples) as LanguageKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-4 py-2 text-sm flex items-center gap-2 border-r border-[#333] transition-colors ${
                        activeTab === key 
                          ? 'bg-[#1e1e1e] text-white border-t-2 border-t-primary' 
                          : 'text-slate-400 hover:text-white bg-[#2d2d2d]'
                      }`}
                    >
                      <FileCode className="w-4 h-4" />
                      {codeExamples[key].filename}
                    </button>
                  ))}
                  <div className="flex-1" />
                  <Button
                    size="sm"
                    onClick={handleRun}
                    disabled={isTyping}
                    className="m-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Executar
                  </Button>
                </div>

                {/* Code Area */}
                <div className="flex flex-1 min-h-[350px]">
                  <div className="flex-1 p-4 font-mono text-sm overflow-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-slate-300"
                      >
                        {highlightCode(typedCode, activeTab)}
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
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 300, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="border-l border-[#333] overflow-hidden"
                      >
                        <div className="p-2 bg-[#252526] text-xs text-slate-400 border-b border-[#333]">
                          Preview
                        </div>
                        <div className="p-4">
                          {currentExample.preview}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Terminal */}
                <div className="border-t border-[#333]">
                  <div className="flex items-center gap-2 px-4 py-1 bg-[#252526] text-xs">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400">Terminal</span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span className="text-slate-500">bash</span>
                  </div>
                  <div className="bg-[#1e1e1e] p-3 font-mono text-xs h-24 overflow-auto">
                    {terminalOutput.map((line, index) => (
                      <div 
                        key={index} 
                        className={`${
                          line.startsWith('✓') ? 'text-emerald-400' : 
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
