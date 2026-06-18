# 🔍 Lexical Analyzer (Scanner)

> **Compiler Construction Lab Project** | **Minhaj University Lahore**

A robust, high-performance Lexical Analyzer designed to process source code, filter out whitespaces and comments, and tokenize characters into meaningful categories (keywords, identifiers, operators, constants, etc.). 

This project implements a split-architecture approach: leveraging the speed and strict memory management of a **C++ Core Engine** for lexical processing, paired with a **Modern Web UI** for seamless user interaction and data visualization.

---
<div align="center">
  <h1>⚙️ Lexical Analyzer Engine</h1>
  <p><b>High-Performance Scanner with Interactive Web UI</b></p>
  
  <!-- Add your animated Demo GIF here -->
  <img src="https://raw.githubusercontent.com/your-username/Lexical-analyzer/main/assets/demo.gif" alt="Animated Demo of Lexical Analyzer" width="700"/>

  <br />

  <!-- Tech Stack Badges -->
  <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</div>

<br/>

## 🏗️ System Architecture

This project implements a split-architecture approach to maximize both processing speed and user experience. 

```mermaid
graph LR
    A[Source Code Input] -->|Web UI| B(Frontend Interface)
    B -->|API/Child Process| C{C++ Core Engine}
    C -->|Regex & Automata| D[Token Generation]
    D -->|JSON/Data Stream| B
    B --> E[Visual Data Table]
    
    style C fill:#00599C,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#E34F26,stroke:#333,stroke-width:2px,color:#fff
