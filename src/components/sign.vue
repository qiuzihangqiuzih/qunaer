<template> 
<section>
    <router-link to="/sign"></router-link>
    <div class="header">
        <h1><router-link to="/login"><span></span></router-link>注册</h1>
    </div>
    <div class="con">
        <p>
            <span>手机号</span><input type="text" maxlength="11" placeholder="请输入手机号">
        </p>
        <p>
            <span>图形码</span><input type="text" maxlength="6" placeholder="请输入图形码"><img src="../assets/images/sign1.jpg" alt="">
        </p>
        <p>
            <span>验证码</span><input type="text" maxlength="6" placeholder="请输入验证码"><button id="btn">获取验证码</button>
        </p>
    </div>
    <button id="sign">注册</button>
    <div class="consent">同意注册去哪儿 <a href="#">用户服务协议</a> 和 <a href="#"> 隐私政策</a></div>
    <div class="about"><span>电脑版</span><span>关于我们</span></div>
    <div class="qun">Qunar 京ICP备05021087</div>
</section>
</template>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
section{
    width: 100%;
    overflow: hidden;
}
.header{
    width: 100%;
    background-color: #18a9b9;
    margin-bottom: 10px;
    padding-left: 13px;
    overflow: hidden;
}
.header span{
    float: left;
    height: 10px;
    width: 10px;
    display: inline-block;
    border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    margin-top: 15px;
    transform: rotate(135deg);
}

.header h1{
    display: inline-block;
    width: 100%;
    font-size: 18px;
    text-align: center;
    line-height: 44px;
    color: #FFFFFF;
}
.con{
    height: 137px;
    width: 100%;
    padding-left: 11px;
    /* background-color: blanchedalmond; */
    border: 1px solid #dddddd;
    margin-bottom: 16px;
}
.con p{
   
    padding-top: 10px;
    border-bottom: 1px solid #dddddd;
    /* padding-top: 3%; */
    /* margin-top: 10%; */
    position: relative;
    padding-bottom: 14px;
}
.con span{
        width: 30%;
        margin-right: 10%;  
        line-height: 33.33%;
        margin-top: 15%;
        font-size: 16px;
        color:#19A9BA ;
}
img{
    top: 7px;
    position: absolute;
    right: 15px;
    border-radius :3px;
}
input{
    width: 40%;
    line-height: 33.33%;
    font-size: 16px;
    border: none;
    outline:none;
}
#btn{
    width: 120px;
    height: 30px;
    font-size: 14px;
    background-color: #ffffff;
    color: #d7dce0;
    position: absolute;
    right: 15px;
    border: 1px solid #ccc;
    border-radius :3px;
}
#sign{
    height: 50px;
    width: 94%;
    color: #fff;
    font-size: 18px;
    background-color: #85d1db;
    border: 1px solid #ccc;
    margin: 0px 3%;
    margin-bottom: 27px;
    border-radius: 4px;
}
.consent{
    font-size: 12px;
    margin: 0px auto;
    width: 65%;
    color: #9E9E9E;
    margin: 0px auto;
    margin-bottom: 345px;

}
a{
    color: #9E9E9E;
}
.about{
    width: 100%;
    margin-bottom: 15px;
}
.about span{
    padding-left: 25%;
    /* margin-bottom: 30px; */
    font-size: 13px;
    color: #25A4BB;
    margin-bottom: 16px;
}
.qun{
    width: 100%;
    font-size: 12px;
    margin: 0px auto;
    color: #D4D9DE;
    text-align: center;
    padding-top: 12px;
    border-top:1px solid  ;
}
</style>
