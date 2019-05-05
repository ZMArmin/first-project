class SelectList {
    constructor(tbody) {
        this.tbody = document.querySelector(tbody);
        //设置当前页码数，默认值为1
        this.pageIndex = 1;
        //定义每页显示的数据条数,此属性不能被修改
        Object.defineProperty(this, "countPages", {
            writable: false,
            value: 5
        });
        //设置总的页码数，默认值为1，其值应该根据后端数据生成
        this.totalPages = 1;

        this.init();
    }
    init() {
        let { pageIndex, countPages } = this;
        tools.ajaxGetPromise("api/v1/select.php", { pageIndex, countPages }).then(data => {
            // console.log(111);
            // console.log(data);
            if (data.res_code === 1) {
                this.totalPages = data.res_body.totalPages;
                // console.log(this.totalPages)
                this.render(data.res_body.data);
                //根据总页数来渲染页数的导航
                pagination.render(this);
            } else {
                alert(data.rea_mesage);
            }
        })
    }
    render(list) {
        let html = "";
        list.forEach((shop, index) => {
            // console.log(shop.price);
            html += `<tr data-id="${shop.id}">
              <td>${(this.pageIndex-1)*this.countPages + index+1}</td>
              <td>${shop.name}</td>
              <td><span>${shop.price}</span><input type="text" class="inputPrice"></td>
              <td><span> ${shop.num}</span><input type="text" class="inputNum"></td>
              <td>
                <button type="button" class="btn btn-info editBtn">编辑</button>
                <button type="button" class="btn btn-success okBtn">确定</button>
                <button type="button" class="btn btn-warning cancelBtn">取消</button>
                <button type="button" class="btn btn-danger delBtn">删除</button>
              </td>
           </tr>`;
        });
        this.tbody.innerHTML = html;
    }
}

var getShopList = new SelectList("#tbody");