// JSON
const person = {
    name: 'Abdul',
    age: 35
};
// উপরের অবজেক্ট টাকে JSON এ কনভার্ট করা হলো
const data = (JSON.stringify(person));
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);



// API fetch
// fetch('url')
// .then(res = res.json())
// .then(data => console.log(data));

// local storage
// localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
console.log(userId);
localStorage.setItem('person', dataParsed.name);