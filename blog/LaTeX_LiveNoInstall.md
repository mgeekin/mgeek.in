---
layout: page
title: LaTeX_LiveNoInstall
topmenu: false
submenu: true
submenutype: blog
submenuindex: 5
comments: true
---
# LaTeX Live No Install

<div>
<script type="module">
    import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
    customElements.define("latex-js", LaTeXJSComponent)
  </script>

  <style>
    latex-js {
      display: inline-block;
      width: 40%;
      border: 1px solid red;
      margin-right: 2em;
    }
  </style>

  <title>LaTeX.js Web Component Test</title>
</head>

<body>
  <h1>Compiling LaTeX</h1>

  <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">
    \documentclass{article}

    \begin{document}
    Hello World.
    \end{document}
  </latex-js>


  <latex-js hyphenate="false">
    Another.
  </latex-js>
</div>