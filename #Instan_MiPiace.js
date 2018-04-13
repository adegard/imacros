
var macro; 
macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro +=  "TAB T=1" + "\n";

for (i = 1; i <= 20; i++) {
		for (j = 1; j <= 3; j++) {
		macro +=  "TAG POS=" + j + " TYPE=SPAN ATTR=TXT:Mi<SP>piace" + "\n";
		//macro +=  "WAIT SECONDS={{!VAR1}}" + "\n";
		macro +=  "WAIT SECONDS=1" + "\n";
		}
macro +=  "WAIT SECONDS=1" + "\n";
}

iimPlay(macro)

