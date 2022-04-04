let userNum = document.getElementById("getnum")
userNum.addEventListener("keydown", function(e){
    if(e.keyCode == 13){
        run(e)
    }
})

userNum.focus();


function run() {
    document.getElementById("paragraph").innerHTML = "Hello World";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    rannum();
    usernum();
    compare();
}

function rannum() {
    let ran = Math.floor(Math.random() * 10) + 1;
    let x = document.getElementById("random")
    x.innerHTML = ran;
    return ran;
}

function usernum() {
    let user = document.getElementById("getnum").value;
    let y = document.getElementById("usernum")
    y.innerHTML = user;
    return user;
}

function compare() {
    let a = usernum();
    let b = rannum();
    let z = document.getElementById("compare")
    if (a != b) {
        z.innerHTML = "Numbers are not the same, computer got " + b + " and user got " + a;        
    } else if (a == b) {
        z.innerHTML = "Numbers are the same, computer got " + b + " and user got " + a;   
    }
    resetinput();
}

function resetinput(){
    document.getElementById("getnum").value = "";
}