const freelancers = [
    {
      name: "Alice",
      occupation: "writer",
      price: 30,
    },
    {
      name: "Bob",
      occupation: "teacher",
      price: 50,
    },
    {
        name: "Carol",
        occupation: "programmer",
        price: 70,
      },
  ];

//Need a random name

const names = ["Jeremy", "Tyra", "Janice", "George"];


function randoName () {
  const index = Math.random()*names.length;
  const indexfloor = Math.floor(index);
  const chooseName = names[indexfloor];
  return chooseName;
}

//Need to display names
//Need to calculate average price
//Need to display average price


const occupations = ["Developer", "Account Manager", "Fireman","Police", "Winetaster"];

let totalprice = 0
let totalitems = 0


function addFreelancer (X){

 let price = Math.random()*100; 
 totalprice = totalprice + price;
 totalitems = totalitems + 1
 const average = totalprice/totalitems;
 document.getElementById('average').textContent= `Average: ${average.toFixed(0)}`
 const A= randomthing (names);
 const B= randomthing (occupations);
 console.log(`Name: ${A}, Occupation: ${B}, Price: ${price.toFixed(2)}`);
 const list = document.getElementById('list');
 const listitem = document.createElement('li');
 listitem.textContent = `Name: ${A}, Occupation: ${B}, Price: ${price.toFixed(2)}`
 list.appendChild(listitem);
 console.log("Example",list);
}


function randoOccupations (){
  const index = Math.random()*occupations.length;
  const indexfloor = Math.floor(index);
  const chooseOccupation = occupations[indexfloor];

  return chooseOccupation;

}

function randomthing (array){

  const index = Math.random()*array.length;
  const indexfloor = Math.floor(index);
  const chooseOccupation = array[indexfloor];

  return chooseOccupation;

}

const freelancerlooper = setInterval(addFreelancer, 2000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
