
//Auto -risponder for Kijiji ads
//@Arnaud Degardin 2018
//https://simplestipsandtricks.blogspot.it/2018/04/automatizza-il-tuo-browser-per-ad.html


//  Variables Initialization



var macro, i, j;



unic=''; //'80.211.4.187:8080';

var proxy = [];

proxy[0] = unic;

proxy[1] = unic;

proxy[2] = unic;

proxy[3] = unic;

proxy[4] = unic;



//Lista di ricerche Kijiji

var lurl = [];

lurl[0] = "https://www.kijiji.it/offerte-di-lavoro/offerta/badante/?entryPoint=sb";

lurl[1] = "https://www.kijiji.it/offerte-di-lavoro/cerco-lavoro-servizi/badante/?entryPoint=sb";

lurl[2] = "https://www.kijiji.it/offerte-di-lavoro/offerta/assistenza+anziani/?entryPoint=sb";

lurl[3] = "https://www.kijiji.it/offerte-di-lavoro/offerta/pulizie/?entryPoint=sb";

lurl[4] = "https://www.kijiji.it/offerte-di-lavoro/cerco-lavoro-servizi/annunci-lombardia/sviluppatore/?entryPoint=sb";



//risposte ai post kijiji

var ltext = [];

ltext[0] = "Salve,<SP>cerca<SP>una<SP>badante?<SP>le<SP>consiglio<SP>il<SP>sito<SP>Badante-NoProblem.com<BR>Buona<SP>giornata";

ltext[1] = "Ciao,<SP>cerchiamo<SP>badanti<SP>subito<SP>disponibili.<SP>Iscriversi<SP>su<SP>Badante-NoProblem.com<BR>Buona<SP>giornata";

ltext[2] = "Salve,<SP>cerca<SP>una<SP>badante?<SP>le<SP>consiglio<SP>il<SP>sito<SP>Badante-NoProblem.com<BR>Buona<SP>giornata";

ltext[3] = "Salve,<SP>cerchi<SP>una<SP>colf?.<SP>Trova<SP>i<SP>migliori<SP>su<SP>misscleany.com";

ltext[4] = "Ciao,<SP>cerchiamo<SP>freelance<SP>sviluppatori.<SP>iscriviti<SP>su<SP>SOBIVO.com.<SP>non<SP>rispondere<SP>qui.Grazie";



//email temporanee da utilizzare come risposte ad ogni categoria di post

var lmail = [];

lmail[0] = "9k7t9@mailtrix.net";

lmail[1] = "o8adq@twocowmail.net";

lmail[2] = "0mm1p@twocowmail.net";

lmail[3] = "o1t6t@emailsy.info";

lmail[4] = "36c7h@mailtrix.net";



   macro =  "CODE:";

   macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";



   macro +=  "SET !ERRORIGNORE YES" + "\n";

   macro +=  "TAB T=1" + "\n";

   



//passa ogni categoria di post

for (j = 0; j <= 4; j++) {

 

   if (proxy !== "") {

     macro += "PROXY ADDRESS=" + proxy[j] + "\n";

   }



   macro +=  "SET !VAR1 " + lurl[j] + "\n";

   macro +=  "SET !VAR2 " + lmail[j] + "\n";

   macro +=  "' Start at line 1 " + "\n";

   macro +=  "SET !LOOP 2" + "\n";

   //macro +=  "' Increase the current position in the file with each loop " + "\n";



   //  Risponde ad ogni post : impostare qui il numero di post a cui rispondere

   for (i = 1; i <= 15; i++) {



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
