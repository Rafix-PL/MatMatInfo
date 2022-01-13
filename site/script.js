let info = new Array();
info[0]="Procent x z liczby y jest równy procentowi y z liczby x. Na przykład 10% z 50 = 50% z 10. ";
info[1]="Jeden radian jest równy 180 stopniom (π=180°).";
info[2]="Kwadrat i prostokąt to jedyne wielokąty płaskie, które nie mogą mieć kąta ostrego.";
info[3]="W pierwszej ćwiartce same plusy. W drugiej sinus. W trzeciej tangens i cotangens, a w czwartej cosinus. ";
info[4]="Ze wszystkich figur, które mają jednakowy obwód, największe pole ma koło.";
info[5]="Nie da się zapisać zera rzymskiego.";
info[6]="Wielościany foremne to bryły, których wszystkie ściany to przystające wielokąty foremne.";
info[7]="Liczba pi jest niewymierna.";
info[8]="Jedna godzina ma 3600 sekund.";
info[9]="Największa dwucyfrowa liczab pierwsza to 97.";
info[10]="Trójkąt może być równoboczny, rozwartokątny, równoramienny, ostrokątny lub prostokątny.";

function getMessage() {
    var output="";
    output = info[Math.floor(Math.random() * info.length)];
    document.getElementById("val").innerHTML = output;
    document.getElementById("frame").style.display = "block";
    document.getElementsByTagName("button").style.margin = "5% 0 0 0";
}

getMessage();
 

