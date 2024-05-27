async function getdata(){
    let x = await fetch("http://localhost:3000/")
    var y = await x.json()
    return y
    // console.log(y)
}
async function main(){
    
    let data=await getdata()
    console.log(`car name is ${data.Name}\n
car brand is ${data.brand}\n
car year is ${data.year}\n
car perhourrate is ${data.perhourrate}\n
car seats is ${data.seats}\n`)
}
main()