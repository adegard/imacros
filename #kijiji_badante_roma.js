
//  Variables Initialization

var macro, i;

macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
//macro +=  "TAB CLOSEALLOTHERS" + "\n";
macro +=  "SET !ERRORIGNORE YES" + "\n";
macro +=  "TAB T=1" + "\n";
macro +=  "SET !VAR1 https://www.kijiji.it/offerte-di-lavoro/offerta/annunci-roma/badante/?entryPoint=sb" + "\n";
macro +=  "SET !VAR2 788lm@web2mailco.com" + "\n";
macro +=  "' Start at line 1 " + "\n";
macro +=  "SET !LOOP 2" + "\n";
macro +=  "' Increase the current position in the file with each loop " + "\n";

for (i = 2; i <= 12; i++) {

	macro +=  "URL GOTO={{!VAR1}}" + "\n";
	macro +=  "WAIT SECONDS=3" + "\n";
	
	macro +=  "TAG POS=" + i + "  TYPE=H4 ATTR=TXT:Contatta<SP>l'utente" + "\n";
	macro +=  "WAIT SECONDS=3" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reply-form ATTR=NAME:name CONTENT=Paolo" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:reply-form ATTR=NAME:email CONTENT={{!VAR2}} " + "\n";
	macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=ID:reply-form ATTR=NAME:message CONTENT=Ciao,<SP>se<SP>cerca<SP>badante,<SP>le<SP>consiglio<SP>il<SP>sito<SP>badante-noproblem.com<BR>Buona<SP>giornata" + "\n";
	macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:checkbox__control&&TXT:" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:reply-form ATTR=NAME:privacy2 CONTENT=YES" + "\n";
	macro +=  "TAG POS=2 TYPE=DIV ATTR=CLASS:checkbox__control&&TXT:" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:reply-form ATTR=NAME:privacy3 CONTENT=YES" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:reply-form ATTR=*" + "\n";
	macro +=  "WAIT SECONDS=3" + "\n";
iimDisplay("iMacro is now running. " + "LOOP=" + i);
  }
  
//  Run The Macro



iimPlay(macro)
