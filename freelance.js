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

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(addShape, 2000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
