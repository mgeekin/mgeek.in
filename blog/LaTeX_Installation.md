---
layout: page
title: How to install LaTeX | Instructions to download and install LaTeX using Texlive.iso
topmenu: false
submenu: true
submenutype: blog
submenuindex: 4
comments: true
---
# How to install LaTeX | Instructions to download and install LaTeX using Texlive.iso

---  

## Download LaTeX 

### Texlive.iso and texworks
Same iso file is used to install on windows, mac, or linux systems
homepage: https://tug.org/texlive/  

It can be downloaded from [https://ctan.org/tex-archive/systems/texlive/Images?lang=en](https://ctan.org/tex-archive/systems/texlive/Images?lang=en)


<button class="btn btn-primary" type="button" onclick="location.href='http://mirrors.ctan.org/systems/texlive/Images/texlive2020-20200406.iso'">Download texlive iso file (3814 MB)</button>



<img src="http://mgeek.in\blog\LaTeX_Installation\DownloadTexlive.gif" alt="Banner" width="800px"/>
[](mgeek.in\blog\LaTeX_Installation\DownloadTexlive.gif)


Altough texworks is included in texlive, 
you may wanna install latest version from 
https://github.com/TeXworks/texworks/releases

---  

### Mount downloaded texlive.iso to virtual drive
On linux, windows 8, or windows 10,  
double click to mount downloaded texlive.iso image in to virtual drive.

for older versions of windows you might need virtual drive software like:   
1. [wincdemu](https://wincdemu.sysprogs.org/)
2. [winarchiver](http://www.winarchiver.com/) 
these softwares are optional but it saves space.
You may directly extract files from texlive.iso using [winrar](http://www.rarlab.com/) or [7-zip](http://7-zip.org/). And install from extracted files.  



---  


## Installation

The installation process is fairly simple.

#### On Windows
double click on install-tl-windows.bat and installation will start from command window.
Follow the installer instructions. 
The script will complete installation in around 20min to 60min

#### On Linux
double click on install-tl or right click on install-tl and select open in terminal. Follow the installer instructions.


<img src="http://mgeek.in\blog\LaTeX_Installation\MountAndInstall.gif" alt="Banner" width="800px"/>
[](mgeek.in\blog\LaTeX_Installation\MountAndInstall.gif)  

The script will complete installation in around 20min to 60min

after installation of all packages 
<img src="https://i.imgur.com/aw2kLSR.png" alt="Banner" width="400px"/>
<img src="https://i.imgur.com/UyoirI8.png" alt="Banner" width="400px"/>  

click close



---  
# Optional

## Direct from internet on linux
```sh
sudo apt-get install texlive texworks
```

## windows users may also try

https://miktex.org/  
https://www.tug.org/protext/  
