console.log("hello world");
a = 120;
a = 30;
a = a + a;
console.log(a);

b = 123;

if (b == 123){
    c = 1234;
}
else{
    c = 4321;
}

console.log(c);

d = 4;

switch(d){
    case 1:
        console.log("d vale 1");
    break;
    case 2:
        console.log("d vale 2");
    break;
    default:
        console.log("d é diferente de 1 ou 2")
    break;
}

document.getElementById("botao").onclick = function () {
    let primeiro = document.getElementById("primeironumero");
    let segundo = document.getElementById("segundonumero");
    const sb = document.getElementById("select");
    const index = sb.selectedIndex;
    var output;
    if (index == 0){
        output = (parseFloat(primeiro.value) + parseFloat(segundo.value));
    }
    else if (index == 1){
        output = (parseFloat(primeiro.value) - parseFloat(segundo.value));
    }
    else if (index == 2){
        output = (parseFloat(primeiro.value) * parseFloat(segundo.value));
    }
    else if (index == 3){
        output = (parseFloat(primeiro.value) / parseFloat(segundo.value));
    }
    console.log(output);
    document.getElementById('output').innerHTML = +output;
};

