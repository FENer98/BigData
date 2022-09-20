//获取输入框
const user = document.getElementById("user")
const telNum = document.getElementById("telNum")
const text = document.getElementById("text")
const password = document.getElementById("password")

//获取clearbtn
const userClear = document.querySelector(".userClear")
const telClear = document.querySelector(".telClear")
const textClear = document.querySelector(".textClear")
const passClear = document.querySelector(".passClear")

//正则
userReg = /^\w\w{4,18}\w$/
telReg = /^\d\d{9}\d$/
textReg = /^\w\w{2}\w$/
passReg = /^\w\w{4,10}\w$/

//错误信息
const userError = document.querySelector(".userError")
const telError = document.querySelector(".telError")
const textError = document.querySelector(".textError")
const passError = document.querySelector(".passError")


//用数组存储
let formArr = [
    [user, userClear,userReg,userError],
    [telNum, telClear,telReg,telError],
    [text, textClear,textReg,textError],
    [password,passClear,passReg,passError]
]


//删除按钮出现与消失
for (let i = 0; i < formArr.length; i++) {
    formArr[i][0].addEventListener("input", () => {
        if (formArr[i][0].value === '') {
            formArr[i][1].style.display = "none"
        }
        else {
            formArr[i][1].style.display = "block"
        }
    })

    formArr[i][1].addEventListener("click", () => {
        formArr[i][0].value = ''
        formArr[i][1].style.display = "none"
    })

    
}

//表单验证
for (let i = 0; i < formArr.length; i++){
    formArr[i][0].addEventListener("blur", () => {
        if (!formArr[i][2].test(formArr[i][0].value)) {
            formArr[i][3].style.display = "block"
        }
        else {
            formArr[i][3].style.display = "none"
        }
    })
}

//注册按钮显示
const btn = document.getElementById("btn")
const policyBtn = document.getElementById("policyBtn")

policyBtn.addEventListener("change", () => {
    if (policyBtn.checked === true) {
        console.log(1);
        btn.classList.add("active-btn")
    }
    else {
        btn.classList.remove("active-btn")
    }
})


