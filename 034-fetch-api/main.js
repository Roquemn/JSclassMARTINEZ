const url =
  "https://api.thenewsapi.com/v1/news/top";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
