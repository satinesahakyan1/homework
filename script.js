function roundtwo(num) {
    return Math.round(num * 100)/100;
}

function isNumber(value) {
    if(value.trim() !== "" && !isNaN(value)){
        return("Թիվ է");
    } else {
        return("Թիվ չէ");
    }
}

function tosting(value) {
    let string =  value.toString();
    return string.length;
}

function intPart(value) {
    let sign = value < 0 ? -1 : 1; 
    num = Math.abs(value);         
    
    let intPart = 0;
    while (intPart + 1 <= value) {
        intPart++;
    }
    return intPart * sign;
}

function hasAword(text,word) {
    return text.includes(word)?"Բառը կա":"Բառը չկա"; 
}

function clearingTo_(value) {
    let newValue = "";
    value = value.trim();
    for(let i = 0;i < value.length;i++) {
        if(value[i] == " "){
            newValue += "_";
        } else {
            newValue += value[i];
        }
    }
    return newValue;
}

function firstAndLastThreeSymbols(value){
    let newValue = "";
    value = value.trim();
    for(let i = 0;i < value.length;i++) {
        if(i >= 0 && i <3) {
            newValue += value[i] + " ";
        } 
        if(i >= value.length - 3) {
            newValue += value[i] + " ";
        }
    }
    return newValue;
}

function clearing(value) {
    let newValue = "";
    let i = 0;
    let j = value.length - 1;
    while(value[i] === " ") {
        i++;
    }
    while(value[j] === " ") {
        j--;
    }
    for(let k = i; k <= j;k++) {
        newValue += value[k];
    }
    return newValue;
}

function strLength(value) {
    let count = 0;
    let newValue = clearing(value);
    while(newValue[count] != undefined) {
        count++;
    }
    return count != 0?count : null;
}
function toArray(value) {
    return value
        .trim()                              
        .split(",")                          
        .map(v => v.trim())                  
        .filter(v => v !== "")               
        .map(v => (isNaN(v) ? v : Number(v)));
}

function addElemInArray(arr,elem) {
    arr[arr.length] = isNaN(elem)?elem:Number(elem);
    return arr;
}

function removeLastElem(arr) {
    arr.splice(arr.length - 1,1);
    return arr;
}

function elemMorethan10(arr) {
    let i = 0;
    while(arr[i] != undefined) {
        if(arr[i] > 10) {
            return i;
            break;
        }
        i++;
    }
    return false;
}

function evenNumbers(arr) {
    let newarr = [];
    let i = 0;
    while(arr[i] != undefined) {
        if(!isNaN(arr[i]) && arr[i]%2 == 0) {
            newarr.push(arr[i]);
        }
        i++;
    }
    return newarr;   
}

function mulX2(arr){
    let newarr = [];
    let i = 0;
    while(arr[i] != undefined) {
        if(!isNaN(arr[i])) {
            newarr.push(arr[i]*2);
        } else {
            newarr.push(arr[i]);
        }
        i++;
    }
    return newarr;   
}

function sumElemsinArr(arr) {
    let sum = 0;
    let i = 0;
    while(arr[i] != undefined) {
        if(!isNaN(arr[i])) {
            sum += arr[i]
        }
        i++;
    }
    return sum;
}

function arrHasAnElem(arr,elem) {
    let i = 0;
    while(arr[i] != undefined) {
        if(arr[i] == elem) {
            return "Էլեմենտը կա";
            break;
        }
        i++;
    }
    return "Էլեմենտը չկա";
}

function connectArrays(arr1,arr2){
    let arr = [];
    let i = 0;
    while(arr1[i] != undefined) {
        arr.push(arr1[i]);
        i++;
    }
    i = 0;
    while(arr2[i] != undefined) {
        arr.push(arr2[i]);
        i++;
    }
    return arr;
}

function arrSliec(arr) {
    return arr.length <= 4 ? "Զանգվածի երկարությունը փոքր է":arr.slice(1,4);
}

function arrGrowOrder(arr) {
    let numericArr = arr.filter(x => !isNaN(x));
    numericArr.sort((a, b) => a - b);
    return numericArr;
}

function getObjectKeys(o) {
  return Object.keys(o);
}

function getObjectValues(o) {
  return Object.values(o);
}

function hasKey(o, key) {
  return o.hasOwnProperty(key);
}

function mergeObjectsFn(o1, o2) {
  return Object.assign({}, o1, o2);
}

function getObjectEntries(o) {
  return Object.entries(o);
}


const ex = document.getElementById("ex");
const exerciseSelect = document.getElementById("exerciseSelect");
const result = document.getElementById("result");
let newInput = null; 

let selectedValue = null;

exerciseSelect.addEventListener("change",(event) => {
    selectedValue = exerciseSelect.value;
    const oldInput = document.getElementById("word");
    if (oldInput) {
        oldInput.remove();
        newInput = null;
    }
    console.log(selectedValue);
    if(selectedValue == 1 || selectedValue == 3 || selectedValue == 4) {
        ex.type = "number";
        ex.placeholder = "";
    } else if(selectedValue == 2 ||selectedValue == 5 || selectedValue >= 7 && selectedValue <= 10) {
        ex.type = "text";
        ex.placeholder = "";
    } else if(selectedValue == 6) {
            ex.type = "text";
            ex.placeholder = "Նախադասություն";
            newInput = document.createElement("input");
            newInput.type = "text";
            newInput.id = "word";
            newInput.placeholder = "Փնտրվող բառը";
            ex.after(newInput);
    } else if (selectedValue == 11){
        ex.type = "text";
        ex.placeholder = "Գրիր 1,2,3";
        newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = "word";
        newInput.placeholder = "Ավելացվող էլեմենտ";
        ex.after(newInput);
    } else if(selectedValue >= 12 && selectedValue <= 16) {
        ex.type = "text";
        ex.placeholder = "Գրիր 1,2,3";
    } else if(selectedValue == 17) {
        ex.type = "text";
        ex.placeholder = "Գրիր 1,2,3";
        newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = "word";
        newInput.placeholder = "Փնտրվող էլեմենտ";
        ex.after(newInput);
    } else if(selectedValue == 18 ){
        ex.type = "text";
        ex.placeholder = "Գրիր 1,2,3";
        newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = "word";
        newInput.placeholder = "Գրիր 1,2,3";
        ex.after(newInput);
    } else if(selectedValue >= 19 && selectedValue <= 20){
        ex.type = "text";
        ex.placeholder = "Գրիր 1,2,3";
    }
    ex.value = ""; 
});
document.addEventListener("keydown",function(e) {
    const value = ex.value;
    const word = newInput ? newInput.value : "";
    if(e.key === "Enter") {
        if(selectedValue == 1) {
            const num = parseFloat(value);
            const rounded = roundtwo(num);
            result.innerText = rounded;
            console.log(roundtwo(rounded));
            
        } else if (selectedValue == 2) {
            result.innerHTML = isNumber(value);
        } else if(selectedValue == 3) {
            result.innerHTML = tosting(value);
        } else if (selectedValue == 4) {
            result.innerHTML = intPart(value);
        } else if (selectedValue == 5) {
            result.innerHTML = value.toUpperCase();
        } else if (selectedValue == 6) {
            result.innerHTML = hasAword(value,word);
            newInput.value = "";
        } else if (selectedValue == 7) {
            result.innerHTML = clearingTo_(value);
        } else if (selectedValue == 8){
            result.innerHTML = firstAndLastThreeSymbols(value);
        } else if (selectedValue == 9){
            result.innerHTML = clearing(value);
            console.log(clearing(value));
        } else if (selectedValue == 10) {
            result.innerHTML = strLength(value);
        } else if (selectedValue == 11) {
            let arr = toArray(value);
            result.innerHTML = addElemInArray(arr,word);
            console.log(addElemInArray(arr,word));
            newInput.value = "";
        } else if(selectedValue == 12) {
            result.innerHTML = removeLastElem(toArray(value));
        } else if (selectedValue == 13) {
            result.innerHTML = elemMorethan10(toArray(value));
        } else if (selectedValue == 14) {
            result.innerHTML = evenNumbers(toArray(value));
        }else if (selectedValue == 15) {
            result.innerHTML = mulX2(toArray(value));
        } else if (selectedValue == 16) {
            result.innerHTML = sumElemsinArr(toArray(value));
        } else if (selectedValue == 17) {
            let arr = toArray(value);
            result.innerHTML = arrHasAnElem(arr,word);
            newInput.value = "";
        }else if (selectedValue == 18) {
            let arr1 = toArray(value);
            let arr2 = toArray(word);
            result.innerHTML = connectArrays(arr1,arr2);
            newInput.value = "";
        } else if (selectedValue == 19) {
            result.innerHTML = arrSliec(toArray(value));
        } else if (selectedValue == 20) {
            result.innerHTML = arrGrowOrder(toArray(value));
        }
    ex.value = "";
    }
});
let userObj = {};
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  userObj = Object.fromEntries(formData.entries());
  
  document.getElementById("output").textContent =
    "✅ Օբյեկտը ստեղծվեց:\n" + JSON.stringify(userObj, null, 2);
  document.getElementById("buttons").style.display = "block";
});

function showKeys() {
  document.getElementById("output").textContent =
    JSON.stringify(getObjectKeys(userObj), null, 2);
}

function showValues() {
  document.getElementById("output").textContent =
    JSON.stringify(getObjectValues(userObj), null, 2);
}

function checkKey() {
  let key = prompt("Մուտք արա բանալիի անունը՝ օրինակ 'age' կամ 'city':");
  document.getElementById("output").textContent =
    hasKey(userObj, key)
      ? `✅ '${key}' կա օբյեկտում`
      : `❌ '${key}' չկա օբյեկտում`;
}

function mergeObjects() {
  const obj2 = { country: "Հայաստան", hobby: "ծրագրավորում" };
  const merged = mergeObjectsFn(userObj, obj2);
  document.getElementById("output").textContent =
    "➡ Միացված օբյեկտը:\n" + JSON.stringify(merged, null, 2);
}

function showEntries() {
  document.getElementById("output").textContent =
    JSON.stringify(getObjectEntries(userObj), null, 2);
}
// ex.addEventListener("keydown",function(e) {
//     if(e.key === "Enter") {
//         const num = document.getElementById("ex1").value;
//         console.log(roundtwo(num));
//     }
// });





