//图片部分

//toggleChange()的作用就是切换自动播放
const toggleChange = (function () { //timer用来开启和关闭定时器，timer为null时就没开启定时器
    let timer = null    //为防止timer被其他对象修改，这里把它放在一个闭包中

    return function () {     //如果不作为返回值返回给toggleChange，外界也无法调用这个函数
        if (timer === null) {
            timer = setTimeout(function auto() {
                switchFn("next")
                timer = setTimeout(auto, 2000)
            }, 2000)
        }
        else {
            clearTimeout(timer)
            timer = null
        }

    }
})()    //最后一个()表示立即调用此函数

toggleChange()

//获取outer

const outer = document.getElementsByClassName("outer")[0]

outer.onmouseenter = () => {
    toggleChange()
}

outer.onmouseleave = () => {
    toggleChange()
}


//左右按钮部分
const prevBtn = document.querySelector(".prev-img")
const nextBtn = document.querySelector(".next-img")
// console.log(prevBtn);
console.log(3333)
prevBtn.addEventListener("click", () => {
    console.log(111222)
    switchFn("prev")
    console.log(1);
})
prevBtn.addEventListener("click", () => {
    console.log(111222)
    switchFn("prev")
    console.log(1);
})

nextBtn.addEventListener("click", () => {
    console.log(1);
    switchFn("next")
})


function switchFn(para) {
    //显示的图片
    const current = document.querySelector(".current")
    //获取图片数组
    const imgArray = Array.from(document.querySelectorAll(".banner-img-list li"))


    let dir //新声明一个变量来获取要切换的对象
    if (para == "prev") {
        dir = current.previousElementSibling ||
            imgArray[2]
    }
    else if (para == "next") {
        dir = current.nextElementSibling ||
            imgArray[0]
    }
    else if (typeof para === "number") {
        dir = imgArray[para]
    }

    //获取要显示图片的索引
    const index = imgArray.indexOf(dir)

    //切换图片
    current.classList.remove("current")
    dir.classList.add("current")

    //按钮class切换
    //选中的按钮
    const currentBtn = document.querySelector(".currentBtn")
    currentBtn.classList.remove("currentBtn")

    //获取下一个要显示的点
    bottomBtn[index].classList.add("currentBtn")
}

//底部按钮部分
//获取点的数组
const bottomBtn = Array.from(document.querySelectorAll(".banner .outer a"))

//事件委派给document
document.addEventListener("click", (event) => {
    //获取当前点击的点在bottomBtn中的索引
    const index = bottomBtn.indexOf(event.target)
    //判断点击是否是点
    if (index !== -1) {

        //切换图片和按钮直接调用switchFn()
        switchFn(index)
    }
})


/* api分类 */

//获取盒子的数组
const apiContainer1 = Array.from(document.querySelectorAll(".api-container1 div"))
const apiContainer2 = Array.from(document.querySelectorAll(".api-container2 div"))
const apiList = apiContainer1.concat(apiContainer2)

//绑定移入事件
for (let i = 0; i < apiList.length; i++){
    apiList[i].addEventListener("mouseenter", () => {
        //修改背景和字体颜色
        apiList[i].style.backgroundColor = "rgb(47, 126, 233)";
        apiList[i].lastElementChild.style.color = "#fff"
        //修改图片
        let oldSrc = apiList[i].firstElementChild.src
        newSrc = oldSrc.substring(0, oldSrc.lastIndexOf('.')) + '-c.svg'
        apiList[i].firstElementChild.src = newSrc

    })
}

//绑定移出事件
for (let i = 0; i < apiList.length; i++){
    apiList[i].addEventListener("mouseleave", () => {
        //修改背景和字体颜色
        apiList[i].style.backgroundColor = "#fff";
        apiList[i].lastElementChild.style.color = "#181818"
        //修改图片
        let oldSrc = apiList[i].firstElementChild.src
        newSrc = oldSrc.substring(0, oldSrc.indexOf('-')) + '.svg'
        apiList[i].firstElementChild.src = newSrc
    })
}

/* 合作企业 */

setTimeout(function auto() {
    //获取正在显示的和下一个显示的
    const currentCon = document.querySelector(".current-content") 
    // console.log(currentCon);
    const nextCon = currentCon.nextElementSibling || document.querySelector(".content-bc1")
    // console.log(nextCon);
    //修改它们的类
    currentCon.classList.toggle("current-content")
    nextCon.classList.toggle("current-content")
    setTimeout(auto,3000)
}, 3000)

/* 回到顶部按钮 */
const returnBtn = document.querySelector(".return-btn")
// console.log(returnBtn);

//按钮出现与消失
window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        returnBtn.style.display = "block"
    }
    else {
        returnBtn.style.display = "none"  
    }
})
//按钮点击事件
returnBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"  
    })
})