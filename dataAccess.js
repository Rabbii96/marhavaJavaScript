const arr = [{ id: 1, name: 'mukta', address: 'mirpur 1' }]
console.log(arr[0].address)


const library = { name: 'city library', books: [{ id: 1, title: 'JavaScriptBasics', price: 3000 }, { id: 2, title: 'Python Essentials', price: 500 }] }
console.log(library.books[1])

const school = { name: 'Green High', students: [{ id: 1, name: 'Samiha' }, { id: 2, name: 'Kamal' }] }


const studentName = school.students.map(student => student.name)
console.log(studentName)

const shop = { items: [{ name: 'Pen', stock: 100 }, { name: 'notebook', stock: 50 }] }
const notebookStock = shop.items.map(item => item.stock)
console.log(notebookStock)

const notBokStore = shop.items.find(item => item.name === 'notebook').stock
console.log(notBokStore)

const movie = { title: 'Inception', director: { name: 'Nolan', age: 50 }, rating: 8.8 }
console.log(movie.director.name)

const game = {
    name: 'football', players: [{ id: 1, name: 'Lionel Messi' }, {
        id: 2, name: 'Cristiano Ronaldo'
    }]
}
console.log(game.players[0].name)

const vehical = { type: 'car', features: { color: 'red', brand: { name: 'Toyota', mpdel: 'Corolla' } } }
console.log(vehical.features.brand.name)


let x = null
x ??= 75
console.log(x)

const product = {
    name: 'Biskit'
}
const stock = product.stock ?? 0
console.log(stock)

const productDetails = {
    name: 'Biskit',
    discount: false
}
const dis = productDetails.discount || 10
console.log(dis)


const resturant = {
}
const men = resturant?.menu ?? "Menu is not Avaiable"
console.log(men)

const profile = {
    social: {

    }
}
const twi = profile?.social?.twitter ?? 'Twitter handel not avaiable'
console.log(twi)

let a = 59
let b = ++a
console.log(b)
let b1 = --a
console.log(b1)

let orange = 100;
orange /= 4
console.log(orange)

let mango = 20
mango &&= 10
console.log(mango)

let banana = 50
banana *= 4
console.log(banana)

let grapes = 19
grapes ||= 50
console.log(grapes)


let apple
apple -= 10

let price = undefined
price ||= 90
console.log(price)

let tomato = 0
tomato &&= 5
console.log(tomato)

let apple1 = 15
apple1 %= 6
console.log(apple1)