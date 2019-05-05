let username = tools.cookie("username"),
    unloginUl = document.querySelector("#unlogin"),
    readyUl = document.querySelector("#ready"),
    usernameSpan = document.querySelector("#usernameSpan");

    if(username){
        unloginUl.classList.add("hidden");
        usernameSpan.innerHTML = username;
        readyUl.classList.remove("hidden");
    }
console(username)