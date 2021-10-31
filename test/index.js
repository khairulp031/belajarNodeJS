console.log('script')
let tinggiGedung = 13;
console.log('tinggiGedung', tinggiGedung, typeof tinggiGedung)

//let, const 

/*
baris tidak akan dieksekusi
*/

/*
tinggiGedung = Math.floor(parseFloat(tinggiGedung))
console.log('tinggiGedung', tinggiGedung, typeof tinggiGedung)

tinggiGedung = new Date()
console.log('tinggiGedung', tinggiGedung, typeof tinggiGedung)
*/

let panjangGedung = 20, lebarGedung = 30;

let volume = tinggiGedung * panjangGedung * lebarGedung
console.log('volume', volume)

let a = 20, b = 3;
console.log(a + b)

if (a >= 20) {
    console.log('a lebih kecil dari 20 ')
} else {
    console.log('a lebih besar dari atau sama dengan  20 ')
}

let x = 1, y = '1';

//=== akan mengecek tipe datanya
if (x === y) {
    console.log('x === y ')
} else {
    console.log('x !== y')
}
//== tidak akan mengecek tipe datanya
if (x == y) {
    console.log('x == y ')
} else {
    console.log('x != y')
}

//ternary
//cognitive complexcity
let xx = x >= 1 ?
    'x lebih besar dari atau sama dengan satu' :
    'x lebih kecil dari satu'
console.log('xx', xx)


if (x >= 1) {
    xx = 'x lebih besar dari atau sama dengan satu'
} else {
    xx = 'x lebih kecil dari satu'
}
console.log('xx', xx)

for (let jarak = 10; jarak < 100;) {
    //console.log('jarak', jarak)
    // jarak = 99 + 1 = 100
    jarak = jarak + 10
}



let jarak = 10;
while (jarak < 100) {
    //console.log('pakai while, jarak', jarak)
    // jarak = 99 + 1 = 100
    jarak = jarak + 10
}

jarak = 10;
do {
    //console.log('pakai do while, jarak', jarak)
    // jarak = 99 + 1 = 100
    jarak = jarak + 10
} while (jarak < 100)

let volume_;
function menghitungVolume(tinggiGedung, lebarGedung, panjangGedung) {
    let volume_ = tinggiGedung * lebarGedung * panjangGedung;
    return volume_
}
let v = menghitungVolume(100, 200, 300)
console.log('v', v)

console.log('volume_', volume_)


let object1 = { a: 1 };//tipe object
//let object2 = object1;
let object2 = Object.assign({}, object1);

object2.a = 2

console.log('object1:', object1,
    'object2:', object2,
    'object1 === object2', object1 === object2)