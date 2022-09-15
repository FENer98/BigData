const selector = document.querySelector(".selector")
const currentText = document.querySelector(".currentText")
const searchBox = document.querySelector(".search-box")
//模拟从服务器获取元素

let apiList = [
    { name: "全部", keyword: "身份证实名", isnew: false },
    { name: "生活服务", keyword: "银行卡", isnew: false },
    { name: "金融科技", keyword: "短信", isnew: false },
    { name: "交通地理", keyword: "天气", isnew: false },
    { name: "充值缴费", keyword: "短信", isnew: false },
    { name: "数据智能", keyword: "手机归属地", isnew: false },
    { name: "企业工商", keyword: "IP", isnew: false },
    { name: "应用开发", keyword: "手机归属地", isnew: false },
    { name: "电子商务", keyword: "IP", isnew: false },
    { name: "吃喝玩乐", keyword: "视频", isnew: false },
    { name: "文娱视频", keyword: "视频", isnew: false },
    { name: "免费接口大全", keyword: "短信", isnew: true },
    { name: "短信", keyword: "身份证实名", isnew: false },
    { name: "汽车", keyword: "银行卡", isnew: false },
    { name: "核验", keyword: "银行卡", isnew: false },
    { name: "最新发布", keyword: "银行卡", isnew: true },
    { name: "API私有化部署", keyword: "身份证实名", isnew: true },
]


//动态创建a标签

for (let i = 0; i < apiList.length; i++) {
    let newA = document.createElement("a")
    newA.innerText = apiList[i].name
    newA.setAttribute("keyword", apiList[i].keyword)
    if (i === 0) {
        newA.classList.add("active")
    }
    if (apiList[i].isnew) {
        newA.classList.add("bold")
    }

    //将newA添加到selector盒子中
    selector.append(newA)
}


//由于这里的a标签是动态生成的，页面加载时不能绑定事件，所以使用事件委托来实现。

selector.addEventListener("click", event => {
    //点击的是a标签才渲染
    if (event.target.nodeName.toLowerCase() === 'a') {
        //修改前面文字
        currentText.textContent = event.target.textContent
        //修改占位符文字
        //注意：placeholder是自定义属性，需要用NodeObj.dataset.placeholder
        searchBox.setAttribute("placeholder", event.target.getAttribute("keyword"))

        //修改选中的a标签样式
        const currentA = document.querySelector(".active")
        event.target.classList.add("active")
        currentA.classList.remove("active")
    }
})



//卡片部分，模拟服务器数据
let cardList = [
    //第一行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

    //第二行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第三行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第四行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

]

const cardContent = document.querySelector(".card-content")
for (let i = 0; i < cardList.length; i++) {
    let newLi = document.createElement("li")

    newLi.innerHTML = `
    <span class = "${cardList[i].isSpecial ? "" : "none"}">企业专用</span>
    <a href="../apidetails/apidetails.html" class = "card-main">
        <img src="../../assets/images/${cardList[i].img }">
        <p class = "card-name">${ cardList[i].name}</p>
        <p class = "card-price ${cardList[i].price == "免费"? "free" : "" }">${cardList[i].price}</p>
    </a>
    <a href="#" class="card-btn">申请数据</a>
    `

    cardContent.append(newLi)
}

//弹出模态框
const cardBtn = document.querySelectorAll(".card-btn")
const menu = document.querySelector(".menu")
const mask = document.querySelector(".mask")
for (let i = 0; i < cardBtn.length; i++){
    cardBtn[i].addEventListener("click", () => {
        menu.style.display = "block"
        mask.style.display = "block"
    })
}

//模态框消失
document.addEventListener("click", (event) => {
    if (event.target === mask) {
        menu.style.display = "none"
        mask.style.display = "none"
    }
})

