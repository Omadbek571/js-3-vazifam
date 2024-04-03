
let arr = {
    "products": [
        {
            title: "Техника от Xiaomi",
            name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
            imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
            price: 1200,
            color: "red",
        },
    ],
    "category": [
        {
            title: "Техника от Xiaomi",
            name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
            imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
            price: 1200,
            color: "red",
        },
    ]

    // {
    //     name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
    //     imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
    //     price: 1200,
    //     color: "red",
    // },
    // {
    //     name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
    //     imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
    //     price: 1000,
    //     color: "gold",
    // },
    // {
    //     name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78",
    //     imgSrc: "https://leronza.com/wp-content/uploads/2020/06/24k_Gold_Mickey_Mouse_Limited_Edition_iPhone_11_Pro_and_iPhone_11_Pro_Max-1024x1024.jpg",
    //     price: 800,
    //     color: "aqua",
    // },
};

// Function to populate list
function populateList(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    items.slice(1).forEach(item => {
        const listItem = createListItem(item);
        container.appendChild(listItem);
    });
}

// Iterate over the categories in the 'arr' object
for (const item in arr) {
    // Skip if the property is not an array
    if (!Array.isArray(arr[item])) continue;

    // Create a new section for the item
    const section = document.createElement('div');
    section.innerHTML = `<h1 class="h1-title">${item}</h1><ul class="list" id="${item}Container"></ul>`;
    document.getElementById('block').appendChild(section);

    // Populate the list for the current item
    populateList(`${item}Container`, arr[item]);
}