var macro, i, j; 
var mydelay;
 
macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro +=  "TAB T=1" + "\n";
macro +=  "URL GOTO=https://www.linkedin.com/mynetwork/" + "\n";

for (i = 0; i <= 10; i++) {
	
	for (j = 0; j <= 10; j++) {

		macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Collegati*" + "\n";
		
		mydelay=Math.round(3*Math.random());
		iimDisplay("Random wait t="+mydelay)
		macro +=  "WAIT SECONDS=" + mydelay  + "\n";
	}
	macro +=  "URL GOTO=https://www.linkedin.com/mynetwork/" + "\n";
}
iimPlay(macro)