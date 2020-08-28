<template>
    <section>
        <div class="header">
            <router-link class="nav" to="/" >
                <span class="iconfont icon-fanhui" id="back"></span>
            </router-link>
            
            <div>
                <img src="../assets/images/mine1.png" alt="" width="100%">
            </div>
            <!-- <p>登录/注册</p> -->
            <p><router-link to="/login" id="login">登录/注册</router-link></p>
        </div>
        <div class="wal">
            <b><i class="iconfont icon-weibiaoti--" id="wall"></i></b>
            <span>我的钱包</span>
        </div>
        <div class="walcon">
            <ul>
                <li>
                    <span>0.00</span>
                    <p>账户余额</p>
                </li>
                <li>
                    <span>0</span>
                    <p>星券</p>
                </li>
                <li>
                    <span>0</span><b>张</b>
                    <p>银行卡</p>
                </li>
            </ul>
        </div>

        <ul class="con">
            <li>
                <i class="iconfont icon-icon2-copy"></i>
                <div>我的订单
                    <b class="iconfont icon-fanhui"></b>
                </div>
            </li>
            <li>
                <i class="iconfont icon-wodetuikuan"></i>
                <div>我的退款
                    <b class="iconfont icon-fanhui"></b>
                </div>
            </li>
            <li>
                <i class="iconfont icon-wodefapiao"></i>
                <div>我的发票
                    <b class="iconfont icon-fanhui"></b>
                </div>
            </li>
            <li>
                <i class="iconfont icon-wodegonglve"></i>
                <div>我的攻略
                    <b class="iconfont icon-fanhui"></b>
                </div>
            </li>
            </ul>
            <ul class="con1">
            <li>
                <i class="iconfont icon-feedback"></i>
                <div>意见反馈
                    <b class="iconfont icon-fanhui"></b>
                </div>
                
            </li>
            <li>
                <i class="iconfont icon-icon"></i>
                <div>关于去哪儿网
                    <b class="iconfont icon-fanhui"></b>
                </div>
            </li>
        </ul>
    <p class="fot">Qunar京ICP备05021087<b>电脑版</b></p>
    </section>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
section{
    background-color: #ebeced;
    overflow: hidden;
}
.header{
    overflow: hidden;
    width: 100%;
    height: 165px;
    background:url(../assets/images/mine.jpg) no-repeat center bottom ; 
    background-size: 100% 300%;
    padding-top:15px;
    margin-bottom: 10px;
}
.nav{
    text-decoration:none;
}
#back{
    color: #FFFFFF;
    font: 20px usercent_mobile;
    margin-left: 3%;
    text-decoration:none;
}
.header div{
    height: 71px;
    width: 71px;
    margin: 15px auto 5px;
    border-radius: 50%;
    border: 2px solid #93b5e0;
}
.header p{
    text-align: center;
    color: #FFFFFF; 
}
.header a{
    text-decoration:none;
    color: #FFFFFF;
    font: 14px "Helvetica Neue",Helvetica ;
}
.wal{
    height: 40px;
    width: 100%;
    background-color: #ffffff;
    border-bottom:2px solid #ebeced;
    line-height: 32px;
}
.wal i{
    color:#FFFFFF;
    font: 18px usercenter_mobile;
    margin: 5px;

}
.wal b{
    display: inline-block;
    width: 29px;
    height: 29px;
    background-color: #ff7043;
    margin-left: 3%;
    margin-right: 3%;
    margin-top: 2%;
    border-radius: 40%;
}
.wal span{
    color: #4d4d4d;
    font-size:16px;
}
.walcon{
    height: 80px;
    width:  100%;
    background-color: #FFFFFF;
}
.walcon ul{
    overflow: hidden;
    padding: 20px;
}
.walcon li{
    width: 33.33%;
    float: left;
    text-align: center;
}
.walcon span{
    color: #4d4d4d;
    font: 16px "Helvetica Neue",Helvetica;
    margin-bottom: 50px;
}
.walcon p{
    color: #888888;
    margin-top: 5px;
    font: 12px "Helvetica Neue",Helvetica ;
}
.walcon b{
    color: #4d4d4d;
    font: 10px "Helvetica Neue",Helvetica;
    margin-bottom: 10px;
    /* font-size: 3px; */
}
.con{
    overflow: hidden;
    background-color: #ffffff;
    margin-bottom: 10px;
    margin-top: 10px;
}
.con1{
    overflow: hidden;
    background-color: #ffffff;
}
.con li{
    width: 100%;
    line-height: 45px;
    position: relative;
}
.con1 li{
    width: 100%;
    line-height: 45px;
    position: relative;
}
.con li:nth-of-type(4){
    height: 39px;
}
.con1 li:nth-of-type(2){
    height: 39px;
}
.con i,.con1 i{
    font-size: 20px;
    position: absolute;
    float: left;
    margin-right: 3%;
    left: 3%;
}
.con div,.con1 div{
    display: inline-block;
    height: 42px;
    width: 89%;
    border-bottom: 1px solid #ebeced;
    float: right;
    color: #4d4d4d;
}
.con b,.con1 b{
    float: right;
    margin-right: 7%;
    transform: rotate(180deg);
    font-size: 12px;
    color: #C7C7CC;
}
.fot{
    margin-top: 70px;
    text-align: center;
    position: relative;
    color: #bfbfbf;
    font-size: 12px;
    margin-bottom: 26px;
}
.fot b{
    /* margin-left: 5%; */
    float: right;
    right: 4%;
    position: absolute;
    color: #3dadc1;
    font:12px "Helvetica Neue",Helvetica;
}
</style>>

