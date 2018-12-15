function oblicz() {
  var wynik = eval(document.getElementById("cyfra1").value);
  document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
    $("#wynik").addClass("notice");
    setTimeout(function() {
      $("#wynik").removeClass("notice");
    }, 1500);
}
