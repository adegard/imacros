# imacros
installation Firefox e Imacros and quick scripts


Firefox version to install:

https://ftp.mozilla.org/pub/firefox/releases/51.0/ (better for cmd line scripts)

Firefox addon of imacros:

https://addons.mozilla.org/it/firefox/addon/imacros-for-firefox/


Imacros codes and examples:

https://gist.github.com/dcondrey/0d99183624df61efffff


TO LAUNCH FROM BATCH:

start "" "C:\Program Files\Mozilla Firefox\firefox.exe"  http://www.google.com
 ping 127.1.1.1 (or pause or sleep ... it is just to cause a small delay)

 
 start /B "" "C:\Program Files\Mozilla Firefox\firefox.exe"   imacros://run/?m=#kijiji_programatore.js

timeout /t 60
