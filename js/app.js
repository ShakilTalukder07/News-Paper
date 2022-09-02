const loadAllProducts = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    // console.log(data);
    return data;
};

const setAllMenu = async () => {
    const data = await loadAllProducts();
    console.log(data.data);
    const menu = document.getElementById('menu');

    for (const status in data.data.news_category.category_name) 
    {
        // console.log(status.category_name);
            const li = document.createElement("li");
            ul.innerHTML = `<a>${status.category_name}</a>`;
            menu.appendChild(li);
    }

};

setAllMenu()
