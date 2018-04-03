
//  Variables Initialization

var macro, i, j;

var lurl = [];
lurl[0] = "https://www.kijiji.it/offerte-di-lavoro/offerta/annunci-roma/badante/?entryPoint=sb";
lurl[1] = "https://www.kijiji.it/offerte-di-lavoro/cerco-lavoro-servizi/como-annunci-como/?entryPoint=sb";

var ltext = [];
ltext[0] = "Ciao,<SP>se<SP>cerca<SP>badante,<SP>le<SP>consiglio<SP>il<SP>sito<SP>badante-noproblem.com<BR>Buona<SP>giornata";
ltext[1] = "Ciao,<SP>cerchiamo<SP>personale<SP>per<SP>pulizie<SP>uffici.<SP>iscriversi<SP>su<SP>SOBIVO.com.<SP>non<SP>rispondere<SP>qui.";

var lmail = [];
lmail[0] = "vhu6u@web2mailco.com";
lmail[1] = "h6y5g@carbtc.net";

for (j = 0; j < 1; j++) {
	

			macro =  "CODE:";
			macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";

			macro +=  "SET !ERRORIGNORE YES" + "\n";
			macro +=  "TAB T=1" + "\n";

			macro +=  "SET !VAR1 " + lurl[j] + "\n";
			macro +=  "SET !VAR2 " + lmail[j] + "\n";
			macro +=  "' Start at line 1 " + "\n";
			macro +=  "SET !LOOP 2" + "\n";
			//macro +=  "' Increase the current position in the file with each loop " + "\n";

			//  Answer each ads
			for (i = 12; i <= 17; i++) {

				macro +=  "URL GOTO={{!VAR1}}" + "\n";
				macro +=  "WAIT SECONDS=3" + "\n";
				
				macro +=  "TAG POS=" + i + "  TYPE=H4 ATTR=TXT:Contatta<SP>l'utente" + "\n";
				macro +=  "WAIT SECONDS=3" + "\n";
				macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reply-form ATTR=NAME:name CONTENT=Paolo" + "\n";
				macro +=  "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:reply-form ATTR=NAME:email CONTENT={{!VAR2}} " + "\n";
				macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=ID:reply-form ATTR=NAME:message CONTENT=" + ltext[j] + "\n";
				macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:checkbox__control&&TXT:" + "\n";
				macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:reply-form ATTR=NAME:privacy2 CONTENT=YES" + "\n";
				macro +=  "TAG POS=2 TYPE=DIV ATTR=CLASS:checkbox__control&&TXT:" + "\n";
				macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:reply-form ATTR=NAME:privacy3 CONTENT=YES" + "\n";
				macro +=  "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:reply-form ATTR=*" + "\n";
				macro +=  "WAIT SECONDS=3" + "\n";
			  }
}			  
  
//  Run The Macro

iimDisplay("iMacro is now running. ");

iimPlay(macro)

