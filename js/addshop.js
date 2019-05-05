class AddShop {
    constructor() {
        this.inputName = document.querySelector("#inputName");
        this.inputPrice = document.querySelector("#inputPrice");
        this.inputNum = document.querySelector("#inputNum");
        this.addbtn = document.querySelector("#addShopBtn");
        this.init();
    }
    init() {
        this.addbtn.onclick = () => {
            let name = this.inputName.value,
                price = this.inputPrice.value,
                num = this.inputNum.value;

            //进行表单的一个验证
            if (name == "" || price == "" || num == "") {
                alert("请输入完整的商品信息");
                return;
            }
            console.log(11)
            tools.ajaxGetPromise("api/v1/addshop.php", { name, price, num }).then(data => {
                console.log(data);
                if (data.res_code === 1) {
                    alert(data.res_message);
                    this.inputName.value = this.inputPrice.value = this.inputNum.value = "";
                    //当添加成功之后，让模态框消失
                    $('#addModal').modal('hide');
                    //添加成功后重新渲染页面
                    getShopList.init();

                } else {
                    alert(data.res_message);
                }
            })
        }
    }

}
new AddShop();