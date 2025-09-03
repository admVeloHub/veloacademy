# 🎨 VeloHub - Guia de Layout e Design

## 🎯 **Paleta Oficial de Cores**

### **CORES PRINCIPAIS**
```css
--white: #F3F7FC        /* Tom de branco */
--gray: #272A30         /* Cinza */
--blue-dark: #000058    /* Azul Escuro */
--blue-medium: #1634FF  /* Azul Médio */
--blue-light: #1694FF   /* Azul Claro */
```

### **CORES SECUNDÁRIAS**
```css
--blue-opaque: #006AB9  /* Azul Opaco */
--yellow: #FCC200       /* Amarelo */
--green: #15A237        /* Verde */
```

### **CORES DE FUNDO E CONTAINERS (VeloAcademy)**
```css
--cor-fundo: #f0f4f8        /* Fundo principal da aplicação */
--cor-container: #f2f6fa     /* Container principal - Cinza 2% mais claro que o fundo */
--cor-card: #f2f6fa         /* Fundo dos cards - Cinza 2% mais claro que o fundo */
```

---

## 🔤 **Tipografia**

### **Fontes Oficiais**
```css
/* Fonte principal - Referência ao logo Velotax */
font-family: 'Poppins', sans-serif;

/* Fonte secundária - Textos menores */
font-family: 'Anton', sans-serif;
```

### **Hierarquia de Textos**
```css
/* Títulos principais */
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 2rem; /* 32px */

/* Subtítulos */
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 1.5rem; /* 24px */

/* Texto do corpo */
font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 1rem; /* 16px */

/* Textos menores */
font-family: 'Anton', sans-serif;
font-weight: 400;
font-size: 0.875rem; /* 14px */
```

---

## 📦 **Containers e Estrutura**

### **Container Principal (Destacado)**
```css
.container-main {
  background-color: var(--white);
  border-radius: 12px;           /* Quinas arredondadas */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombreado para destacamento */
  padding: 24px;
  margin: 16px;
}
```

### **Container Secundário (Mesmo Plano)**
```css
.container-secondary {
  background: transparent;        /* Sem preenchimento */
  border: 1.5px solid var(--blue-dark); /* Linha simples azul escuro */
  border-radius: 8px;            /* Quinas arredondadas */
  padding: 16px;
  margin: 8px;
}
```

---

## 🎨 **Aplicação das Cores por Contexto**
### **Backgrounds**
```css
--bg-primary: var(--white);      /* Fundo principal */
--bg-secondary: var(--gray);     /* Fundo secundário */
--bg-accent: var(--blue-light);  /* Fundo de destaque */
```

## 🌙 **TEMA ESCURO (NOTURNO) - IMPLEMENTADO E FUNCIONANDO**

### **Cores do Tema Escuro (IMPLEMENTADAS)**
```css
/* Fundo principal */
--cor-fundo-escuro: var(--gray);        /* #272A30 - Cinza escuro */

/* Containers principais */
--cor-container-escuro: rgb(50, 58, 66);        /* #323a42 - Cinza 2% mais claro que o fundo claro */
--cor-card-escuro: #323a42;                     /* #323a42 - Cinza 2% mais claro que o fundo claro */

/* Especificação */
/* A cor #323a42 (rgb(50, 58, 66)) é 2% mais clara que o fundo claro (#f0f4f8) */
/* Mantém contraste adequado entre fundo e containers no tema escuro */
```

### **🎯 IMPLEMENTAÇÃO DO SISTEMA DE TEMA ESCURO**

#### **1. Variáveis CSS no :root**
```css
:root {
  /* CORES PRINCIPAIS */
  --white: #F3F7FC;        /* Tom de branco */
  --gray: #272A30;         /* Cinza */
  
  /* CORES DE FUNDO E CONTAINERS */
  --cor-fundo: #f0f4f8;        /* Fundo principal da aplicação */
  --cor-container: #f2f6fa;     /* Container principal - Cinza 2% mais claro que o fundo */
  --cor-card: #f2f6fa;         /* Fundo dos cards - Cinza 2% mais claro que o fundo */
}
```

#### **2. Classes CSS para Containers**
```css
/* Container principal */
.velohub-container {
  background-color: var(--cor-container);
}

/* Card padrão */
.velohub-card {
  background-color: var(--cor-card);
}

/* Modal e popups */
.velohub-modal {
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

#### **3. Regras para Tema Escuro**
```css
/* Tema escuro - APLICADO AUTOMATICAMENTE */
.dark .velohub-container {
  background-color: #323a42;  /* rgb(50, 58, 66) */
}

.dark .velohub-card {
  background-color: #323a42;  /* rgb(50, 58, 66) */
}

.dark .velohub-modal {
  background-color: #323a42;  /* rgb(50, 58, 66) */
}
```

#### **4. Sistema de Toggle de Tema (JavaScript)**
```javascript
// Função para alternar tema
const toggleDarkMode = () => {
  const isDark = !isDarkMode;
  setIsDarkMode(isDark);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('velohub-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('velohub-theme', 'light');
  }
};

// Aplicar tema salvo ao carregar
useEffect(() => {
  const savedTheme = localStorage.getItem('velohub-theme') || 'light';
  const isDark = savedTheme === 'dark';
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);
```

#### **5. Layout do Header - Especificações Especiais**
```css
/* Header - Tema Claro */
.velohub-header {
  background-color: var(--cor-container);  /* #f2f6fa - Cinza claro */
  border-bottom: 1px solid var(--cor-borda);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Header - Tema Escuro */
[data-theme="dark"] .velohub-header {
  background-color: var(--blue-opaque);    /* #006AB9 - Azul opaco específico */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 102, 171, 0.3);
}

/* Container das Abas de Navegação */
.nav-menu {
  background-color: var(--cor-container);  /* Usa cor padrão dos containers */
  border-radius: 8px;
  padding: 8px 16px;
}

/* IMPORTANTE: Header mantém azul opaco no tema escuro */
/* Containers das abas usam cinza escuro (#323a42) */
/* Esta diferenciação cria hierarquia visual */
```

### **📋 COMO APLICAR EM OUTROS PROJETOS**

#### **Passo 1: Adicionar Variáveis CSS**
```css
:root {
  --white: #F3F7FC;
  --gray: #272A30;
  --cor-container: #f2f6fa;
  --cor-card: #f2f6fa;
}
```

#### **Passo 2: Criar Classes CSS**
```css
.velohub-container {
  background-color: var(--cor-container);
}

.velohub-card {
  background-color: var(--cor-card);
}
```

#### **Passo 3: Adicionar Regras do Tema Escuro**
```css
.dark .velohub-container {
  background-color: #323a42;
}

.dark .velohub-card {
  background-color: #323a42;
}
```

#### **Passo 4: Aplicar Classes nos Containers**
```jsx
// ❌ NÃO FAZER (estilo inline hardcoded)
<div style={{backgroundColor: '#ffffff'}}>

// ✅ FAZER (usar classes CSS)
<div className="velohub-container">
<div className="velohub-card">
```

#### **Passo 5: Implementar Toggle de Tema**
```javascript
// Adicionar classe 'dark' no elemento raiz
document.documentElement.classList.add('dark');    // Ativa tema escuro
document.documentElement.classList.remove('dark'); // Ativa tema claro
```

### **🎨 RESULTADO FINAL**
- **Modo Claro:** Containers usam `#f2f6fa` (cinza claro)
- **Modo Escuro:** Containers automaticamente mudam para `#323a42` (rgb(50, 58, 66))
- **Transição:** Automática e suave via CSS
- **Persistência:** Salva preferência no localStorage
- **Compatibilidade:** Funciona com Tailwind CSS e CSS puro

### **Textos**
```css
--text-primary: var(--gray);     /* Texto principal */
--text-secondary: var(--blue-dark); /* Texto secundário */
--text-accent: var(--blue-medium);  /* Texto de destaque */
--text-light: var(--white);      /* Texto claro */
```

### **Botões e Ações**
```css
--btn-primary: var(--blue-medium);   /* Botão principal */
--btn-secondary: var(--blue-dark);   /* Botão secundário */
--btn-success: var(--green);         /* Botão de sucesso */
--btn-warning: var(--yellow);        /* Botão de aviso */
```

---

## 📱 **Responsividade**

### **Breakpoints**
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### **Grid System**
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr;           /* Mobile: 1 coluna */
  gap: 16px;
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr 2fr 1fr; /* Desktop: 3 colunas */
    gap: 24px;
  }
}
```

---

## 🔧 **Componentes Reutilizáveis**

### **Card Padrão (VeloHub)**
```css
.velohub-card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 16px 0;
  border: 1px solid rgba(22, 52, 255, 0.1);
}
```

### **Card Avançado com Gradiente (VeloAcademy)**
```css
.course-card {
  background: linear-gradient(135deg, var(--cor-card) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid var(--cor-borda);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 32px var(--cor-sombra);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* Linha decorativa no topo */
.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--cor-accent), #4dabf7, var(--cor-accent));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.course-card:hover::before {
  transform: scaleX(1);
}

.course-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px var(--cor-sombra);
  border-color: var(--cor-accent);
}
```

### **Sistema de Accordion (VeloAcademy)**
```css
.module-subtitle {
  margin: 10px 0 0 0;
  font-size: 1.1rem;
  color: var(--cor-texto-principal);
  font-weight: 500;
  padding: 12px 15px;
  background: var(--cor-container);
  border: 1px solid var(--cor-borda);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  user-select: none;
}

.module-subtitle:hover {
  background: var(--cor-fundo);
  border-color: var(--cor-accent);
}

.module-subtitle.active {
  background: var(--cor-accent);
  color: var(--cor-fundo);
  border-color: var(--cor-accent);
}

.accordion-icon {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.module-subtitle.active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  width: 100%;
}

.accordion-content.active {
  max-height: 2000px;
}
```

---

## 🎭 **Animações CSS (VeloAcademy)**

### **Animação de Slide Up**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplicação em cards */
.course-card {
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
}
```

### **Transições e Efeitos Hover**
```css
/* Transição suave para todos os elementos */
* {
  transition: all 0.3s ease;
}

/* Efeito de elevação no hover */
.course-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px var(--cor-sombra);
}

/* Rotação do ícone do accordion */
.accordion-icon {
  transition: transform 0.3s ease;
}

.module-subtitle.active .accordion-icon {
  transform: rotate(180deg);
}
```

### **Botão Padrão**
```css
.velohub-btn {
  background: var(--blue-medium);
  color: var(--white);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.velohub-btn:hover {
  background: var(--blue-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(22, 52, 255, 0.3);
}
```

### **Input Padrão**
```css
.velohub-input {
  background: var(--white);
  border: 1.5px solid var(--blue-dark);
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Poppins', sans-serif;
  color: var(--gray);
  transition: border-color 0.3s ease;
}

.velohub-input:focus {
  outline: none;
  border-color: var(--blue-medium);
  box-shadow: 0 0 0 3px rgba(22, 52, 255, 0.1);
}
```

---



---

## 📋 **Checklist de Implementação**

- [ ] Importar fontes Poppins e Anton
- [ ] Definir variáveis CSS com paleta oficial
- [ ] Aplicar containers com sombreado e bordas arredondadas
- [ ] Implementar sistema de cores por contexto
- [ ] Criar componentes reutilizáveis
- [ ] Testar responsividade
- [ ] Validar acessibilidade de cores

---

## 🚀 **Próximos Passos**

1. **Implementar sistema de cores** em todas as páginas
2. **Aplicar tipografia oficial** (Poppins + Anton)
3. **Padronizar containers** com sombreado e bordas arredondadas
4. **Criar biblioteca de componentes** reutilizáveis
5. **Testar responsividade** em diferentes dispositivos
6. **Validar acessibilidade** de cores e contrastes

---

## 🏷️ **SISTEMA DE ETIQUETAS DE CURSOS (IMPLEMENTADO)**

### **Estrutura das Etiquetas**
```css
.course-badge {
    background: linear-gradient(135deg, cor1 0%, cor1 60%, cor2 100%);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```

### **Tipos de Etiquetas e Cores**

#### **ESSENCIAL** (Onboarding)
```css
.course-card[data-course="onboarding"] .course-badge {
    background: linear-gradient(135deg, var(--blue-medium) 0%, var(--blue-medium) 60%, var(--blue-light) 100%);
}
```
- **Gradiente:** Azul Médio (`#1634FF`) → Azul Claro (`#1694FF`)
- **Uso:** Cursos fundamentais obrigatórios

#### **RECICLAGEM** (Segurança)
```css
.course-card[data-course="cs004"] .course-badge {
    background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow) 60%, var(--blue-medium) 100%);
}
```
- **Gradiente:** Amarelo (`#FCC200`) → Azul Médio (`#1634FF`)
- **Uso:** Cursos de atualização de conhecimentos

#### **OPCIONAL** (Excelência)
```css
.course-card[data-course="cs003"] .course-badge {
    background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-dark) 60%, var(--blue-opaque) 100%);
}
```
- **Gradiente:** Azul Escuro (`#000058`) → Azul Opaco (`#006AB9`)
- **Uso:** Cursos complementares não obrigatórios

#### **ATUALIZAÇÃO** (Operações)
```css
.course-card[data-course="operacoes"] .course-badge {
    background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-dark) 60%, var(--yellow) 100%);
}
```
- **Gradiente:** Azul Escuro (`#000058`) → Amarelo (`#FCC200`)
- **Uso:** Cursos de novas tecnologias/métodos

---

## 🎨 **ESQUEMA DE CORES PARA CARDS DE CURSOS (IMPLEMENTADO)**

### **Hierarquia de Cores nos Cards**
```css
/* Títulos dos Cursos */
.course-card h3 {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}

/* Descrições dos Cursos */
.course-card p {
    color: var(--gray);              /* #272A30 - Cinza */
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
}

/* Linha Divisória */
.course-meta {
    border-top: 1px solid var(--blue-opaque); /* #006AB9 - Azul Opaco */
}
```

---

## 📚 **ESQUEMA DE CORES DENTRO DOS CURSOS (IMPLEMENTADO)**

### **Hierarquia de Cores na Visualização Interna**
```css
/* Títulos DENTRO dos Cursos */
#course-view .course-title-section h1 {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
}

.module-card h3 {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
}

.module-subtitle {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
}

.quiz-header h2 {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
}

.quiz-question h3 {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
}

.result-header h2 {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
}

/* Descrições DENTRO dos Cursos */
#course-view .course-title-section p {
    color: var(--gray);              /* #272A30 - Cinza */
}

.quiz-info {
    color: var(--gray);              /* #272A30 - Cinza */
}

.option-text {
    color: var(--blue-dark);        /* #000058 - Azul Escuro */
}
```

### **Regra de Aplicação**
- **TÍTULOS:** Sempre `var(--blue-dark)` (#000058) - Azul Escuro
- **DESCRIÇÕES:** Sempre `var(--gray)` (#272A30) - Cinza
- **APLICAR EM:** Cards, visualização interna, módulos, quiz, resultados

### **Layout de Grid para Cursos**
```css
#courses-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 colunas por fileira */
    gap: 30px;
    margin-top: 30px;
    width: 100%;
}

/* Responsividade */
@media (max-width: 768px) {
    #courses-grid {
        grid-template-columns: 1fr;         /* 1 coluna no mobile */
        gap: 20px;
    }
}
```

---

## ✨ **SISTEMA DE ANIMAÇÕES DOS CARDS (IMPLEMENTADO)**

### **Animação de Hover nos Cards de Cursos**
```css
/* Configuração Base do Card */
.course-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

/* Barra Superior Animada */
.course-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--blue-medium), var(--blue-light), var(--blue-medium));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

/* Efeito de Hover */
.course-card:hover::before {
    transform: scaleX(1);  /* Barra superior aparece */
}

.course-card:hover {
    transform: translateY(-12px) scale(1.02);  /* Eleva e aumenta ligeiramente */
    box-shadow: 0 20px 40px var(--cor-sombra);  /* Sombra mais pronunciada */
    border-color: var(--cor-accent);  /* Borda colorida */
}
```

### **Características da Animação**
- **Transição Suave:** `cubic-bezier(0.4, 0, 0.2, 1)` para movimento natural
- **Barra Superior:** Aparece com gradiente azul no hover
- **Elevação:** Card sobe 12px e aumenta 2% de tamanho
- **Sombra:** Aumenta significativamente para efeito de profundidade
- **Borda:** Muda para cor de destaque

### **Variações de Animação**
```css
/* Versão Mais Sutil (Alternativa) */
.course-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--cor-sombra);
}

/* Versão com Rotação (Alternativa) */
.course-card:hover {
    transform: translateY(-8px) rotate(1deg);
    box-shadow: 0 8px 30px var(--cor-sombra);
}
```

---

## 📋 **CHECKLIST DE IMPLEMENTAÇÃO ATUALIZADO**

- [x] **Importar fontes Poppins e Anton**
- [x] **Definir variáveis CSS com paleta oficial**
- [x] **Aplicar containers com sombreado e bordas arredondadas**
- [x] **Implementar sistema de cores por contexto**
- [x] **Criar sistema de etiquetas de cursos**
- [x] **Aplicar tipografia oficial**
- [x] **Padronizar cores de textos e divisórias**
- [x] **Implementar grid responsivo para cursos**
- [x] **Padronizar cores internas dos cursos**
- [x] **Implementar sistema de animações nos cards**
- [ ] **Criar componentes reutilizáveis**
- [ ] **Testar responsividade**
- [ ] **Validar acessibilidade de cores**

---

## 🔧 **IMPLEMENTAÇÃO EM OUTROS PROJETOS**

### **1. Importar Paleta de Cores**
```css
:root {
    /* PALETA OFICIAL VELOHUB */
    --white: #F3F7FC;
    --gray: #272A30;
    --blue-dark: #000058;
    --blue-medium: #1634FF;
    --blue-light: #1694FF;
    --blue-opaque: #006AB9;
    --yellow: #FCC200;
    --green: #15A237;
}
```

### **2. Aplicar Sistema de Etiquetas**
```css
/* Copiar estrutura de .course-badge e variações */
/* Adaptar cores conforme necessidade do projeto */
```

### **3. Implementar Esquema de Cores**
```css
/* Títulos: var(--blue-dark) */
/* Textos: var(--gray) */
/* Divisórias: var(--blue-opaque) */

/* IMPORTANTE: Aplicar tanto nos cards quanto DENTRO dos cursos */
/* Títulos internos: var(--blue-dark) */
/* Descrições internas: var(--gray) */
```

### **4. Implementar Sistema de Animações**
```css
/* Copiar estrutura de .course-card com transições */
/* Aplicar efeitos de hover: elevação, sombra, barra superior */
/* Usar cubic-bezier para transições suaves */
```

---

*Este documento foi atualizado com as implementações realizadas na página de cursos do VeloAcademy.*
