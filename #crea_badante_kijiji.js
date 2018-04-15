//  Variables Initialization

var macro, j;

//inserisci titoli diversi ogni volta
var lcita = [];
lcita[0] = "limbiate";
lcita[1] = "cesate";
lcita[2] = "milano";

//inserisci titoli diversi ogni volta
var ltitle = [];
ltitle[0] = "Cerco<SP>badante<SP>a"+ "<SP>" + lcita[0];
ltitle[1] = "Cerco<SP>badante<SP>a"+ "<SP>" + lcita[1];
ltitle[2] = "Cerco<SP>badante<SP>a"+ "<SP>" + lcita[2];

//post kijiji (scrivi il tuo messaggi : spazi separati da <SP>)
var ltext = [];
ltext[0] = "Stiamo<SP>cercando<SP>una<SP>badante<SP>a" + "<SP>" + lcita[0]+"<SP>Registrati<SP>sul<SP>sito<SP>Badante-NoProblem.com<SP><BR>Siamo<SP>un'agenzia<SP>seria!<SP><BR>Grazie<SP>mille.<BR>Team<SP>Badante-NoProblem.com<SP>";
ltext[1] = "Stiamo<SP>cercando<SP>una<SP>badante<SP>a" + "<SP>" + lcita[1]+"<SP>Registrati<SP>sul<SP>sito<SP>Badante-NoProblem.com<SP><BR>Siamo<SP>un'agenzia<SP>seria!<SP><BR>Grazie<SP>mille.<BR>Team<SP>Badante-NoProblem.com<SP>";
ltext[2] = "Stiamo<SP>cercando<SP>una<SP>badante<SP>a" + "<SP>" + lcita[2]+"<SP>Registrati<SP>sul<SP>sito<SP>Badante-NoProblem.com<SP><BR>Siamo<SP>un'agenzia<SP>seria!<SP><BR>Grazie<SP>mille.<BR>Team<SP>Badante-NoProblem.com<SP>";
//inserisce la tua email da utilizzare per registrazione una nuova ogni volta
var lmail = [];
lmail[0] = "mra90@eth2btc.info";
lmail[1] = "uka5u@2ether.net";
lmail[2] = "uka5u@2ether.net";

macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro +=  "TAB T=1" + "\n";
macro +=  "SET !ERRORIGNORE YES" + "\n";
macro +=  "TAB CLOSEALLOTHERS" + "\n";

//passa ogni categoria di post una a una
for (j = 0; j <= 1; j++) {
	macro +=  "CLEAR" + "\n";           // Clears the browsers cache and all cookies.
	macro +=  "TAB T=1" + "\n";
	
	macro +=  "URL GOTO=https://www.kijiji.it/pubblica-annuncio" + "\n";

	macro +=  "SET !VAR1 " + ltext[j] + "\n";
	macro +=  "SET !VAR2 " + lmail[j] + "\n";
	macro +=  "SET !VAR3 " + ltitle[j] + "\n";
	macro +=  "SET !VAR4 " + lcita[j] + "\n";

	macro +=  "TAG POS=1 TYPE=SELECT FORM=ID:syi-form ATTR=ID:category-l1 CONTENT=%436207616" + "\n";
	macro +=  "TAG POS=1 TYPE=SELECT FORM=ID:syi-form ATTR=ID:category-l2 CONTENT=%436273152" + "\n";
	//metodo 1
	//macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:syi-form ATTR=* CONTENT={{!VAR4}}" + "\n";
	//metodo 2
	
	macro +=  'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(4)>DIV:nth-of-type(2)>FORM>DIV>DIV>LABEL>INPUT" BUTTON=0' + "\n";
	macro +=  'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FORM>DIV>DIV>LABEL>INPUT" BUTTON=0' + "\n";
	macro +=  'EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(4)>DIV:nth-of-type(2)>FORM>DIV>DIV>LABEL>INPUT" KEY=8' + "\n";
	macro +=  'EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FORM>DIV>DIV>LABEL>INPUT" KEY=8' + "\n";

	macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(4)>DIV:nth-of-type(2)>FORM>DIV>DIV>LABEL>INPUT" CHARS="{{!VAR4}}"' + "\n";
	macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FORM>DIV>DIV>LABEL>INPUT" CHARS="{{!VAR4}}"' + "\n";
	macro +=  'WAIT SECONDS=1' + "\n";
	macro +=  'EVENT TYPE=MOUSEUP POINT="(469,410)"' + "\n";

	macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:syi-form ATTR=NAME:title CONTENT={{!VAR3}}" + "\n";
	macro +=  "TAG POS=1 TYPE=SELECT FORM=ID:syi-form ATTR=NAME:jobs-offers-type CONTENT=%15" + "\n";
	macro +=  "TAG POS=1 TYPE=SELECT FORM=ID:syi-form ATTR=NAME:jobs-offers-j_type CONTENT=%2" + "\n";
	macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=ID:syi-form ATTR=NAME:description CONTENT={{!VAR1}}" + "\n";
	macro +=  "TAG POS=2 TYPE=INPUT:RADIO FORM=ID:syi-form ATTR=NAME:attr_by" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:syi-form ATTR=NAME:email CONTENT={{!VAR2}}" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:syi-form ATTR=NAME:nickname CONTENT=paolo" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:URL FORM=ID:syi-form ATTR=NAME:attr_url CONTENT=https://www.badante-noproblem.com/" + "\n";
	macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:syi-form ATTR=NAME:email CONTENT={{!VAR2}}" + "\n";
    macro +=  "WAIT SECONDS=1" + "\n";
	
	macro +=  "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:syi-form ATTR=NAME:post-ad-publish" + "\n";
   if (j == 0) {
	macro +=  "TAB OPEN" + "\n";
	}
	macro +=  "TAB T=2" + "\n";
	macro +=  "URL GOTO=https://temp-mail.org/it/?email={{!VAR2}}" + "\n";
	macro +=  "TAG POS=1 TYPE=A ATTR=TXT:Conferma<SP>il<SP>tuo<SP>annuncio" + "\n";
	macro +=  "TAG POS=1 TYPE=A ATTR=TXT:Conferma<SP>l'annuncio" + "\n";
	macro +=  "TAB T=3" + "\n";
}
iimPlay(macro)
