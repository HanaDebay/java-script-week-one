/*
primitive Data types hold single values
1. Strings/Text
2. numbers 
    intergers
    big integer 
    decimals 
3. boolean 
    true/false

4. undefined 
5. null 
    let x = null
6. symbol 
    uniqness 

*/
let productName = "timber"//strings we put them in Quotes 
let procuctCost = 3500 
let transportIsNeede = true
let tableColor
let discount = null
console.log(procuctCost * 2)
/*
Non primitive Data type
1. Array 
        is a list off item
        [numbers]
        [2,4,2.0]
        [string]
        ["sofa","table"]
    
2. object
    in JavaScript evrything is an object 
    productDecription{
    name:"sofa"
    price:2000
    color:"blue"
    }
3. Date
4. Function
*/
let productList = ["sofa","table","cupboard"]
console.log(productList)

let diningTableObject = {
productName: "Dining Table",
quantity:2,
price:350,
totalCost:quantity * price
}

console.log(totalCost)

let paymentType = "cash"
const VAT = 0.05
const PI = 3.14


