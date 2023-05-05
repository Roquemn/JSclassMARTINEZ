// function getWeather() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject("Rainy");
//     }, 100);
//   });
// }

// function getWeatherIcon(weather) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       switch (weather) {
//         case "Sunny":
//           resolve("☀️");
//           break;
//         case "Cloudy":
//           resolve("☁️");
//           break;
//         case "Rainy":
//           resolve("🌧️");
//           break;
//         default:
//           reject("NO ICON FOUND");
//       }
//       resolve("Sunny");
//     }, 100);
//   });
// }

// function onSuccess(data) {
//   console.log(`Success ${data}`);
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// getWeather().then(getWeatherIcon).then(onSuccess).catch(onError);

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Bad data");
    }, 100);
  });
}
function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🤓");
    }, 100);
  });
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}
function onError(errorCode) {
    console.log(`ERROR: ${errorCode}`)
}

function onFinally() {
    console.log('Finally we be done yo')
}

fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)

