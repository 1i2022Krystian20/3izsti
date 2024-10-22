let imie = prompt("Podaj swoje imię:");
let liczba1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
let liczba2 = parseFloat(prompt("Podaj drugą liczbę:"));
let dzialanie = prompt("Podaj działanie które chcesz wpisać");

if (dzialanie === "=") {
    wynik = liczba1 + liczba2;
} else if (dzialanie === "-") {
    wynik = liczba1 - liczba2;
} else if (dzialanie === "*") {
    wynik = liczba1 * liczba2;
} else if (dzialanie === "/") {
    if (liczba2 !== 0) {
        wynik = liczba1 / liczba2;
    } else {
        alert("Nie można dzielić przez zero!");
    }
} else {
    alert("Nie znam takiego działania!");
}
