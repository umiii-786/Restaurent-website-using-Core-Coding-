

let Foods = [{
    id: 1,
    type: "Fish",
    img: "./Foodimages/fish.jpeg",
    name: "Special Fish Roll",
    price: "122$"
},
{
    id: 2,
    type: "Fish",
    img: "./Foodimages/fish1.jpg",
    name: "chilli Fish Wing",
    price: "150$"
},
{
    id: 3,
    type: "Fish",
    img: "./Foodimages/fish2.jpg",
    name: "Fish Karahi",
    price: "200$"
},
{
    id: 4,
    type: "FastFood",
    img: "./Foodimages/zinger.jpg",
    name: "Special Zinger",

    price: "50$"
},
{
    id: 5,
    type: "FastFood",
    img: "./Foodimages/zingerroll.jpg",
    name: "Zinger chesse roll",
    price: "20$"
},


{
    id: 6,
    type: "FastFood",
    img: "./Foodimages/curlypizza.jpg",
    name: "special white pizza",
    price: "150$"
},

{
    id: 7,
    type: "FastFood",
    img: "./Foodimages/sandwich.jpg",
    name: "Sandwich",
    price: "20$"
},
{
    id: 8,
    type: "FastFood",
    img: "./Foodimages/fries.jpg",
    name: "Fries",
    price: "10$"
},
{
    id: 9,
    type: "Karahi",
    img: "./Foodimages/karahi1.jpg",
    name: "Brown-Chicken",
    price: "130$"
},

{
    id: 10,
    type: "Karahi",
    img: "./Foodimages/whitekarahi.jpg",
    name: "White-Chicken",
    price: "130$"
},
{
    id: 11,
    type: "Karahi",
    img: "./Foodimages/muttonkarahi.jpg",
    name: "Brown Mutton",
    price: "230$"
},
{
    id: 12,
    type: "Karahi",
    img: "./Foodimages/whitemutton.jpg",
    name: "White Mutton",
    price: "230$"
},

{
    id: 13,
    type: "Icecream",
    img: "./Foodimages/specialcup.jpg",
    name: "Special Mix Icecream",
    price: "30$"
},
{
    id: 14,
    type: "Icecream",
    img: "./Foodimages/Cones.jpg",
    name: "All Fantastic Cones",
    price: "30$"
},
{
    id: 15,
    type: "Icecream",
    img: "./Foodimages/malaiicecream.jpg",
    name: "Special Mix Icecream",
    price: "30$"
}
]





let sheffs = [

    {
        id: 1,
        image: "./Foodimages/sheff1.png",
        name: "Muhammad Umair",
        itemname: "All Karachi Expert"

    },
    {
        id: 2,
        image: "./Foodimages/sheff2.png",
        name: "Muhammad Uzair",
        itemname: "Fast Food Expert"

    },
    {
        id: 3,
        image: "./Foodimages/sheff3.png",
        name: "Muhammad Iqbal",
        itemname: "Roti and Parata Maker"
    }
]



const showsheff = () => {
    let sheffsdiv = document.getElementsByClassName('sheffs')[0];
    sheffs.forEach((sheff) => {
        sheffsdiv.innerHTML += ` <div class="cardsheff" data-aos="flip-right">
            <div class="img-bx">
                <img src="${sheff.image}" alt="img" />
            </div>
            <div class="content">
                <div class="detail">
                    <h2>${sheff.name}<br /><span>${sheff.itemname}</span></h2>
                    <ul class="sci">
                        <li>
                            <a href="#"><img src="./Foodimages/linkedin.png"></a>
                        </li>
                        <li>
                            <a href="#"><img src="./Foodimages/facebook.png"></a>
                        </li>
                        <li>
                            <a href="#"><img src="./Foodimages/youtube.png"</a>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
    `
    })
}


let FoodContainer = document.getElementsByClassName('Foods')[0];
let cartdiv = document.getElementById('cartdiv');
document.body.onload = () => {
    document.getElementById("all").click();
    showsheff();
    additem("All")
}

function showCartItem(property) {
    let container = document.querySelector('.container')
    if (property == "Block") {
        cart.style.right = "0px"
        container.style.overflow = "visible"
    }
    else {

        cart.style.right = "-270px"
        container.style.overflow = "hidden"

    }
}

const showItems = (e) => {
    let btn = e.innerText
    additem(btn);
}
function additem(category) {
    for (let i = 0; i < 5; i++) {
        let Menubutton = document.getElementsByClassName("Menubuttons")[i]
        if (Menubutton.innerText == category) {
            Menubutton.classList.add('firebtn')
        }
        else {
            Menubutton.classList.remove('firebtn')
        }
    }
    console.log(category)
    console.log(FoodContainer)
    FoodContainer.innerHTML = "";
    if (category == 'All') {
        Foods.forEach((item) => {
            FoodContainer.innerHTML += `  <div class="Foodcard" data-aos="zoom-in-down">
            <div class="Foodcard__image">
                <img src="${item.img}"
                    alt="Salad" />
            </div>
            <div class="Foodcard__info">
                <div class="Foodcard__info--title">
                    <div class="Foodcard_h1_and_rating">

                        <h3>${item.name}</h3>
                        <img src="./Foodimages/rating star.png" class="foodrating">
                    </div>
                    <div class="Foodcard__info--price">
                        <p>Fresh & sweet</p>
                        <p>${item.price}</p>
                    </div>
                    <button class="addtocart" onclick="Addtocart(${item.id})">AddToCart</button>
                </div>

            </div>
        </div>`
        })
    }
    else {
        Foods.forEach((item) => {
            if (item.type == category) {
                FoodContainer.innerHTML += `  <div class="Foodcard" data-aos="zoom-in-down">
                <div class="Foodcard__image">
                    <img src="${item.img}"
                        alt="Salad"/>
                </div>
                <div class="Foodcard__info">
                    <div class="Foodcard__info--title">
                        <div class="Foodcard_h1_and_rating">
    
                            <h3>${item.name}</h3>
                            <img src="./Foodimages/rating star.png" class="foodrating">
                        </div>
                        <div class="Foodcard__info--price">
                            <p>Fresh & sweet</p>
                            <p>${item.price}</p>
                        </div>
                        <button class="addtocart" onclick="Addtocart(${item.id})" >AddToCart</button>
                    </div>
    
                </div>
            </div>`
            }
        })
    }
}


let counter = document.getElementsByClassName("count")[0];
let Available_Cart_items = []

function checkInCart(id) {
    let check;
    for (let index = 0; index < Available_Cart_items.length; index++) {
        if (Available_Cart_items[index] == id) {
            check = true;
            break;
        }
        else {
            check = false;
        }
    }
    return check;
}

function Addtocart(id) {
    console.log(id)
    let check = checkInCart();
    if (check == true) {
        alert("item is already present")
    }
    else {
        let prevval = counter.innerText;
        counter.innerHTML = Number(prevval) + 1

        addItemInCArt(id);
    }

}
let totalPrice = 0;

let progressbar = document.querySelector('.progressbar')
let added_removed = document.querySelector('.added_removed')
let itemname_div = document.querySelector('.addedItemName')
let popup = document.querySelector('.popup')
let popup_img = document.querySelector('.popup_pic')

function addItemInCArt(id) {

    Foods.forEach((item) => {
        if (item.id == id) {
            cartdiv.innerHTML += `<div class="cartitem">
                    <img src="${item.img}" alt="breakfast">
                    <div class="cartitemcontent">
                        <h2>${item.name}</h2>
                        <div class=" separate_cart_div">
                            <div class="plus_substract_button">
                                <button class="incrementbtn" onclick="IncrementItem(this)">+</button>
                                <span class="count_item_in_cart">1</span>
                                <button class="incrementbtn" onclick="IncrementItem(this)">-</button>
                            </div>
                            <div class="deleteimg_and_price">
                                <img src="./Foodimages/deletepic.png" onclick="deleteCartItem(this)" id="deleteimg">
                                <span>${item.price}</span>
                            </div>
                        </div>
                    </div>

                </div>
        `
            popup.style.display = "none"
            setTimeout(() => {

                let Edited_pr = Formatting_CartTotal_Price(item.price)
                addCartPrice(Edited_pr);
                showpopup("Added", item.name)
            }, 1000);
        }
    })
    Available_Cart_items.push(id);
}
function showpopup(purpose, itemname) {

    popup.style.display = "flex"

    itemname_div.innerText = itemname
    added_removed.innerText = purpose

    if (purpose == "Added") {
        progressbar.style.backgroundColor = "green";
        added_removed.style.color = "green";
        popup_img.src = "./Foodimages/additempic.jpg"

    }
    else {
        progressbar.style.backgroundColor = "red"
        added_removed.style.color = "red";
        popup_img.src = "./Foodimages/removeitem.jpg"

    }
}


function IncrementItem(e) {
    let text = e.innerText
    let counting_item_in_cart;
    let incrementItemPrice;
    let pr;

    if (text == "+") {
        counting_item_in_cart = e.nextElementSibling
        counting_item_in_cart.innerText = Number(counting_item_in_cart.innerText) + 1
        incrementItemPrice = e.parentNode.nextElementSibling.lastElementChild.innerText
        pr = Formatting_CartTotal_Price(incrementItemPrice);
        addCartPrice(pr);

    }
    else {
        counting_item_in_cart = e.previousElementSibling
        if (counting_item_in_cart.innerText == "1") {
            return;
        }

        else {

            counting_item_in_cart.innerText = Number(counting_item_in_cart.innerText) - 1
            incrementItemPrice = e.parentNode.nextElementSibling.lastElementChild.innerText
            pr = Formatting_CartTotal_Price(incrementItemPrice);
            SubstractCartPrice(pr)
        }

    }


}

function Formatting_CartTotal_Price(item) {
    return Number(item.substring(0, item.length - 1))
}

function addCartPrice(itemprice) {
    totalPrice += itemprice;
    showTotal_Price_In_Cart();

}
function SubstractCartPrice(itempr) {
    totalPrice -= itempr;
    showTotal_Price_In_Cart();
}
function showTotal_Price_In_Cart() {
    let priceincart = document.getElementsByClassName('priceincart')[0];
    priceincart.innerHTML = `${totalPrice}$`
}



function deleteCartItem(e) {
    popup.style.display = "none"
    let priceElement = e.nextElementSibling.innerText
    let itemprice = priceElement.substring(0, priceElement.length - 1);
    SubstractCartPrice(itemprice)
    e.parentNode.parentNode.parentNode.parentNode.remove();
    let itemname = e.parentNode.parentNode.previousElementSibling.innerText
    showpopup("Removed", itemname)
}

function checkout() {
    if (Available_Cart_items.length == 0) {
        alert("cart is empty ")
    }
    else {
        let checkout_route = document.getElementById("checkout_route")
        checkout_route.click();
    }
}









// let news = ["Big Deal of Zinger Fajita and Special Pizza is On Way",
//     "Buy Two Vine and Get One Icrecream Free", "Thank's to visited Our Website give Your FeedBack"]
// let newstag = document.getElementsByClassName('news')[0]

// setInterval(() => {
//     newstag.innerHTML = `${news[Math.abs(Math.floor(Math.random() * news.length))]}<br>
//     <button type="button" class="keepinTouch">keepInTouch</button>`
// }, 10000)

