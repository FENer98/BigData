
//登录验证
let reg = /^\w\w{4,10}\w$/
const user = document.querySelector("#user")
const pass = document.querySelector("#pass")
const userRes = document.querySelector(".user-res")
const passRes = document.querySelector(".pass-res")

//用户名验证
user.addEventListener("blur", () => {
    if (reg.test(user.value)) {
        userRes.textContent = "恭喜您，用户名可用"
        userRes.style.color = "green" 
    }
    else if (!reg.test(user.value)) {
        userRes.textContent = "请输入6-12位字母或数字"
        userRes.style.color = "red" 
    }
})

//密码验证
pass.addEventListener("blur", () => {  
    if (reg.test(pass.value)) {
        passRes.textContent = "恭喜您，密码可用"
        passRes.style.color = "green" 
    }
    else if (!reg.test(pass.value)) {
        passRes.textContent = "请输入6-12位字母或数字"
        passRes.style.color = "red" 
    }
})

//登录跳转
const loginBtn = document.querySelector(".login-btn")

loginBtn.addEventListener("click", event => {
    event.preventDefault()
    if (reg.test(user.value) && reg.test(pass.value)) {
        location.assign('../../pages/home/home.html')
    }
})

//删除内容
const userDelBtn = document.querySelector(".user-delBtn")
const passDelBtn = document.querySelector(".pass-delBtn")

userDelBtn.style.cursor = "pointer"
passDelBtn.style.cursor = "pointer"

userDelBtn.onclick = () => {
    user.value = ''
    userRes.textContent = ''
}
passDelBtn.onclick = () => {
    pass.value = ''
    passRes.textContent = ''
}


const loginSelector = document.querySelector(".login-selector")
const logupSelector = document.querySelector(".logup-selector")
const loginSec = document.querySelector(".login-sec")
const logupSec = document.querySelector(".logup-sec")

//选项卡弹出登录界面
loginSelector.onclick = () => {
    loginSec.classList.add("active-sec")
    logupSec.classList.remove("active-sec")

    loginSelector.classList.add("active-sel")
    logupSelector.classList.remove("active-sel")
}
//选项卡弹出扫码界面
logupSelector.onclick = () => {
    logupSec.classList.add("active-sec")
    loginSec.classList.remove("active-sec")

    logupSelector.classList.add("active-sel")
    loginSelector.classList.remove("active-sel")
}