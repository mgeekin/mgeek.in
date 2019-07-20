---
layout: page
title: Texworks windows config to compile with references and index when installing from texlive
submenu: true
submenutype: cheatsheet
submenuindex: 4
comments: true

---
create `compile.bat` in directory `c:/texlive/2019/`

```cmd
"C:\texlive\2019\bin\win32\pdflatex.exe" %1 %2 %3
"C:\texlive\2019\bin\win32\bibtex.exe" %4
"C:\texlive\2019\bin\win32\makeindex.exe" %4
"C:\texlive\2019\bin\win32\pdflatex.exe" %1 %2 %3
"C:\texlive\2019\bin\win32\pdflatex.exe" %1 %2 %3

:: INSTALL PANDOC TO CONVERT TO WORD FILE

::pandoc %3 -S -o %3.docx

:: TO UPDATE REFERENCES 

::set referencefilename=filereference.bib
::pandoc %3 --bibliography=%referencefilename% -S -o %3.docx





::PdfLaTeX+MakeIndex+BibTeX
::$synctexoption
::$fullname
::$basename

```

do this
![End result](https://i.imgur.com/OUhUsB2.png)
open texworks 

go to file>edit>preferences>typesetting>processing tools

add new processing tool
`PdfLaTeX+MakeIndex+BibTeX`

browse to compile.bat created under c:/texlive/2019/

then add 3 arguments

`$synctexoption`
`$fullname`
`$basename`

now change defaults to  `PdfLaTeX+MakeIndex+BibTeX`

![](https://i.imgur.com/g0E9bdf.gif)


Do comment if it works for you.
