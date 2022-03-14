// ----------Problem 01-----------


function totalPrice(computer,watch,coffee){
    if (typeof computer =="number" && typeof watch == "number" && typeof coffee == "number") {
        var total = computer * 1000 + watch * 260 + coffee *50;
        console.log("Your Total is "+ total)
    }
    else{
        console.log("Vai age kinen")
    }
}
// totalPrice(2,5,0)
// totalPrice(1,"hehe",1)







// -----------problem 02-----------


function productSearch(search) {

    var products = [
        {
            id: 1,
            title: "laptop",
            price: 567,
            description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 2,
            title: "Mobile",
            price: 367,
            description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 3,
            title: "Watch",
            price: 180,
            description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 4,
            title: "Coffee",
            price: 40,
            description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
    
    ];
    if (search.toLowerCase() == "laptop") {
        console.log(products[0]);
    } 
    else if (search.toLowerCase() == "mobile") {
        console.log(products[1]);
    }
     else if (search.toLowerCase() == "watch") {
        console.log(products[2]);
    } 
    else if (search.toLowerCase() == "coffee") {
        console.log(products[3]);
    } 
    else {
       console.log("We do not find this item. Please search for the valid items")
    }
    
}

// productSearch("asff")




// --------Problem 03---------------


function deposit(year) {
    if (year %100 !=0 && year %4 ==0 || year %400 ==0) {
        totalDeposit = 366 * 10
    }
    else {
        totalDeposit = 365 * 10
    }
    console.log("Your total desposit is " + totalDeposit)
}


// deposit(2012)