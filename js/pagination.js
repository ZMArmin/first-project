class Pagination {
    constructor() {
        this.pageContainer = document.querySelector("#page-container");
        this.next = document.querySelector("#next-page");
        this.bindEvent();

    }
    render(selectList) {
        //根据后端数据渲染页面数
        //的到查询的对象
        this.selectList = selectList;
        //由于每一次都重新渲染，所有每次重新渲染之前把前一次的渲染结果删掉,给所有的li增加class方便删除
        Array.from(this.pageContainer.querySelectorAll(".page-li")).forEach(li => {
            li.remove();
        })
        console.log(this.selectList.totalPages);
        for (let i = 1; i <= this.selectList.totalPages; i++) {
            let li = document.createElement("li");
            li.className = i === this.selectList.pageIndex ? "active page-li" : "page-li";
            li.innerHTML = `<a href="javascript:;" class="page">${i}</a>`;
            this.pageContainer.insertBefore(li, this.next);
        }
    }

    bindEvent() {
        this.pageContainer.onclick = e => {
            let target = e.target;
            let targetclass = Array.from(target.classList);
            if (targetclass.includes("page")) {
                //点了页码数的分页，要根据点击的页码数来渲染
                this.selectList.pageIndex = Number(target.innerHTML);
                this.selectList.init();
            } else if (targetclass.includes("prev-page")) {

                if (--this.selectList.pageIndex < 1) {
                    this.selectList.pageIndex = 1;
                    return;
                }
                this.selectList.init();
            } else if (targetclass.includes("next-page")) {
                if (++this.selectList.pageIndex > this.selectList.totalPages) {
                    this.selectList.pageIndex = this.selectList.totalPages;
                    return;
                }
                this.selectList.init();
            }
        }
    }
}

let pagination = new Pagination();