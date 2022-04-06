let userNum = document.getElementById("getnum")
userNum.addEventListener("keydown", function(e){
    if(e.keyCode == 13){
        run(e)
    }
})

userNum.focus();
let counter = 0;

function run() {
    rannum();
    usernum();
    compare();
}

function rannum() {
    let ran = Math.floor(Math.random() * 10) + 1;
    return ran;
}

function usernum() {
    let user = document.getElementById("getnum").value;
    return user;
}

function compare() {
    let a = usernum();
    let b = rannum();
    let z = document.getElementById("compare")
    let c = document.getElementById("counter")
    if (a != b) {
        z.innerHTML = "Numbers are not the same, computer got " + b + " and user got " + a; 
        z.style.backgroundColor = "blue";
        z.style.color = "white";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times to get it right.";
        c.style.backgroundColor = "red";
        c.style.color = "white";
        c.style.padding = "20px";
        c.style.textAlign = "center";    
        document.querySelector("body").style.backgroundColor = "lightblue"   
    } else if (a == b) {
        z.innerHTML = "Numbers are the same, computer got " + b + " and user got " + a;   
        z.style.backgroundColor = "orange";
        z.style.color = "white";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times to get it right." 
        c.style.backgroundColor = "green";
        c.style.color = "white";
        c.style.padding = "20px";
        c.style.textAlign = "center";  
        counter = 0;
        document.querySelector("body").style.backgroundColor = "lightblue"  
    }
    resetinput();
}

function resetinput(){
    document.getElementById("getnum").value = "";
}

