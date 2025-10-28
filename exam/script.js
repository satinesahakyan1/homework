function num_floor(num) {
    if(!Number.isInteger(num)){
        console.log(Math.floor(num));
    } else {
        console.log("ԹԻվը պետք է լինի տասնորդական");
    }
}

num_floor(2.36);
num_floor(56.888);
num_floor(58.7);
num_floor(5);

function has_key(obj,key) {
    if( obj.hasOwnProperty(key)) {
        return "Yes";
    } else {
        return "No";
    }
}

const user = {
  name: "Anna",
  age: 25,
};

console.log(has_key(user, "name"));
console.log(has_key(user,"gender"));

let p = document.getElementById("ex4").firstElementChild;

// p.onclick = function() {
    p.style.fontSize = "25px";
    p.style.backgroundColor = "#899c98";
// };
