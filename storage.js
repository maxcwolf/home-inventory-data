const desktop = {
    "name" : "Badass PC",
    "type" : "electronics",
    "location" : "upstairs living room",
    "description" : "Custom built overclocked 4k gaming PC"
}

const laptop = {
    "name" : "Macbook Pro",
    "type" : "electronics",
    "location" : "mobile",
    "description" : "2010 Apple Macbook Pro 15\" i7"
}

const soundbar = {
    "name" : "Soundbar",
    "type" : 'electronics',
    "location" : 'downstairs living room',
    "description" : 'mid-range home entertainment sound bar with subwoofer'
}

const bugASalt = {
    "name" : "Bug-A-Salt",
    "type" : "toys",
    "location" : "downstairs living room",
    "description" : "salt gun for killing bugs"
}

const cards = {
    "name" : "Cards Against Humanity",
    "type" : "toys",
    "location" : "upstairs living room",
    "description" : "raunchy adult card game"
}

const  mFalcon = {
    "name" : "Lego Millenium Falcon",
    "type" : "toys",
    "location" : "upstairs living room",
    "description" : "collectors edition giant lego millenium falcon"
}

const cassTable = {
    "name" : "cassette table",
    "type" : "furniture",
    "location" : "upstairs living room",
    "description" : "coffeee table carved in the shape of a cassette"
}

const kidRobot = {
    "name" : "Kidrobot figures",
    "type" : "toys",
    "location" : "bedroom",
    "description" : "collection of Kidrobot figures of Simpsons and Futurama characters"
}

const couch = {
    "name" : "red couch" ,
    "type" :  "furniture",
    "location" :  "upstairs living room" , 
    "description" :  "red pleather 3 seater couch"
}

const bed = {
    "name" : "bed",
    "type" : "furniture",
    "location" : "bedroom",
    "description" : "queen-size memory foam bed"
}

//Creating Array containing all objects:
let electronics = [];
let toys = [];
let furniture = [];

//Pushing objects into arrays
electronics.push(desktop, laptop, soundbar);
toys.push(cards, kidRobot, mFalcon, bugASalt);
furniture.push(bed, couch, cassTable);

//Defining databass array
let HomeInventory = {
    "electronics": electronics,
    "toys": toys,
    "furniture": furniture
}

//JSON Strigification of inventory database
const homeInventoryString = JSON.stringify(HomeInventory);
localStorage.setItem("homeInventory", homeInventoryString);

//JSON Parse to read the data
// const storedInventory = JSON.parse(localStorage.getItem("homeInventory"));
