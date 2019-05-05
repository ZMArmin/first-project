class Login {
    constructor() {
        this.inputUserName = document.querySelector("#inputUserName");
        this.inputPassword = document.querySelector("#inputPassword");
        this.loginBtn = document.querySelector("#loginBtn");
        this.checkbox  = document.querySelector("#sevenCheckbox");
        this.bindEvents();
    }
    bindEvents() {
        this.loginBtn.onclick = () => {
            let username = this.inputUserName.value,
                password = this.inputPassword.value;
             //console.log(username);
            // console.log(password);
            tools.ajax("POST",  "../api/v1/login.php", { username, password }, data =>{
                console.log(data);
                if(data.res_code==1){
                    //将登录的状态存cookie
                    if(this.checkbox.checked){
                        tools.cookie("username", username, {expires: 7, path: "/"});
                      }else{
                        tools.cookie("username", username, {path: "/"});
                      }
                    window.location.href = "../index.html";
                }else{
                    alert(data.res_message);
                }
            })
            return false;
        }
    }

}
new Login();