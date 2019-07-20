---
layout: page
title: Texworks windows config to add spell check
submenu: true
submenutype: cheatsheet
submenuindex: 5
comments: true

---
```
You can turn on automatic spell-checking of your source document from Edit ?Spelling?<language>. It is also possible to ask TEXworks to enable spell-checking by default by setting a dictionary in Edit?Preferences…?Editor?Spell-check language.

During typing, every word the spell-checker considers wrong is underlined by a red wavy line. A right-click on the word opens a contextual menu in which there are some replacement suggestions. Click on the desired word to make the replacement.

Before using the spell-checker, you need to install dictionaries in the right folder of TEXworks: <resources>\dictionaries. The <resources> folder can be accessed easily via Help?Settings and Resources….

On Linux, the dictionaries are usually taken from the folder /usr/share/myspell/dicts—the default path for myspell dictionaries. Note, though, that the maintainer of your TEXworks package may have changed this to reflect the file system layout of your Linux distribution. You can override this default by setting the TW_DICPATH environment variable before running TEXworks.

One can use the available dictionaries for OpenOffice.org and other free software;2 if you have Mozilla Thunderbird with spell-checking, you can copy its .aff and .dic files as well, for example.
```