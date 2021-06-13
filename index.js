/* global Datamap axios */
axios.get("http://localhost:3000/api/states").then(response => {
  console.log(response.data);
});
var map = new Datamap({
  element: document.getElementById('container'),
  scope: 'usa'
});