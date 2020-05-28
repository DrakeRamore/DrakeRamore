var n;
n = prompt("Enter a number, please");

while(isNaN(n)) {
    n = prompt("you entered not a number!");
}

if (n % 2 == 0) {
    alert("you entered an even number");
}
else {
    alert("you entered an odd number");
}