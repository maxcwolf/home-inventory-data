const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))

console.log(storedInventory);

console.log(electronics);

const pStation = {
    "name" : "Playstation 4",
    "type" : "electronics",
    "location" : "upstairs living room",
    "description" : "white Sony Playstation 4"
}

const cheeseWheel = {
    "name" : "Cheese Wheel",
    "type" : "furniture",
    "location" : "upstairs living room",
    "description" : "Giant rotten wheel of cheese I like to sit on"
}

const rangDipkin = {
    "name" : "Rang Dipkin",
    "type" : "toys",
    "location" : "dungeon",
    "description" : "small oddly shaped man who is kept in the basement dungeon"
}

electronics.push(pStation);
furniture.push(cheeseWheel);
toys.push(rangDipkin);

console.log(HomeInventory);

homeInventoryString2 = JSON.stringify(HomeInventory);

console.log(homeInventoryString2);

localStorage.setItem("homeInventory2", homeInventoryString2);