class Register {
    constructor() {
        this.inputUserName = document.querySelector("#inputUserName");
        this.inputPassword = document.querySelector("#inputPassword");
        this.registerBtn = document.querySelector("#registerBtn");
        this.bindEvents();
    }
    bindEvents() {
        this.registerBtn.onclick = () => {
            let username = this.inputUserName.value,
                password = this.inputPassword.value;
            // console.log(username);
            // console.log(password);
            tools.ajax("POST", "../api/v1/register.php", { username, password }, data => {
                //console.log(data);
                if (data.res_code === 1) {
                    alert("注册成功去登录")
                } else {
                    alert(data.res_message);
                }

            })
            return false;
        }
    }

}
new Register();