var wyrazenie="";
var nowe=true;
function wprowadz (wartosc)
{
	var wyswietlacz=document.kalkulator.wyswietlacz;
	if (nowe){
		nowe = !nowe;
		wyswietlacz.value="";
	}
	wyswietlacz.value += wartosc;
	wyrazenie += wartosc;
}
function dzialanie (wartosc)
{
	var wyswietlacz = document.kalkulator.wyswietlacz;
	wyswietlacz.value ="";
	wyrazenie += wartosc;
}
function oblicz(){
	var wyswietlacz = document.kalkulator.wyswietlacz;
	if (wyrazenie !=""){
		wyswietlacz.value = eval(wyrazenie);
		wyrazenie = wyswietlacz.value;
		nowe = true;
		
	}
}
function zeruj(){
	wyrazenie = "";
	document.kalkulator.wyswietlacz.value="";
}
function kwadrat(){
	if (wyrazenie != ""){
		document.kalkulator.wyswietlacz.value= wyrazenie * wyrazenie;
		wyrazenie = document.kalkulator.wyswietlacz.value;
		
	}
}