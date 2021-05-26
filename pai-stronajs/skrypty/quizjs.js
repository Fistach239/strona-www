/* encoding="UTF-8" */
var dane=prompt("Podaj swoje imię i nazwisko","Wiktor Fogielman"); 

 

alert("Życzę miłego dnia i dobrze rozwiązywanego testu "); 

 

alert("test rozwiązuje: "+""+dane); 
function wylicz() 
  
{ 

 

var punkty, punkty=0 

 

if(document.pytanie1.odpowiedz[0].checked) {punkty=punkty+1} 

 

if(document.pytanie2.odpowiedz[0].checked) {punkty=punkty+1} 

 

if(document.pytanie3.odpowiedz[0].checked) {punkty = punkty + 1}

 
 
if(document.pytanie4.wstaw1.value=="parseInt()") {punkty = punkty + 2}

 

if(document.pytanie5.odpowiedz[0].checked) {punkty = punkty + 1}
if (document.pytanie5.odpowiedz[3].checked) {punkty = punkty + 1}
if(document.pytanie6.odpowiedz[0].checked) {punkty=punkty+1}
if(document.pytanie7.wstaw2.value=="document.write()") {punkty=punkty+2}
if(document.pytanie8.wstaw3.value=="var zmienna=prompt()") {punkty=punkty+2}
wyniki.punkty.value=punkty*1; 

 

var ocena

 

if(punkty<=2) {ocena="niedostateczny"} 

 

if(punkty>2 && punkty<5) {ocena="dopuszczający"} 

 

if(punkty>=5 && punkty<7) {ocena="dostateczny"} 

 

if(punkty>=7 && punkty<9) {ocena="dobry"} 
if(punkty>=9){ocena="bardzo dobry"}

 

wyniki.LUPA.value=ocena; 

 

alert("twoja liczba puntów wynosi:  \n"+ punkty+" \na\n Twoja ocena to:  "+ ocena); 

 

} 