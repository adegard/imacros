
var macro; 
macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro +=  "TAB T=1" + "\n";


for (j = 1; j <= 100; j++) {

macro +=  "TAG POS=" + j + " TYPE=BUTTON ATTR=TXT:Segui" + "\n";
//macro +=  "WAIT SECONDS=1" + "\n";

}


iimPlay(macro)

