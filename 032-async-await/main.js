// async function start() {
//   const data = await fetch(
//     "https://api.weather.gov/gridpoints/HNX/53,100/forecast"
//   );
//   const result = await data.json();
//   console.log(result.properties.periods[1].shortForecast);
// }

// async function start2() {
//   fetch("https://api.weather.gov/gridpoints/HNX/53,100/forecast")
//     .then((data) => data.json())
//     .then((result) => {
//       console.log(result.properties.periods[1].shortForecast);
//     });
// }

// start2();

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      //   resolve("HERE IS YOUR DATA");
      reject("Something went wrong");
    }, 1);
  });
}

async function start() {
  try {
    const result = await getData();
    // SUCCESS
  } catch (error) {
    // FAILURE
  }
}

start();
