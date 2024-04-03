let arr = [

    {
        title: "Техника от Xiaomi",
        name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
        imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
        price: 1200,
        color: "red",
    },
    {
        name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
        imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
        price: 1200,
        color: "red",
    },
    {
        name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
        imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
        price: 1000,
        color: "gold",
    },
    {
        name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
        imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
        price: 800,
        color: "aqua",
    },
];

let productsList = document.querySelector('#productsList');
let htmlProducts = "";

arr.forEach(({ title, name, price, imgSrc, color }, index) => {
    let h1 = (index === 0 && title) ? `<h1>${title}</h1>` : "";
    let li = `<li class="list-item">
        ${h1}
        <a href=${imgSrc} target='_blank'>
            <img src=${imgSrc} alt="" width="200" height="200" style="max-width: 200px;">
            <h2>${name}</h2>
            <p>${price}</p>
            <span style='background: ${color};' class="color"></span>
        </a>
    </li>`;
    htmlProducts += li;
});
// 2222222222222222
arr.forEach(({ title, name, price, imgSrc, color }, index) => {
    let h1 = (index === 0 && title) ? `<h1>${title}</h1>` : "";
    let li = `<li class="list-item">
        ${h1}
        <a href=${imgSrc} target='_blank'>
            <img src=${imgSrc} alt="" width="200" height="200" style="max-width: 200px;">
            <h2>${name}</h2>
            <p>${price}</p>
            <span style='background: ${color};' class="color"></span>
        </a>
    </li>`;
    htmlProducts += li;
});

productsList.innerHTML = htmlProducts;
