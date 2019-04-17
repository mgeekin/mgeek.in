---
layout: page
title: Type faster equations
permalink: /cheatsheet/Faster Equationst/
submenu: true
submenutype: cheatsheet
submenuindex: 2
comments: true
---
# Learn to write equations in Markdown and convert it to docx format
---
## Prepare system 
### Download and install
1. #### pandoc [Download link](https://pandoc.org/installing.html) required
2. Any text editor
   1. visualstudiocode [Download link](https://code.visualstudio.com/) recomended
   2. markdownedit [Download link](https://markdownedit.com/) alternative to visualstudiocode
   3. Or simply type in any text editor `notepad` or `vim`

### Equations must be enclosed by $ sign or $$ 

   1. enclose formulaes in single dollar sign `$ your equation $` for inline equations.
   2. enclose formulaes in double dollar sign `$$ your equation $$` for equation environment and start with new line.

![gif](https://i.imgur.com/SRALPxo.gif)

### Symbols

Code| Output
:---:|:---:
`$\alpha$`|$\alpha$
`$\beta$`|$\beta$
`$\delta$` | $\delta$  
`$\rho$` | $\rho$  
`$\omega$` | $\omega$  
`$\Omega$` | $\Omega$  
`$\Delta$` | $\Delta$  



Fractions|Output
:---:|:---:
`$\frac{numerator}{demoninator}$` | $\frac{numerator}{demoninator}$
`$\frac{a}{b}$` |$\frac{a}{b}$

Powers|Output
:---:|:---:
 `$a^b$` | $a^b$

Subscript|Output
:---:|:---:
`$a_b$` | $a_b$


### Brackets
simple `()` are not because brackets done resize to cover content like below
`$(\frac{a}{b)$` $(a^2\frac{a^2}{b^2})$  
so  use `\left( and \right)`
Brackets|Output
:---:|:---:
 `$\left($` | $\left( a \right.$
`$\right($` | $\left. a \right)$
`$\left( a \right)$` | $\left( a^2\frac{a^2}{b^2} \right)$   
`$\left[$` | $\left[ a \right.$
`$\right]$` | $\left. a \right]$
`$\left[ a \right\$` | $\left[a^2\frac{a^2}{b^2} \right]$
`$E=mc^2$`|$E=mc^2$



1. ##  now save this as "anyfilename.md" 
2. ## run command in the same folder as
   `pandoc anyfilename.md -o anyfilename.docx`

   ## check anyfilename.docx in the directory


### Test formulas

$$E=mc^2$$
$$\vec{F}=m\vec{a}$$
$$S=ut+\frac{1}{2}at^2$$
$$v=u+at$$
$$v^2=u^2+2as$$
$$V=l\frac{\delta i}{\delta t}$$
$$\nabla \times \overrightarrow E= - \frac{\partial \overrightarrow B}{\partial t}$$

$$$$

$$\left|\begin{matrix}a\ b\ c\\d\ e\ f\\ g\ h\ i \end{matrix}\right|$$