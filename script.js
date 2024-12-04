// Menu data
const menu = {
    breakfast: [
        { name: "Pancakes", price: "$5.99", img: "https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/04/30/0/FNK_The-Best-Cheddar-And-Herb-Chaffle_H_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1588257306685.jpeg" },
        { name: "Omelette", price: "$6.99", img: "https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505" },
        { name: "Coffee", price: "$2.49", img: "https://images.services.kitchenstories.io/gxInWDQniM21aQiVgvnXmDrMnvo=/3840x0/filters:quality(85)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg" },
    ],
    lunch: [
        { name: "Burger", price: "$8.99", img: "https://www.eatingwell.com/thmb/zSh86Cx-fybgBu5-baxombw1OiA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/diy-taco-lunch-box-54f8791776b64900b285fbfc22a4f0bc.jpg" },
        { name: "Caesar Salad", price: "$7.99", img: "https://hips.hearstapps.com/hmg-prod/images/harvest-bowls-index-66b3f14d6d5d4.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*" },
        { name: "Iced Tea", price: "$1.99", img: "https://static01.nyt.com/images/2024/07/10/dining/10WELL-LUNCH-SECRETS9/18WELL-LUNCH-SECRETS9-mediumSquareAt3X.jpg" },
    ],
    dinner: [
        { name: "Steak", price: "$15.99", img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Quick-dinner-recipes-c7ca11c.jpg" },
        { name: "Pasta", price: "$12.99", img: "https://www.acouplecooks.com/wp-content/uploads/2023/01/Vegan-Stir-Fry-006.jpg" },
        { name: "Red Wine", price: "$8.49", img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Prawn-harissa-spaghetti--b3b0fdd.jpg?quality=90&resize=556,505" },
    ],
    drinks: [
        { name: "Soda", price: "$1.99", img: "https://www.tasteofhome.com/wp-content/uploads/2024/05/Sweet-Rum-Punch_EXPS_FT24_273648_EC_050224_4.jpg" },
        { name: "Milkshake", price: "$4.49", img: "https://hips.hearstapps.com/hmg-prod/images/drinks-to-avoid-1621959532.jpg?crop=0.670xw:1.00xh;0.151xw,0&resize=1200:*" },
        { name: "Cocktail", price: "$6.99", img: "https://hips.hearstapps.com/hmg-prod/images/delish-220517-dirty-shirley-cocktail-001-ab-web-1657145301.jpg?crop=0.828xw:0.829xh;0.123xw,0.0932xh&resize=980:*" },
    ],
};

// Function to display the menu
function showMenu(category) {
    const container = document.getElementById("menu-container");
    container.innerHTML = ""; // Clear previous content

    // Display menu items for the selected category
    menu[category].forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <span>${item.price}</span>
        `;
        container.appendChild(menuItem);
    });
}

// Display all items by default when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    showMenu('breakfast');  // Default category (could be any category)
});
