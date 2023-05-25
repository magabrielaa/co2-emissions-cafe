const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// initalize array to hold the user's order
const beverageOrder = []

// event listeners on base beverage choices
const item1 = document.querySelector("#item-1")
item1.addEventListener("click", sweetener)

const item2 = document.querySelector("#item-2")
item2.addEventListener("click", sweetener)

const item3 = document.querySelector("#item-3")
item3.addEventListener("click", sweetener)

// update sweetener menu choices
function sweetener(e) {
    selection = e.target.className
    order = document.getElementById('order')
    
    // updates order section with base beverage
    if (selection !== ""){
        const firstOrder = document.createElement('img')
        if (selection == "black-coffee"){
            firstOrder.src = "https://static.vecteezy.com/system/resources/previews/009/307/068/original/black-coffee-in-a-cup-on-transparent-background-file-png.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("coffee")
            // TODO: add counter HERE
        } else if (selection == "chocolate"){
            firstOrder.src = "https://images.pngnice.com/download/2007/Hot-Chocolate-PNG-Photo.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("hot chocolate")
            // TODO: add counter HERE
        } else if (selection == "tea"){
            firstOrder.src = "https://www.pngall.com/wp-content/uploads/2016/04/Tea-Transparent.png" 
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("tea")
            // TODO: add counter HERE
        }
    } 
    console.log("my array", beverageOrder)
    
    // render sweetener options
    const item1 = document.getElementById('item-1')
    item1.addEventListener("click", milk)
    item1.innerHTML = "Honey"
    const honey = document.createElement('img');
    honey.src = 'https://freepngimg.com/thumb/grocery/41884-1-jar-of-honey-png-file-hd.png'
    honey.classList.add("honey")
    item1.appendChild(honey);

    const item2 = document.getElementById('item-2')
    item2.addEventListener("click", milk)
    item2.innerHTML = "Stevia"
    const stevia = document.createElement('img');
    stevia.src = 'https://www.splenda.ca/wp-content/uploads/2020/04/Splenda_Stevia_Cloud_CAN_819.png'
    stevia.classList.add("stevia")
    item2.appendChild(stevia);

    const item3 = document.getElementById('item-3')
    item3.addEventListener("click", milk)
    item3.innerHTML = "Sugar cane"
    const cane = document.createElement('img');
    cane.src = 'https://cdn.shopify.com/s/files/1/0019/0447/6220/files/sugar_06d6f2b6-4709-4082-bef5-31fc9cbbc032.png?17670198977603100836'
    cane.classList.add("cane")
    item3.appendChild(cane);

}

// update type of milk menu choices
function milk(e) {
    selection = e.target.className
    console.log("my selection", selection)
    order = document.getElementById('order')

    // updates order section with sweetener
    if (selection !== ""){
        const firstOrder = document.createElement('img')
        if (selection == "honey"){
            firstOrder.src = "https://freepngimg.com/thumb/grocery/41884-1-jar-of-honey-png-file-hd.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("honey")
            // TODO: add counter HERE
        } else if (selection == "stevia"){
            firstOrder.src = "https://www.splenda.ca/wp-content/uploads/2020/04/Splenda_Stevia_Cloud_CAN_819.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("stevia")
            // TODO: add counter HERE
        } else if (selection == "cane"){
            firstOrder.src = "https://cdn.shopify.com/s/files/1/0019/0447/6220/files/sugar_06d6f2b6-4709-4082-bef5-31fc9cbbc032.png?17670198977603100836" 
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder) 
            beverageOrder.push("cane sugar")
            // TODO: add counter HERE
        } 
    }

    console.log("my array", beverageOrder)

    // render type of milk options
    const item1 = document.getElementById('item-1')
    item1.addEventListener("click", bevResult)
    item1.innerHTML = "Oat milk"
    const oat = document.createElement('img');
    oat.src = 'http://surefoodsliving.com/wp-content/uploads/2020/03/silk-plain-oatmilk.png'
    oat.classList.add("oat")
    item1.appendChild(oat);

    const item2 = document.getElementById('item-2')
    item2.addEventListener("click", bevResult)
    item2.innerHTML = "Cow milk"
    const cow = document.createElement('img');
    cow.src = 'https://images.vexels.com/media/users/3/260362/isolated/preview/7b94d8e2f9f68c8ae73bc707a69825cd-milk-carton-with-cow-cut-out.png'
    cow.classList.add("cow")
    item2.appendChild(cow);

    const item3 = document.getElementById('item-3')
    item3.addEventListener("click", bevResult)
    item3.innerHTML = "Almond milk"
    const almond = document.createElement('img');
    almond.src = 'https://cdn-icons-png.flaticon.com/512/2033/2033298.png'
    almond.classList.add("almond")
    item3.appendChild(almond);
}

// final beverage order
function bevResult(e) {
    selection = e.target.className
    console.log("my selection", selection)
    order = document.getElementById('order')
    let children = order.children
    length = children.length

    // updates order section with type of milk
    if (length <4){
        if (selection !== ""){
            const firstOrder = document.createElement('img')
            if (selection == "oat"){
                firstOrder.src = "http://surefoodsliving.com/wp-content/uploads/2020/03/silk-plain-oatmilk.png"
                firstOrder.classList.add("pic")
                order.appendChild(firstOrder)
                beverageOrder.push("oat milk")
                // TODO: add counter HERE
            } else if (selection == "cow"){
                firstOrder.src = "https://images.vexels.com/media/users/3/260362/isolated/preview/7b94d8e2f9f68c8ae73bc707a69825cd-milk-carton-with-cow-cut-out.png"
                firstOrder.classList.add("pic")
                order.appendChild(firstOrder)
                beverageOrder.push("cow milk")
                // TODO: add counter HERE
            } else if (selection == "almond"){
                firstOrder.src = "https://cdn-icons-png.flaticon.com/512/2033/2033298.png"  
                firstOrder.classList.add("pic")
                order.appendChild(firstOrder)
                beverageOrder.push("almond milk")
                // TODO: add counter HERE
            }
            // add Next button
            // TODO: update listener on Next button to lead to pop-up
            let next = document.createElement('button')
            next.innerHTML = "Next"
            next.classList.add("next")
            order.appendChild(next)
            next.addEventListener("click", food)
        }
        console.log("my array", beverageOrder)

    } 
}

// update menu to display food choices
function food() {
    const modal_container = document.getElementById("modal_container");
    modal_container.classList.remove("hide");
    modal_container.classList.add("modal-container");
    pTag = document.createElement("p");
    pTag.innerHTML = warning_messages["beverage"];
    modal_container.appendChild(pTag);


    const close = document.getElementById("close");
    close.addEventListener("click", () => {
        modal_container.classList.add("hide");
        subtractBeverageFromWallet();
    });
    // closeButton();

    menu = document.getElementById('menu-title')
    menu.innerHTML = "Select your food"

    order = document.getElementById('order')
    let children = order.children
    console.log("CHILDREN", children[4])
    children[4].remove()

    // render food options
    const item1 = document.getElementById('item-1')
    item1.addEventListener("click", addFood)
    item1.innerHTML = "Bagel and Salmon"
    const bagel = document.createElement('img');
    bagel.src = 'https://cutewallpaper.org/24/bagel-png/full-bagel-breakfast-and-lunch-menus-nyack-hot-bagels.png'
    bagel.classList.add("bagel")
    item1.appendChild(bagel);

    const item2 = document.getElementById('item-2')
    item2.addEventListener("click", addFood)
    item2.innerHTML = "Roast beef sandwich"
    const beef = document.createElement('img');
    beef.src = 'https://countrystyle.com/wp-content/uploads/2016/11/LUNCH-CIABATTAroastbeef.png'
    beef.classList.add("beef")
    item2.appendChild(beef);

    const item3 = document.getElementById('item-3')
    item3.addEventListener("click", addFood)
    item3.innerHTML = "Grilled cheese"
    const cheese = document.createElement('img');
    cheese.src = 'https://freepngimg.com/download/sandwich/159351-grilled-cheese-sandwich-free-png-hq.png'
    cheese.classList.add("cheese")
    item3.appendChild(cheese);
}

// add food selection to order section
function addFood(e) {
    selection = e.target.className
    console.log("my selection", selection)
    order = document.getElementById('order')
    let children = order.children
    length = children.length
    console.log("-------", length)

    if (length <5){
        if (selection !== ""){
            const secondOrder = document.createElement('img')
            if (selection == "bagel"){
                secondOrder.src = "https://cutewallpaper.org/24/bagel-png/full-bagel-breakfast-and-lunch-menus-nyack-hot-bagels.png"
                secondOrder.classList.add("pic")
                order.appendChild(secondOrder)
                beverageOrder.push("bagel sandwich")
                // TODO: add counter HERE
            } else if (selection == "beef"){
                secondOrder.src = "https://countrystyle.com/wp-content/uploads/2016/11/LUNCH-CIABATTAroastbeef.png"
                secondOrder.classList.add("pic")
                order.appendChild(secondOrder)
                beverageOrder.push("roast beef sandwich")
                // TODO: add counter HERE
            } else if (selection == "cheese"){
                secondOrder.src = "https://freepngimg.com/download/sandwich/159351-grilled-cheese-sandwich-free-png-hq.png" 
                secondOrder.classList.add("pic")
                order.appendChild(secondOrder)
                beverageOrder.push("grilled cheese")
                // TODO: add counter HERE
            }
        } 
        // add Next button
        // TODO: update listener on Next button to lead to pop-up
        let next = document.createElement('button')
        next.innerHTML = "Next"
        next.classList.add("next")
        order.appendChild(next)
        next.addEventListener("click", dessert)
    }
    console.log("my array", beverageOrder)
        // render food options
        const item1 = document.getElementById('item-1')
        item1.innerHTML = "Bagel and Salmon"
        const bagel = document.createElement('img');
        bagel.src = 'https://cutewallpaper.org/24/bagel-png/full-bagel-breakfast-and-lunch-menus-nyack-hot-bagels.png'
        bagel.classList.add("bagel")
        item1.appendChild(bagel);
    
        const item2 = document.getElementById('item-2')
        item2.innerHTML = "Roast beef sandwich"
        const beef = document.createElement('img');
        beef.src = 'https://countrystyle.com/wp-content/uploads/2016/11/LUNCH-CIABATTAroastbeef.png'
        beef.classList.add("beef")
        item2.appendChild(beef);
    
        const item3 = document.getElementById('item-3')
        item3.innerHTML = "Grilled cheese"
        const cheese = document.createElement('img');
        cheese.src = 'https://freepngimg.com/download/sandwich/159351-grilled-cheese-sandwich-free-png-hq.png'
        cheese.classList.add("cheese")
        item3.appendChild(cheese);
}


// update menu to display dessert choices
function dessert() {
    const modal_container = document.getElementById("modal_container");
    modal_container.classList.remove("hide");
    modal_container.classList.add("modal-container");

    const close = document.getElementById("close");
    close.addEventListener("click", () => {
        modal_container.classList.add("hide");
        subtractFoodFromWallet();
    });
    // closeButton();


    menu = document.getElementById('menu-title')
    menu.innerHTML = "Select your dessert"

    order = document.getElementById('order')
    let children = order.children
    children[5].remove()

    // render dessert options
    const item1 = document.getElementById('item-1')
    item1.addEventListener("click", addDessert)
    item1.innerHTML = "Brownie"
    const brownie = document.createElement('img');
    brownie.src = 'https://live-aroma-joes-2020.imgix.net/wp-content/uploads/2021/01/Hondurian-Chocolate-Brownie.png?q=85&fit=crop&crop=faces&auto=format'
    brownie.classList.add("brownie")
    item1.appendChild(brownie);

    const item2 = document.getElementById('item-2')
    item2.addEventListener("click", addDessert)
    item2.innerHTML = "Donut"
    const donut = document.createElement('img');
    donut.src = 'https://www.pngplay.com/wp-content/uploads/2/Pink-Donut-PNG-HD-Quality.png'
    donut.classList.add("donut")
    item2.appendChild(donut);

    const item3 = document.getElementById('item-3')
    item3.addEventListener("click", addDessert)
    item3.innerHTML = "Chocolate cheesecake"
    const cheesecake = document.createElement('img');
    cheesecake.src = 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w'
    cheesecake.classList.add("cheesecake")
    item3.appendChild(cheesecake);
}

// add dessert selection to order section
function addDessert(e) {
    selection = e.target.className
    order = document.getElementById('order')
    let children = order.children
    length = children.length

    if (length <6){
        if (selection !== ""){
            const thirdOrder = document.createElement('img')
            if (selection == "brownie"){
                thirdOrder.src = "https://live-aroma-joes-2020.imgix.net/wp-content/uploads/2021/01/Hondurian-Chocolate-Brownie.png?q=85&fit=crop&crop=faces&auto=format"
                thirdOrder.classList.add("pic")
                order.appendChild(thirdOrder)
                beverageOrder.push("brownie")
                // TODO: add counter HERE
            } else if (selection == "donut"){
                thirdOrder.src = "https://www.pngplay.com/wp-content/uploads/2/Pink-Donut-PNG-HD-Quality.png"
                thirdOrder.classList.add("pic")
                order.appendChild(thirdOrder)
                beverageOrder.push("donut")
                // TODO: add counter HERE
            } else if (selection == "cheesecake"){
                thirdOrder.src = "https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w" 
                thirdOrder.classList.add("pic")
                order.appendChild(thirdOrder)
                beverageOrder.push("chocolate cheesecake")
                // TODO: add counter HERE
            }
        } 
        // add Next button
        // TODO: update listener on Next button to lead to pop-up
        let next = document.createElement('button')
        next.innerHTML = "Next"
        next.classList.add("next")
        order.appendChild(next)
        next.addEventListener("click", finalNext())
        
    }
    
    console.log("my array", beverageOrder)

    // render dessert options
    const item1 = document.getElementById('item-1')
    item1.innerHTML = "Brownie"
    const brownie = document.createElement('img');
    brownie.src = 'https://live-aroma-joes-2020.imgix.net/wp-content/uploads/2021/01/Hondurian-Chocolate-Brownie.png?q=85&fit=crop&crop=faces&auto=format'
    brownie.classList.add("brownie")
    item1.appendChild(brownie);

    const item2 = document.getElementById('item-2')
    item2.innerHTML = "Donut"
    const donut = document.createElement('img');
    donut.src = 'https://www.pngplay.com/wp-content/uploads/2/Pink-Donut-PNG-HD-Quality.png'
    donut.classList.add("donut")
    item2.appendChild(donut);

    const item3 = document.getElementById('item-3')
    item3.innerHTML = "Chocolate cheesecake"
    const cheesecake = document.createElement('img');
    cheesecake.src = 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w'
    cheesecake.classList.add("cheesecake")
    item3.appendChild(cheesecake); 
}



function finalNext () {
    const modal_container = document.getElementById("modal_container");
    modal_container.classList.remove("hide");
    modal_container.classList.add("modal-container");

    const close = document.getElementById("close");
    close.addEventListener("click", () => {
        modal_container.classList.add("hide");
        subtractDessertFromWallet();
    });
    // closeButton();
}




// Start Order Redirect Button
function enterOrderPage () {
    console.log("Leaving home page, and redirecting to order page.");
    window.location.href = "index.html";
}


// Subtract from Wallet Functionality
var wallet = 2000;

// document.getElementById('co2-deplete-wallet-button').addEventListener('click', function () {
//     subtractWallet();
// });


const warning_messages = {
    "beverage": "Did you know almond milk uses more fresh water than oat milk (one liter of almond milk uses approximately 7x more fresh water than one liter of oatmilk)? <br> <br> These two might seem similar but they have different effects on the environment.  <br> <br> Also, coffee is responsible for 1/3 of land use and considering total production usage, approximately 39 gallons of water are needed to make one single cup of coffee (coffee has the biggest carbon footprint per 1000kcal, followed by beef)!",
    "food": "As much as you love cheese, it accounts for 1/3 of fresh water usage per 1000 Kcal!. Farmed fish is the top product responsible for fresh water usage in litres per 1000 Kcal of food. Healthier doesn't always mean more eco-friendly. <br> <br> Animal based foods produce around 50% more emissions than plant based foods like potatoes, apples, groundnuts.",
    "dessert": "Are you a fan of chocolate? Did you know that dark chocolate has the largest carbon footprint in terms of nutritional values (per 100g protein)? <br> <br> More than 50% of the emissions via land use are shared by beef and dark chocolate. It's a huge contributor in terms of land usage! <br> In general, emissions via transport are uniform across different foods. Cane sugar, however, has the highest share!"
}


const co2Emissions = {
    "coffee": 282, 
    "water": 0, 
    "tea": 242, 
    "hot chocolate": 1091, 
    "honey": 17,
    "stevia": 2.7, 
    "cane sugar": 3, 
    "oat milk": 71, 
    "almond milk": 113,
    "cow milk": 352, 
    "bagel sandwich": 1181, 
    "grilled cheese": 361, 
    "roast beef sandwich": 7294, 
    "chocolate cheesecake": 658,
    "brownie": 125, 
    "donut": 386
};


function subtractBeverageFromWallet () {
    console.log(co2Emissions);
    console.log(beverageOrder);
    beverageOrder.forEach(foodItem => {
        console.log(co2Emissions[foodItem]);
        wallet = wallet - co2Emissions[foodItem];
        var results = document.getElementById('co2counter');
        results.innerHTML = 'eCO<sub>2</sub> Wallet: ' + wallet;
    })
};


function subtractFoodFromWallet () {
    console.log("###LAST ELEMENT", beverageOrder.slice(-1));
    console.log("WALLET 0: ", wallet);
    otherFoodItem = beverageOrder.slice(-1);
    console.log(co2Emissions[otherFoodItem]);
    console.log("else beverageOrder: ", beverageOrder);
    console.log("WALLET 1: ", wallet);
    wallet -= co2Emissions[otherFoodItem];
    console.log("WALLET 2: ", wallet);
    var results = document.getElementById('co2counter');
    results.innerHTML = 'eCO<sub>2</sub> Wallet: ' + wallet;
};


function subtractDessertFromWallet () {
    console.log("###LAST ELEMENT", beverageOrder.slice(-1));
    console.log("WALLET 0: ", wallet);
    otherFoodItem = beverageOrder.slice(-1);
    console.log(co2Emissions[otherFoodItem]);
    console.log("else beverageOrder: ", beverageOrder);
    console.log("WALLET 1: ", wallet);
    wallet -= co2Emissions[otherFoodItem];
    console.log("WALLET 2: ", wallet);
    var results = document.getElementById('co2counter');
    results.innerHTML = 'eCO<sub>2</sub> Wallet: ' + wallet;
};


// function subtractWallet () {
//     // fetch("./data/co2_emissions.json")
//     // .then(response => {
//     //     return response.json();
//     // })
//     // .then(data => console.log(data));
//     console.log(co2Emissions);
//     console.log(beverageOrder);
//     if (beverageOrder.length === 3) {
//         beverageOrder.forEach(foodItem => {
//             console.log(co2Emissions[foodItem]);
//             wallet = wallet - co2Emissions[foodItem];
//             var results = document.getElementById('co2counter');
//             results.innerHTML = 'eCO<sub>2</sub> Wallet: ' + wallet;
//         })
//     } else {
//         console.log("###LAST ELEMENT", beverageOrder.slice(-1));
//         console.log("WALLET 0: ", wallet);
//         otherFoodItem = beverageOrder.slice(-1);
//         console.log(co2Emissions[otherFoodItem]);
//         console.log("else beverageOrder: ", beverageOrder);
//         console.log("WALLET 1: ", wallet);
//         wallet -= co2Emissions[otherFoodItem];
//         console.log("WALLET 2: ", wallet);
//         var results = document.getElementById('co2counter');
//         results.innerHTML = 'eCO<sub>2</sub> Wallet: ' + wallet;
//     }
    
//     // });
// };


// Results Redirect Button
function enterResultsPage () {
    console.log("Leaving order page, and redirecting to results page.");
    window.location.href = "results.html";
}



// NEW CODE FOR POPUP
// load in data
// fetch("./data/co2_emissions.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));


const open = document.getElementById("open");
// const modal_container = document.getElementById("modal_container");
// const close = document.getElementById("close");

// open.addEventListener("click", () => {
//     modal_container.classList.remove("hide");
//     modal_container.classList.add("modal-container");
// });

// function closeButton() {
//     console.log("TEST")
//     close.addEventListener("click", () => {
//     modal_container.classList.add("hide");
// });
// }