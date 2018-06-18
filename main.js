function oblicz() {
  var dodawanie = /((|-)[0-9]+(\.[0-9]+|))\+((|-)[0-9]+(\.[0-9]+|))/gm
  var odejmowanie = /((|-)[0-9]+(\.[0-9]+|))\-((|-)[0-9]+(\.[0-9]+|))/gm
  var mnozenie = /((|-)[0-9]+(\.[0-9]+|))\*((|-)[0-9]+(\.[0-9]+|))/gm
  var dzielenie = /((|-)[0-9]+(\.[0-9]+|))\/((|-)[0-9]+(\.[0-9]+|))/gm
  var pierwiastek = /sqrt\(([0-9]+(\.[0-9]+|))\)/gm
  var potega = /((|-)[0-9]+(\.[0-9]+|))\^((|-)[0-9]+(\.[0-9]+|))/gm

  var pierwsza_liczba = /^((|-)[0-9]+(\.[0-9]+|))/gm
  var d_l_dodawanie = /\+((|-)[0-9]+(\.[0-9]+|))/gm
  var d_l_odejmowanie = /\-((|-)[0-9]+(\.[0-9]+|))/gm
  var d_l_mnozenie = /\*((|-)[0-9]+(\.[0-9]+|))/gm
  var d_l_dzielenie = /\/((|-)[0-9]+(\.[0-9]+|))/gm
  var d_l_potega = /\^((|-)[0-9]+(\.[0-9]+|))/gm

  $("#cyfra1").removeClass("blad");

  var dzialanie = document.getElementById("cyfra1").value;
  dzialanie = dzialanie.replace(/\s+/gi,"");
  if (dodawanie.test(dzialanie)) {
    var liczba1 = dzialanie.match(pierwsza_liczba);
    var liczba2 = dzialanie.match(d_l_dodawanie);
    liczba2 = liczba2.toString().replace("+","");
    liczba2 = parseFloat(liczba2);
    var wynik = +liczba1 + +liczba2;
    wynik = wynik.toFixed(5);
    wynik = wynik.replace(".00000","");
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
  } else if (odejmowanie.test(dzialanie)) {
    var dzialanie = document.getElementById("cyfra1").value;
    dzialanie = dzialanie.replace(/\s+/gi,"");
    var liczba1 = dzialanie.match(pierwsza_liczba);
    var liczba2 = dzialanie.match(d_l_odejmowanie);
    liczba2 = liczba2.toString().replace("-","");
    liczba2 = parseFloat(liczba2);
    var wynik = liczba1 - liczba2;
    wynik = wynik.toFixed(5);
    wynik = wynik.replace(".00000","");
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
  } else if (mnozenie.test(dzialanie)) {
    var dzialanie = document.getElementById("cyfra1").value;
    dzialanie = dzialanie.replace(/\s+/gi,"");
    var liczba1 = dzialanie.match(pierwsza_liczba);
    var liczba2 = dzialanie.match(d_l_mnozenie);
    liczba2 = liczba2.toString().replace("*","");
    liczba2 = parseFloat(liczba2);
    var wynik = liczba1 * liczba2;
    wynik = wynik.toFixed(5);
    wynik = wynik.replace(".00000","");
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
  } else if (dzielenie.test(dzialanie)) {
    var dzialanie = document.getElementById("cyfra1").value;
    dzialanie = dzialanie.replace(/\s+/gi,"");
    var liczba1 = dzialanie.match(pierwsza_liczba);
    var liczba2 = dzialanie.match(d_l_dzielenie);
    liczba2 = liczba2.toString().replace("/","");
    liczba2 = parseFloat(liczba2);
    var wynik = liczba1 / liczba2;
    wynik = wynik.toFixed(5);
    wynik = wynik.replace(".00000","");
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
  } else if (pierwiastek.test(dzialanie)) {
    var dzialanie = document.getElementById("cyfra1").value;
    var liczba = dzialanie.replace("sqrt(","");
    liczba = liczba.replace(")","");
    liczba = parseFloat(liczba);
    var wynik = Math.sqrt(liczba);
    wynik = wynik.toFixed(5);
    wynik = wynik.replace(".00000","");
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
  } else if (potega.test(dzialanie)) {
    var dzialanie = document.getElementById("cyfra1").value;
    dzialanie = dzialanie.replace(/\s+/gi,"");
    var liczba1 = dzialanie.match(pierwsza_liczba);
    var liczba2 = dzialanie.match(d_l_potega);
    liczba2 = liczba2.toString().replace("^","");
    liczba2 = parseFloat(liczba2);
    var wynik = Math.pow(liczba1, liczba2);
    wynik = wynik.toFixed(5);
    wynik = wynik.replace(".00000","");
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
  } else {
    $("#cyfra1").addClass("blad");
    document.getElementById("wynik").innerHTML = "Błąd";
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
  }
}
