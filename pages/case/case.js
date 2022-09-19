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

//主体内容
let dataList =
    `[    
{ "category": "finance", "img": "szyh.png", "name": "苏州银行数据API服务系统", "desc": "苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。" },
{ "category": "finance", "img": "hcfc2.png", "name": "河北幸福消金三方数据管理平台", "desc": "河北幸福消费金融股份有限公司是河北省首家批准成立的消费金融公司。公司坚持以“融入互联网生态，融入河北生态，融入股东生态”为主线，打造产品服务、内容服务和能力服务为核心目标，致力于打造一家以技术为驱动、以智慧金融和普惠金融为特色的公众公司。截至2019年底，幸福消金累计投放贷款近500亿元，全年新增270亿元。" },
{ "category": "finance", "img": "sznsyh.png", "name": "苏州农商行数据敏捷共享平台", "desc": "苏州农商银行是全国第四家A股上市的农商银行，也是银监会成立后在新监管框架下第一批挂牌开业的农村商业银行。近年来，苏州农商银行聚焦主责主业，以支农支小、服务地方经济建设为主要目标，践行了一条符合自身实际的差异化定位、特色化经营之路。在当下金融行业数字化转型的大潮中，苏州农商银行积极探索金融科技转型之道，运用互联网思维，通过智能化和不断迭代的服务，满足不同客户的多元化、个性化需求，实现差异化发展，走出自己的特色化之路。" },

{ "category": "business", "img": "zhylian.png", "name": "中国银联便民缴费内容交换平台", "desc": "中国银联（China UnionPay）成立于2002年3月，是经国务院同意，中国人民银行批准设立的中国银行卡联合组织，总部设于上海。截至2019年9月，中国银联已成为全球发卡量最大的卡组织，发行近80亿张银行卡。" },
{ "category": "business", "img": "zgtxfw.png", "name": "中通服三方数据管理平台", "desc": "本项目是建设中国通信服务股份有限公司上海分公司（以下简称“中通服”）的三方数据管理平台，通过智能数据管理平台的线上化系统，进行业务数据的有效管理，规范业务操作流程，防范业务风险，实现资源共享、高效一致的有效运作。" },
{ "category": "business", "img": "airbus.png", "name": "空客VOOM BI分析系统", "desc": "Voom 是一个由 Airbus 运营，方便、可靠的直升机订单、运营管理(B2C，B2B)平台，能给有需求的旅客提供便捷、快速的城市直升机服务。本项目涉及Voom的数据仓库和BI工具的建设，服务对象为Voom管理人员和运营人员，为Voom服务的管理决策，和日常运营的精细化改进提供数据支撑。" },

{ "category": "government", "img": "scm.png", "name": "苏城码", "desc": "中国银联（China UnionPay）成立于2002年3月，是经国务院同意，中国人民银行批准设立的中国银行卡联合组织，总部设于上海。截至2019年9月，中国银联已成为全球发卡量最大的卡组织，发行近80亿张银行卡。" },
{ "category": "government", "img": "sgaj.png", "name": "大数据防线", "desc": "华东某市公安局，高度重视智慧公安建设，依托大数据赋能警务实战。并在全国率先提出通过融合多源异构海量数据，进一步提升精准化研判、预判水平。并委托聚合数据帮助其建设智能化平台。" },
{ "category": "government", "img": "szfjg.png", "name": "市域社会治理", "desc": "华东某市获批全国首批市域社会治理现代化试点城市，紧密围绕中央、省、市决策部署，立足该市实际，突出问题导向，超前谋划、大胆探索，精准推进政法智能化深度应用，搭建统一集成、高效协同、市域一体的社会治理现代化综合指挥平台。" }

]`

const dataArr = JSON.parse(dataList)    //JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。
console.log(dataArr);

const firstRow = document.querySelector(".first-row")
const secondRow = document.querySelector(".second-row")
const thirdRow = document.querySelector(".third-row")

for (let i = 0; i < dataArr.length; i++){
    let newLi = document.createElement("li")
    newLi.innerHTML = `
    <a href="../case-details/case-details.html"></a>
    <img src="../../assets/images/${dataArr[i].img}" alt="">
    <h5>${dataArr[i].name}</h5>
    <p>${dataArr[i].desc}</p>
    <p class="btm-link">
    <span class="link">了解详情</span>
    </p>
    `

    if (dataArr[i].category === "finance") {
        firstRow.append(newLi)
    }
    else if (dataArr[i].category === "business") {
        secondRow.append(newLi)
    }
    else if (dataArr[i].category === "government") {
        thirdRow.append(newLi)
    }
}

//侧边栏

const navBox = document.querySelectorAll(".nav-box li")
console.log(navBox);
const container = document.querySelector("main")
//获取几个楼层
const floor = document.querySelectorAll(".floor")
console.log(floor);

for (let i = 0; i < navBox.length; i++){
    navBox[i].addEventListener("click", () => {
        //修改class
        for (let j = 0; j < navBox.length; j++){
            navBox[j].classList.remove("nav-active")
        }
        navBox[i].classList.add("nav-active")

        //滚动
        //offsetTop是一个只读属性，能读取元素距离offsetParent的上偏移量
        //offsetParent是定位父级
        let offsetNum
        if (i === 3) {
            offsetNum = floor[i].offsetTop+1600
        }
        else {
            offsetNum = floor[i].offsetTop+390
        }
        window.scrollTo({
            top: offsetNum,
            behavior:"smooth"
        })
    })
}