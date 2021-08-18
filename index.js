console.log('hola mundo desde codigo')

let r1 = 20

console.log(r1)

r1 = 30

console.log(r1)

let j1 = 40

console.log(r1 + j1)

saludo()

function saludo() {
    console.log('saludo')
}

saludara(' Carlos')

function saludara(alguien) {
    console.log('hola ' + alguien)
}

for (i = 0; i < 10; i++) {
    console.log(i)
}

num = 20
while (num > 10) {
    num--
    console.log(num)
}

if (1 == 1) { console.log('hola') }


key = 5
switch (key) {
    case 5:
        console.log('es 5')
        break;
    case 6:
        console.log('es 6')
        break;

    default:
        break;
}


a = [4,5,6,-2,30,5,-3,-12]

// contar positivos y negativos

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

/* neg = 0
pos = 0
for (let index = 0; index < a.length; index++) {
    if (a[index]<0) {
        neg++;
    } else {
        pos++;
    }

}
console.log(neg);
console.log(pos); */

// acumular posiivos y negativos
// pos 50   neg  -17

let pos = 0;
let neg = 0;

for (let i = 0; i < a.length; i++) {
    if(a[i] >= 0){
        pos += a[i]
    }else{
        neg += a[i]
    }

}
console.log("positivos= "  + pos);
console.log("negativos= "  + neg);

// contar positivos, negativos, suma pos y suma neg
// en una variable













































