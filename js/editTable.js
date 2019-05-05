class EditTable {
    constructor(tbody) {
        this.tbody = document.querySelector(tbody);
        this.bindEvents();
    }
    bindEvents() {
        this.tbody.onclick = e => {
            var target = e.target;
            let tr = target.parentNode.parentNode;
            var classList = Array.from(target.classList);
            if (classList.includes("editBtn")) {
                this.editClick(tr);
            } else if (classList.includes("okBtn")) {
                this.okClick(tr);
            } else if (classList.includes("cancelBtn")) {
                this.cancelClick(tr);
            } else if (classList.includes("delBtn")) {
                this.delClick(tr);
            }
        }
    }

    editClick(tr) {
        let aSpan = Array.from(tr.querySelectorAll("span"));
        //将span的值赋给Input
        aSpan.forEach(span => {
            span.nextElementSibling.value = span.innerHTML;
        });
        //给tr添加edit的class名
        tr.classList.add("edit");
    }

    okClick(tr) {
        //编辑确认后的数据应该发送后台
        let inputPrice = tr.querySelector(".inputPrice"),
            inputNum = tr.querySelector(".inputNum"),
            id = tr.getAttribute("data-id"),
            price = inputPrice.value,
            num = inputNum.value;
        //发表请求
        tools.ajaxGetPromise("api/v1/ok.php", { id, price, num }).then(data => {
            if (data.res_code === 1) {
                //console.log(data);
                inputPrice.previousElementSibling.innerHTML = price;
                inputNum.previousElementSibling.innerHTML = num;
            } else {
                alert(data.res_message);
            }

        })

        //京塔器页面的操作方式
        // let aSpan = Array.from(tr.querySelectorAll("span"));
        // aSpan.forEach(span => {
        //     span.innerHTML = span.nextElementSibling.value;
        // });
        tr.classList.remove("edit");
    }

    cancelClick(tr) {
        console.log(1)
        tr.classList.remove("edit");
    }
    delClick(tr) {

        //删除后也应该发送后台，进行后台数据的更改
        if (confirm("确定要删除吗？")) {
            // this.tbody.removeChild(tr);
            //请求后端做删除功能
            let id = tr.getAttribute("data-id");
            tools.ajaxGetPromise("api/v1/delete.php", { id }).then(data => {
                console.log("dele");
                console.log(data);
                if (data.res_code === 1) {
                    alert(data.res_message);
                    //删除成功后，前端重新获取渲染页面
                    getShopList.init();
                } else {
                    alert(data.res_message);
                }
            })
        }
    }
}
new EditTable("#tbody");