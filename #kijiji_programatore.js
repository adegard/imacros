
//  Variables Initialization

var macro, i, url;

url="https://www.kijiji.it/offerte-di-lavoro/cerco-lavoro-servizi/annunci-milano/programmatore/?entryPoint=sb";

macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
//macro +=  "TAB CLOSEALLOTHERS" + "\n";
macro +=  "SET !ERRORIGNORE YES" + "\n";
macro +=  "TAB T=1" + "\n";
macro +=  "SET !VAR1 " + url + "\n";
macro +=  "SET !VAR2 5gvfs@uemail99.com" + "\n";
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
	macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=ID:reply-form ATTR=NAME:message CONTENT=Ciao,<SP>cerchiamo<SP>un<SP>programmatore<SP>php<SP>javascript<SP>e<SP>html.<SP>iscriversi<SP>su<SP>SOBIVO.com<SP>grazie" + "\n";
	macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:checkbox__control&&TXT:" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:reply-form ATTR=NAME:privacy2 CONTENT=YES" + "\n";
	macro +=  "TAG POS=2 TYPE=DIV ATTR=CLASS:checkbox__control&&TXT:" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:reply-form ATTR=NAME:privacy3 CONTENT=YES" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:reply-form ATTR=*" + "\n";
	macro +=  "WAIT SECONDS=3" + "\n";

  }
  
//  Run The Macro

iimDisplay("iMacro is now running. Let's hack growth.");
iimPlay(macro)