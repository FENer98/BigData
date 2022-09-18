const config = {
    vx: 4,	//小球x轴速度,正为右，负为左
    vy: 4,	//小球y轴速度
    height: 2,	//小球高宽，其实为正方形，所以不宜太大
    width: 2,
    count: 200,		//点个数
    color: "ccc", 	//点颜色
    stroke: "eee", 		//线条颜色
    dist: 6000, 	//点吸附距离
    e_dist: 20000, 	//鼠标吸附加速距离
    max_conn: 10 	//点到点最大连接数
}

//调用
CanvasParticle(config);

//banner部分
//获取数据
const selectorList = document.querySelectorAll(".times-select li")
const selector = [
    { node:selectorList[1], value:1200, perPrice:"0.3000"},
    { node:selectorList[2], value:2000, perPrice:"0.2500"},
    { node:selectorList[3], value:8000, perPrice:"0.2000"}
]
// console.log(selector);

for (let i = 0; i < selector.length; i++){
    selector[i].node.addEventListener("click", (event) => {
        //添加选中样式
        const currentSel = document.querySelector(".active-sel")
        currentSel.classList.remove("active-sel")
        event.target.classList.add("active-sel")

        //渲染文本
        const price = document.querySelector(".price")
        const perPrice = document.querySelector(".perPrice")
        price.textContent = "￥"+selector[i].value
        perPrice.textContent = selector[i].perPrice
    })
}

//下拉QR
const qrbox = document.querySelector(".qrbox")
const drowDown = document.querySelector(".drowdown")

drowDown.addEventListener("mouseenter", () => {
    qrbox.style.height = "150px"
})

drowDown.addEventListener("mouseleave", () => {
    qrbox.style.height = "0"
})


//选项卡
const tabSelector = document.querySelectorAll(".tab-selector li")
console.log(tabSelector);
const apiTest = document.querySelector(".api-test")
const tableBox1 =document.querySelector(".tableBox1")
const tableBox2 =document.querySelector(".tableBox2")
const tableBox3 = document.querySelector(".tableBox3")
const json = document.querySelector(".json")

for (let i = 0; i < tabSelector.length; i++){
    tabSelector[i].addEventListener("click", (event) => {
        //修改active-tab样式
        const currentTab = document.querySelector(".active-tab")
        currentTab.classList.remove("active-tab")
        event.target.classList.add("active-tab")

        //显示选项卡
        if (i===1) {
            apiTest.style.display = "none"
            tableBox1.style.display = "block"
            tableBox2.style.display = "block"
            json.style.display = "block"
            tableBox3.style.display = "none"
        }
        else if (i === 2) {
            apiTest.style.display = "none"
            tableBox1.style.display = "none"
            tableBox2.style.display = "none"
            json.style.display = "block"
            tableBox3.style.display = "none"
        }
        else if (i === 3) {
            apiTest.style.display = "none"
            tableBox1.style.display = "none"
            tableBox2.style.display = "none"
            json.style.display = "none"
            tableBox3.style.display = "block"
        }
        else {
            apiTest.style.display = "block"
            tableBox1.style.display = "block"
            tableBox2.style.display = "block"
            json.style.display = "block"
            tableBox3.style.display = "none"
        }

        //获取tab-contain高度

        const tabContain = document.querySelector(".tab-contain")
        const tabLeft = document.querySelector(".tab-left")
        const tabRight = document.querySelector(".tab-right")


        tabContain.style.height = 47+Math.max(tabLeft.clientHeight,tabRight.clientHeight) +"px"
    })
}


