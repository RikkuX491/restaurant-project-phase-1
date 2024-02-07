const restaurantMenuDivElement = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    foods.forEach(food => {
        const imgElement = document.createElement('img')
        imgElement.src = food.image
        restaurantMenuDivElement.appendChild(imgElement)
    })
})