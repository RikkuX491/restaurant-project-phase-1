const restaurantMenuDivElement = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })

    displayFoodDetails(foods[0])
})

// fetch('http://localhost:3000/foods/1')
// .then(response => response.json())
// .then(food => {
//     displayFoodDetails(food)
// })

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenuDivElement.appendChild(imgElement)
    
    // Event Listener # 1 - mouseover
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    // Event Listener # 2 - click
    imgElement.addEventListener('click', () => {
        imgElement.remove()
    })
}

function displayFoodDetails(food){
    const foodImageElement = document.getElementById('food-image')
    foodImageElement.src = food.image
    const foodNameElement = document.getElementById('food-name')
    foodNameElement.textContent = food.name
    const foodPriceElement = document.getElementById('food-price')
    foodPriceElement.textContent = `$${food.price}`
}

const newFoodForm = document.getElementById('new-food-form')

// Event Listener # 3 - submit
newFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newPriceInputElement = document.getElementById('new-price')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        price: Number(newPriceInputElement.value)
    }

    addFoodImageToRestaurantMenu(newFood)

    newFoodForm.reset()
})