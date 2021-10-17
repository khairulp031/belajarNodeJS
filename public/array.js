let gedungObject = {
    tinggiGedung: 20,
    lebarGedung: 30,
    panjangGedung: 40,
}

console.log('gedungObject', gedungObject)

gedungObject.tinggiGedung = 100
console.log('gedungObject', gedungObject)
gedungObject['tinggiGedung'] = 200
console.log('gedungObject', gedungObject)

console.log(Object.keys(gedungObject))


let tinggiGedungArray = [100, 200, 300, 400]
//                         0,   1,   2,   3
console.log(tinggiGedungArray)

tinggiGedungArray[0] = 1000
console.log(tinggiGedungArray)

tinggiGedungArray.forEach(
    function (tinggi, index) {
        console.log(index, tinggi)
    }
)
let index200 = tinggiGedungArray.findIndex(
    function (tinggi) {
        return tinggi == 2000
    }
)
console.log('index200', index200)

let total = tinggiGedungArray.reduce (
    function (aggr,current) {
        aggr = aggr + current
        return aggr
    }, 0
)
console.log('total', total)