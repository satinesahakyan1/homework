
const input = document.getElementById("text");
const sub = document.getElementById("sub");
const ul = document.getElementById("addelem");

function addLi(val,ul) {
    newLi = document.createElement("li");
    if(val != "") {
        ul.appendChild(newLi);
        newLi.innerHTML = val;
    }
}


document.addEventListener("keydown",function(e) {
    const value = input.value;
    if(e.key === "Enter") {
        addLi(value,ul);
        input.value = "";
    }
});
sub.addEventListener("click",function() {
    const value = input.value;
    addLi(value,ul);
    input.value = "";
})

const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const e3 = document.getElementById("e3");

function foneColorGreen(p) {
    p.style.backgroundColor = "Green";
};


e1.addEventListener("click",function() {
    foneColorGreen(this);
})
e2.addEventListener("click",function() {
    foneColorGreen(this);
})
e3.addEventListener("click",function() {
    foneColorGreen(this);
})

e1.addEventListener("dblclick",function() {
    this.remove();
})
e2.addEventListener("dblclick",function() {
    this.remove();
})
e3.addEventListener("dblclick",function() {
    this.remove();
})