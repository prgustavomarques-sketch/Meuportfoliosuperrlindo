"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Highlight, themes } from "prism-react-renderer"
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
  Circle,
  ArrowLeft,
  Copy,
  Check,
  RotateCcw,
  Maximize2,
  Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Definição das linguagens suportadas
const languages = {
  javascript: {
    name: "JavaScript",
    extension: ".js",
    prismLang: "javascript",
  },
  typescript: {
    name: "TypeScript", 
    extension: ".ts",
    prismLang: "typescript",
  },
  python: {
    name: "Python",
    extension: ".py",
    prismLang: "python",
  },
  html: {
    name: "HTML",
    extension: ".html",
    prismLang: "markup",
  },
  css: {
    name: "CSS",
    extension: ".css",
    prismLang: "css",
  },
  react: {
    name: "React/JSX",
    extension: ".jsx",
    prismLang: "jsx",
  },
  json: {
    name: "JSON",
    extension: ".json",
    prismLang: "json",
  },
  sql: {
    name: "SQL",
    extension: ".sql",
    prismLang: "sql",
  },
  bash: {
    name: "Bash",
    extension: ".sh",
    prismLang: "bash",
  },
  rust: {
    name: "Rust",
    extension: ".rs",
    prismLang: "rust",
  },
  go: {
    name: "Go",
    extension: ".go",
    prismLang: "go",
  },
  java: {
    name: "Java",
    extension: ".java",
    prismLang: "java",
  },
  csharp: {
    name: "C#",
    extension: ".cs",
    prismLang: "csharp",
  },
  cpp: {
    name: "C++",
    extension: ".cpp",
    prismLang: "cpp",
  },
  php: {
    name: "PHP",
    extension: ".php",
    prismLang: "php",
  },
} as const

type LanguageKey = keyof typeof languages

// Exemplos de código para cada linguagem
const codeExamples: Record<LanguageKey, { filename: string; code: string; preview?: React.ReactNode }> = {
  javascript: {
    filename: "app.js",
    code: `// Contador interativo com JavaScript
class Counter {
  constructor(initialValue = 0) {
    this.value = initialValue;
    this.listeners = [];
  }

  increment() {
    this.value++;
    this.notify();
  }

  decrement() {
    this.value--;
    this.notify();
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.value));
  }
}

// Inicialização
const counter = new Counter(0);

counter.subscribe(value => {
  console.log(\`Contador: \${value}\`);
});

counter.increment();
counter.increment();
console.log("App iniciado com sucesso!");`,
    preview: <JavaScriptPreview />,
  },
  typescript: {
    filename: "api.ts",
    code: `// Sistema de API com TypeScript
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
  timestamp: Date;
}

type UserWithoutId = Omit<User, 'id' | 'createdAt'>;

async function createUser(
  userData: UserWithoutId
): Promise<ApiResponse<User>> {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  const user: User = await response.json();

  return {
    data: user,
    success: true,
    message: 'User created successfully',
    timestamp: new Date(),
  };
}

// Uso com type safety completo
const result = await createUser({
  name: "João Silva",
  email: "joao@email.com",
  role: "admin"
});

console.log(result.data.name);`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
        <div className="text-green-400 mb-2">Type check passed</div>
        <div className="text-slate-400 mb-2">{">"} Creating user...</div>
        <div className="text-cyan-400">
          {"{"}<br/>
          &nbsp;&nbsp;success: true,<br/>
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
    code: `# Bot avançado para Discord com Python
import discord
from discord.ext import commands
from discord import app_commands
import asyncio
import logging

# Configuração de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class MyBot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.all()
        super().__init__(
            command_prefix='!',
            intents=intents
        )
    
    async def setup_hook(self):
        await self.tree.sync()
        logger.info("Commands synced!")

bot = MyBot()

@bot.event
async def on_ready():
    logger.info(f'{bot.user} está online!')
    await bot.change_presence(
        activity=discord.Game('Programando!')
    )

@bot.hybrid_command(name="ping")
async def ping(ctx: commands.Context):
    """Mostra a latência do bot"""
    latency = round(bot.latency * 1000)
    embed = discord.Embed(
        title="Pong!",
        description=f"Latência: {latency}ms",
        color=0x5865F2
    )
    await ctx.send(embed=embed)

@bot.hybrid_command(name="userinfo")
@app_commands.describe(member="Membro para ver info")
async def userinfo(ctx, member: discord.Member = None):
    """Mostra informações de um usuário"""
    member = member or ctx.author
    
    embed = discord.Embed(
        title=f"Info de {member.display_name}",
        color=member.color
    )
    embed.set_thumbnail(url=member.display_avatar.url)
    embed.add_field(name="ID", value=member.id)
    embed.add_field(name="Entrou", value=member.joined_at.strftime("%d/%m/%Y"))
    
    await ctx.send(embed=embed)

if __name__ == "__main__":
    bot.run('YOUR_TOKEN')`,
    preview: (
      <div className="bg-[#36393f] p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">B</div>
          <span className="text-white font-medium">MyBot</span>
          <span className="text-xs bg-indigo-500 text-white px-1.5 py-0.5 rounded">BOT</span>
        </div>
        <div className="bg-[#2f3136] rounded-lg p-3 border-l-4 border-indigo-500">
          <div className="text-white font-semibold mb-1">Pong!</div>
          <div className="text-slate-300 text-sm">Latência: 42ms</div>
        </div>
      </div>
    ),
  },
  html: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Landing page moderna">
  <title>Meu Site Incrível</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="hero">
    <nav class="navbar">
      <div class="logo">
        <a href="#">MeuSite</a>
      </div>
      <ul class="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
    
    <div class="hero-content">
      <h1>Olá, Mundo!</h1>
      <p>Bem-vindo ao futuro do desenvolvimento web.</p>
      <button id="cta" class="btn-primary">
        Começar Agora
      </button>
    </div>
  </header>

  <main>
    <section id="sobre" class="section">
      <h2>Sobre Nós</h2>
      <p>Criamos experiências digitais incríveis.</p>
    </section>
  </main>

  <script src="app.js"></script>
</body>
</html>`,
    preview: (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Olá, Mundo!</h1>
        <p className="text-slate-300 mb-4">Bem-vindo ao futuro do desenvolvimento web.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Começar Agora
        </button>
      </div>
    ),
  },
  css: {
    filename: "styles.css",
    code: `/* Design System Moderno */
:root {
  --primary: #6366f1;
  --primary-light: #818cf8;
  --secondary: #10b981;
  --background: #0f172a;
  --surface: #1e293b;
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --radius: 12px;
  --shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.6;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--primary) 0%,
    var(--secondary) 100%
  );
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    transparent 0%,
    var(--background) 100%
  );
  opacity: 0.4;
}

.btn-primary {
  padding: 1rem 2.5rem;
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  background: var(--primary);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}`,
    preview: (
      <div className="bg-gradient-to-br from-indigo-500 to-emerald-500 p-8 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
        <h1 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Design Moderno</h1>
        <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-2xl">
          Hover Effect
        </button>
      </div>
    ),
  },
  react: {
    filename: "Counter.jsx",
    code: `// Componente React moderno com hooks
import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Counter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);

  const increment = useCallback(() => {
    setCount(prev => {
      const newValue = prev + step;
      setHistory(h => [...h, newValue]);
      return newValue;
    });
  }, [step]);

  const decrement = useCallback(() => {
    setCount(prev => {
      const newValue = prev - step;
      setHistory(h => [...h, newValue]);
      return newValue;
    });
  }, [step]);

  const reset = useCallback(() => {
    setCount(initialValue);
    setHistory([]);
  }, [initialValue]);

  const stats = useMemo(() => ({
    max: Math.max(...history, count),
    min: Math.min(...history, count),
    changes: history.length
  }), [history, count]);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="text-6xl font-bold"
        >
          {count}
        </motion.span>
      </AnimatePresence>

      <div className="flex gap-4">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>

      <div className="text-sm text-gray-400">
        Max: {stats.max} | Min: {stats.min} | Changes: {stats.changes}
      </div>
    </div>
  );
}

export default Counter;`,
    preview: <JavaScriptPreview />,
  },
  json: {
    filename: "config.json",
    code: `{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Projeto incrível com configuração completa",
  "main": "src/index.ts",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "jest --coverage",
    "prepare": "husky install"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.3.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/user/repo"
  },
  "keywords": ["nextjs", "react", "typescript"],
  "author": "Seu Nome <email@exemplo.com>",
  "license": "MIT"
}`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
        <div className="text-green-400 mb-2">package.json validado</div>
        <div className="text-slate-400 text-xs">
          <div>name: meu-projeto</div>
          <div>version: 1.0.0</div>
          <div>dependencies: 5</div>
          <div>devDependencies: 5</div>
        </div>
      </div>
    ),
  },
  sql: {
    filename: "schema.sql",
    code: `-- Schema do banco de dados
-- Criação das tabelas principais

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT,
    excerpt VARCHAR(500),
    status VARCHAR(20) DEFAULT 'draft',
    views INTEGER DEFAULT 0,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_comments_post_id ON comments(post_id);

-- View para posts com estatísticas
CREATE VIEW posts_with_stats AS
SELECT 
    p.*,
    u.username as author_name,
    COUNT(c.id) as comment_count
FROM posts p
LEFT JOIN users u ON p.user_id = u.id
LEFT JOIN comments c ON p.id = c.post_id
GROUP BY p.id, u.username;`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-green-400 mb-2">Query executada</div>
        <div className="text-slate-400">
          <div>Tables created: 3</div>
          <div>Indexes created: 3</div>
          <div>Views created: 1</div>
        </div>
      </div>
    ),
  },
  bash: {
    filename: "deploy.sh",
    code: `#!/bin/bash
# Script de deploy automatizado

set -e  # Sair em caso de erro

# Cores para output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m'

# Configurações
PROJECT_DIR="/var/www/meu-projeto"
BACKUP_DIR="/var/backups/meu-projeto"
BRANCH="main"

echo -e "\${YELLOW}Iniciando deploy...\${NC}"

# Backup do projeto atual
backup() {
    echo "Criando backup..."
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    tar -czf "\${BACKUP_DIR}/backup_\${TIMESTAMP}.tar.gz" "\${PROJECT_DIR}"
    echo -e "\${GREEN}Backup criado!\${NC}"
}

# Pull das mudanças
update_code() {
    echo "Atualizando código..."
    cd "\${PROJECT_DIR}"
    git fetch origin
    git checkout \${BRANCH}
    git pull origin \${BRANCH}
}

# Instalar dependências
install_deps() {
    echo "Instalando dependências..."
    pnpm install --frozen-lockfile
}

# Build do projeto
build() {
    echo "Construindo projeto..."
    pnpm build
}

# Reiniciar serviços
restart_services() {
    echo "Reiniciando serviços..."
    pm2 restart meu-projeto
    sudo systemctl reload nginx
}

# Execução principal
main() {
    backup
    update_code
    install_deps
    build
    restart_services
    echo -e "\${GREEN}Deploy concluído com sucesso!\${NC}"
}

main "$@"`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-yellow-400">Iniciando deploy...</div>
        <div className="text-slate-400">Criando backup...</div>
        <div className="text-green-400">Backup criado!</div>
        <div className="text-slate-400">Atualizando código...</div>
        <div className="text-slate-400">Instalando dependências...</div>
        <div className="text-slate-400">Construindo projeto...</div>
        <div className="text-green-400">Deploy concluído!</div>
      </div>
    ),
  },
  rust: {
    filename: "main.rs",
    code: `// API REST com Rust e Axum
use axum::{
    routing::{get, post},
    Router, Json, Extension,
    extract::Path,
    http::StatusCode,
};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Clone, Serialize, Deserialize)]
struct User {
    id: u64,
    name: String,
    email: String,
}

#[derive(Deserialize)]
struct CreateUser {
    name: String,
    email: String,
}

type SharedState = Arc<RwLock<Vec<User>>>;

async fn list_users(
    Extension(state): Extension<SharedState>
) -> Json<Vec<User>> {
    let users = state.read().await;
    Json(users.clone())
}

async fn create_user(
    Extension(state): Extension<SharedState>,
    Json(payload): Json<CreateUser>,
) -> (StatusCode, Json<User>) {
    let mut users = state.write().await;
    
    let user = User {
        id: users.len() as u64 + 1,
        name: payload.name,
        email: payload.email,
    };
    
    users.push(user.clone());
    
    (StatusCode::CREATED, Json(user))
}

async fn get_user(
    Path(id): Path<u64>,
    Extension(state): Extension<SharedState>,
) -> Result<Json<User>, StatusCode> {
    let users = state.read().await;
    users
        .iter()
        .find(|u| u.id == id)
        .cloned()
        .map(Json)
        .ok_or(StatusCode::NOT_FOUND)
}

#[tokio::main]
async fn main() {
    let state: SharedState = Arc::new(RwLock::new(vec![]));

    let app = Router::new()
        .route("/users", get(list_users).post(create_user))
        .route("/users/:id", get(get_user))
        .layer(Extension(state));

    println!("Server running on http://localhost:3000");
    
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-green-400">Compiling meu-projeto v0.1.0</div>
        <div className="text-green-400">Finished release [optimized]</div>
        <div className="text-cyan-400">Server running on http://localhost:3000</div>
      </div>
    ),
  },
  go: {
    filename: "main.go",
    code: `// API REST com Go e Gin
package main

import (
    "net/http"
    "strconv"
    "sync"

    "github.com/gin-gonic/gin"
)

type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

type CreateUserInput struct {
    Name  string \`json:"name" binding:"required"\`
    Email string \`json:"email" binding:"required,email"\`
}

var (
    users  = make(map[int]User)
    nextID = 1
    mu     sync.RWMutex
)

func main() {
    r := gin.Default()

    // Rotas
    r.GET("/users", listUsers)
    r.POST("/users", createUser)
    r.GET("/users/:id", getUser)
    r.DELETE("/users/:id", deleteUser)

    r.Run(":8080")
}

func listUsers(c *gin.Context) {
    mu.RLock()
    defer mu.RUnlock()

    result := make([]User, 0, len(users))
    for _, u := range users {
        result = append(result, u)
    }

    c.JSON(http.StatusOK, gin.H{
        "data":  result,
        "count": len(result),
    })
}

func createUser(c *gin.Context) {
    var input CreateUserInput
    if err := c.ShouldBindJSON(&input); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }

    mu.Lock()
    user := User{
        ID:    nextID,
        Name:  input.Name,
        Email: input.Email,
    }
    users[nextID] = user
    nextID++
    mu.Unlock()

    c.JSON(http.StatusCreated, user)
}

func getUser(c *gin.Context) {
    id, _ := strconv.Atoi(c.Param("id"))

    mu.RLock()
    user, exists := users[id]
    mu.RUnlock()

    if !exists {
        c.JSON(http.StatusNotFound, gin.H{
            "error": "User not found",
        })
        return
    }

    c.JSON(http.StatusOK, user)
}

func deleteUser(c *gin.Context) {
    id, _ := strconv.Atoi(c.Param("id"))

    mu.Lock()
    delete(users, id)
    mu.Unlock()

    c.Status(http.StatusNoContent)
}`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-green-400">go build -o server</div>
        <div className="text-cyan-400">[GIN] Listening on :8080</div>
        <div className="text-slate-400">GET /users - 200</div>
        <div className="text-slate-400">POST /users - 201</div>
      </div>
    ),
  },
  java: {
    filename: "UserController.java",
    code: `// REST Controller com Spring Boot
package com.example.api.controller;

import com.example.api.model.User;
import com.example.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(
            @PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<User> createUser(
            @Valid @RequestBody CreateUserDTO dto) {
        User user = userService.create(dto);
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserDTO dto) {
        return userService.update(id, dto)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(
            @PathVariable Long id) {
        if (userService.delete(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-green-400">BUILD SUCCESS</div>
        <div className="text-cyan-400">Tomcat started on port 8080</div>
        <div className="text-slate-400">Mapped /api/users</div>
      </div>
    ),
  },
  csharp: {
    filename: "UserController.cs",
    code: `// Controller com ASP.NET Core
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MyApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ILogger<UsersController> _logger;

    public UsersController(
        AppDbContext context,
        ILogger<UsersController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        var users = await _context.Users
            .AsNoTracking()
            .ToListAsync();
            
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return NotFound(new { message = "User not found" });
        }

        return Ok(user);
    }

    [HttpPost]
    public async Task<ActionResult<User>> CreateUser(
        [FromBody] CreateUserDto dto)
    {
        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            CreatedAt = DateTime.UtcNow
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        _logger.LogInformation(
            "User {Id} created", user.Id);

        return CreatedAtAction(
            nameof(GetUser),
            new { id = user.Id },
            user);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _context.Users.FindAsync(id);
        
        if (user == null) return NotFound();

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

public record CreateUserDto(
    [Required] string Name,
    [Required][EmailAddress] string Email
);`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-green-400">Build succeeded.</div>
        <div className="text-cyan-400">Now listening on: https://localhost:5001</div>
        <div className="text-slate-400">Application started.</div>
      </div>
    ),
  },
  cpp: {
    filename: "main.cpp",
    code: `// Sistema de gerenciamento com C++
#include <iostream>
#include <vector>
#include <memory>
#include <string>
#include <unordered_map>
#include <algorithm>

class User {
private:
    int id;
    std::string name;
    std::string email;

public:
    User(int id, std::string name, std::string email)
        : id(id), name(std::move(name)), email(std::move(email)) {}

    int getId() const { return id; }
    const std::string& getName() const { return name; }
    const std::string& getEmail() const { return email; }

    void setName(const std::string& newName) { name = newName; }
    void setEmail(const std::string& newEmail) { email = newEmail; }

    void print() const {
        std::cout << "User #" << id 
                  << ": " << name 
                  << " <" << email << ">" 
                  << std::endl;
    }
};

class UserManager {
private:
    std::vector<std::unique_ptr<User>> users;
    int nextId = 1;

public:
    User* createUser(const std::string& name, 
                     const std::string& email) {
        auto user = std::make_unique<User>(nextId++, name, email);
        User* ptr = user.get();
        users.push_back(std::move(user));
        return ptr;
    }

    User* findById(int id) {
        auto it = std::find_if(users.begin(), users.end(),
            [id](const auto& u) { return u->getId() == id; });
        return it != users.end() ? it->get() : nullptr;
    }

    bool deleteUser(int id) {
        auto it = std::find_if(users.begin(), users.end(),
            [id](const auto& u) { return u->getId() == id; });
        if (it != users.end()) {
            users.erase(it);
            return true;
        }
        return false;
    }

    void listAll() const {
        for (const auto& user : users) {
            user->print();
        }
    }

    size_t count() const { return users.size(); }
};

int main() {
    UserManager manager;

    manager.createUser("João Silva", "joao@email.com");
    manager.createUser("Maria Santos", "maria@email.com");

    std::cout << "Total: " << manager.count() << " users" << std::endl;
    manager.listAll();

    return 0;
}`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-green-400">g++ -std=c++17 main.cpp -o app</div>
        <div className="text-slate-400">Total: 2 users</div>
        <div className="text-cyan-400">User #1: João Silva</div>
        <div className="text-cyan-400">User #2: Maria Santos</div>
      </div>
    ),
  },
  php: {
    filename: "UserController.php",
    code: `<?php
// Controller com Laravel
namespace App\\Http\\Controllers;

use App\\Models\\User;
use App\\Http\\Requests\\CreateUserRequest;
use App\\Http\\Requests\\UpdateUserRequest;
use App\\Http\\Resources\\UserResource;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Http\\Resources\\Json\\AnonymousResourceCollection;

class UserController extends Controller
{
    /**
     * Listar todos os usuários
     */
    public function index(): AnonymousResourceCollection
    {
        $users = User::query()
            ->latest()
            ->paginate(15);

        return UserResource::collection($users);
    }

    /**
     * Criar novo usuário
     */
    public function store(CreateUserRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'data' => new UserResource($user),
        ], 201);
    }

    /**
     * Exibir usuário específico
     */
    public function show(User $user): UserResource
    {
        return new UserResource($user->load('posts', 'comments'));
    }

    /**
     * Atualizar usuário
     */
    public function update(
        UpdateUserRequest $request,
        User $user
    ): JsonResponse {
        $user->update($request->validated());

        return response()->json([
            'message' => 'User updated successfully',
            'data' => new UserResource($user),
        ]);
    }

    /**
     * Deletar usuário
     */
    public function destroy(User $user): JsonResponse
    {
        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully',
        ]);
    }
}`,
    preview: (
      <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
        <div className="text-green-400">php artisan serve</div>
        <div className="text-cyan-400">Server running on http://127.0.0.1:8000</div>
        <div className="text-slate-400">GET /api/users - 200</div>
      </div>
    ),
  },
}

// Preview interativo para JavaScript
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

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState<LanguageKey>("javascript")
  const [showPreview, setShowPreview] = useState(false)
  const [copied, setCopied] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "$ pnpm dev",
    "Ready in 1.2s",
    "Listening on http://localhost:3000",
  ])
  const [isFullscreen, setIsFullscreen] = useState(false)

  const currentExample = codeExamples[activeTab]
  const currentLanguage = languages[activeTab]

  const handleRun = useCallback(() => {
    setShowPreview(true)
    setTerminalOutput(prev => [
      ...prev,
      `$ Executando ${currentExample.filename}...`,
      "Compilando...",
      "Executando código...",
      "Saída do programa:",
    ])
  }, [currentExample.filename])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(currentExample.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [currentExample.code])

  const handleReset = useCallback(() => {
    setShowPreview(false)
    setTerminalOutput([
      "$ pnpm dev",
      "Ready in 1.2s", 
      "Listening on http://localhost:3000",
    ])
  }, [])

  const sidebarItems = [
    { icon: Files, active: true, label: "Explorer" },
    { icon: Search, active: false, label: "Search" },
    { icon: GitBranch, active: false, label: "Git" },
    { icon: Bug, active: false, label: "Debug" },
    { icon: Blocks, active: false, label: "Extensions" },
    { icon: Settings, active: false, label: "Settings" },
  ]

  return (
    <div className={`min-h-screen bg-background ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Voltar</span>
            </Link>
            <div className="h-4 w-px bg-border" />
            <h1 className="text-xl font-bold">
              Code <span className="gradient-text">Playground</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {Object.keys(languages).length} linguagens disponíveis
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Language selector cards */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Selecione uma linguagem:</h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(languages) as LanguageKey[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key)
                  setShowPreview(false)
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {languages[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* VSCode-like Editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl overflow-hidden border border-border/50 shadow-2xl ${isFullscreen ? 'h-[calc(100vh-2rem)]' : ''}`}
        >
          {/* Title bar */}
          <div className="bg-[#1e1e1e] px-4 py-2 flex items-center justify-between border-b border-[#333]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <Circle className="w-3 h-3 text-red-500 fill-red-500" />
                <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <Circle className="w-3 h-3 text-green-500 fill-green-500" />
              </div>
              <span className="text-slate-400 text-sm ml-2">
                {currentExample.filename} - Code Playground
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1 hover:bg-[#333] rounded transition-colors"
              >
                <Maximize2 className="w-4 h-4 text-slate-500" />
              </button>
              <Minus className="w-4 h-4 text-slate-500" />
              <Square className="w-3 h-3 text-slate-500" />
              <X className="w-4 h-4 text-slate-500" />
            </div>
          </div>

          <div className="flex" style={{ height: isFullscreen ? 'calc(100% - 40px)' : '600px' }}>
            {/* Sidebar */}
            <div className="bg-[#252526] w-12 flex flex-col items-center py-2 border-r border-[#333]">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center cursor-pointer transition-colors ${
                    item.active ? 'text-white border-l-2 border-primary bg-[#37373d]' : 'text-slate-500 hover:text-slate-300'
                  }`}
                  title={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </div>
              ))}
            </div>

            {/* File Explorer */}
            <div className="bg-[#252526] w-56 border-r border-[#333] hidden lg:block overflow-y-auto">
              <div className="p-2 text-xs text-slate-400 uppercase tracking-wider sticky top-0 bg-[#252526]">
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
                      onClick={() => {
                        setActiveTab(key)
                        setShowPreview(false)
                      }}
                      className={`flex items-center gap-2 w-full text-left py-1 px-2 rounded text-sm transition-colors ${
                        activeTab === key ? 'bg-[#37373d] text-white' : 'text-slate-400 hover:text-white hover:bg-[#2a2d2e]'
                      }`}
                    >
                      <FileCode className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{codeExamples[key].filename}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
              {/* Tabs & Actions */}
              <div className="flex items-center border-b border-[#333] bg-[#252526]">
                <div className="flex items-center overflow-x-auto flex-1">
                  <div className="px-4 py-2 text-sm flex items-center gap-2 border-r border-[#333] bg-[#1e1e1e] text-white border-t-2 border-t-primary whitespace-nowrap">
                    <FileCode className="w-4 h-4" />
                    {currentExample.filename}
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleReset}
                    className="text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleRun}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Executar
                  </Button>
                </div>
              </div>

              {/* Code Area */}
              <div className="flex flex-1 min-h-0 overflow-hidden">
                <div className="flex-1 overflow-auto">
                  <Highlight
                    theme={themes.vsDark}
                    code={currentExample.code}
                    language={currentLanguage.prismLang}
                  >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre 
                        className={`${className} p-4 text-sm font-mono`} 
                        style={{ ...style, background: 'transparent', margin: 0 }}
                      >
                        {tokens.map((line, i) => (
                          <div key={i} {...getLineProps({ line })} className="flex">
                            <span className="w-10 text-right pr-4 text-slate-600 select-none text-xs">
                              {i + 1}
                            </span>
                            <span>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                              ))}
                            </span>
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </div>

                {/* Preview Panel */}
                <AnimatePresence>
                  {showPreview && currentExample.preview && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 320, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="border-l border-[#333] overflow-hidden flex-shrink-0"
                    >
                      <div className="p-2 bg-[#252526] text-xs text-slate-400 border-b border-[#333] flex items-center justify-between">
                        <span>Preview</span>
                        <button 
                          onClick={() => setShowPreview(false)}
                          className="hover:text-white transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="p-4 overflow-auto h-full">
                        {currentExample.preview}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Terminal */}
              <div className="border-t border-[#333] flex-shrink-0">
                <div className="flex items-center gap-2 px-4 py-1 bg-[#252526] text-xs">
                  <Terminal className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">Terminal</span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span className="text-slate-500">bash</span>
                </div>
                <div className="bg-[#1e1e1e] p-3 font-mono text-xs h-28 overflow-auto">
                  {terminalOutput.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${
                        line.includes('sucesso') || line.includes('Ready') || line.includes('Listening') ? 'text-emerald-400' : 
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
        </motion.div>

        {/* Info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-muted-foreground"
        >
          <p className="text-sm">
            Explore exemplos de código em diferentes linguagens com syntax highlighting profissional.
          </p>
          <p className="text-xs mt-2">
            Clique em &quot;Executar&quot; para ver o preview interativo quando disponível.
          </p>
        </motion.div>
      </main>
    </div>
  )
}
