<template id="index">
    <section>
        <div class="main">
            <div>
                <div class="hl">
                <i class="iconfont icon-sousuo"></i>
                <input type="text"  placeholder="搜索景点门票">
                </div>
                <div class="hr">
                    <img src="../assets/images/ind01.gif" alt="" width="24px">
                    <span id="down">下载app</span>
                </div>
            </div>
        </div>

        <ul class="nav1">
            <router-link to="/hotel">
                <li>
                    <img src="../assets/images/ind11.png" alt="">
                    <p>酒店</p>
                </li>
            </router-link>
            
            <router-link to="/">
                <li>
                    <img src="../assets/images/ind12.png" alt="">
                    <p>机票</p>
                </li>
            </router-link>
            <router-link to="/">
                <li>
                <img src="../assets/images/ind13.png" alt="">
                <p>火车票</p>
                </li>
            </router-link>
            <router-link to="/holiday">
                <li>
                <img src="../assets/images/ind14.png" alt="">
                <p>度假</p>
                </li>
            </router-link>
            <router-link to="/scenery">
                <li>
                    <img src="../assets/images/ind15.png" alt="">
                    <p>景点门票</p>
                </li>
            </router-link>
            
        </ul>

        <ul class="nav2">
            <li v-for="(item,index) in list2">
                <img v-bind:src="item.src" alt="">
                <p>{{item.des}}</p>
            </li>
        </ul>

        <div class="indextem">
            <!-- <h2>特惠度假</h2> -->
            <ul>
                <li  @click="changecolor()" :class='{cur:this.m==1}'>当季热门度假</li>
                <!-- <li v-on:click='a()'>当季热门度假</li> -->
                <li  @click="backcol()" :class='{cur:this.n==1}'>今日特惠度假</li>
            </ul>
            <component :is='msg'></component>
            <router-view></router-view>

            <!-- <h2>特惠门票</h2> -->
            <ul>
                <li v-on:click="changecolor1()" :class='{cur:this.o==1}'>当季景点门票</li>
                <li v-on:click="backcol1()"  :class='{cur:this.p==1}'>特惠门票</li>
            </ul>
            <!-- <ul>
                <li v-on:click='mxg="index_lt"'>当季景点门票</li>
                <li v-on:click='mxg="index_pt"'>特惠门票</li>
            </ul> -->
            <component :is='mxg'></component>
            <router-view></router-view>
        


        <div id="change">
        <mt-swipe :auto="3000">
            <mt-swipe-item><img src="../assets/images/ind121.jpg" alt="" width="100%"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/ind122.jpg" alt="" width="100%"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/ind123.jpg" alt="" width="100%"></mt-swipe-item>
            <span>广告</span>
        </mt-swipe>
        
        </div>

        <h2><i class="iconfont icon-gonglv"></i>旅游攻略</h2>
            <ul>
                <li v-on:click="changecolor2()" :class='{cur:this.q==1}'>趣味亲子游</li>
                <li v-on:click="backcol2()"  :class='{cur:this.r==1}'>旅拍也要出大片</li>
            </ul>
            <component :is='mfg'></component>
            <router-view></router-view>
        </div>
        <div class="bottom">
            <p>Copyright ©2020 Qunar.com 京公网安备</p>
            <p>11010802030542 京ICP备05021087号 京ICP证060856</p>
            <p>号 营业执照信息 (京)-非经营性-2016-0110 </p>
            <p>去哪儿网客服电话95117</p><br>
            <p>违法和不良信息举报电话：010-59606977 违法和不良信</p>
            <p>息举报邮箱：tousu@qunar.com</p>
            <br><br><br>
        </div>




        <ul class="footer">
        <!-- <li @click="backtop()" >
            <span class="iconfont icon-shouye"></span><br><router-link class="nav" to="/" >首页</router-link>
        </li> -->
        <router-link class="nav" to="/" >
            <li @click="backtop()" >
                <span class="iconfont icon-shouye"><br></span>首页<br>
            </li>
        </router-link>

        <router-link class="nav" to="/">
            <li>
                <span class="iconfont icon-dingdan"><br></span>订单<br>
            </li>
        </router-link>

        <router-link to="/cusser">
            <li>
            <span class="iconfont icon-kefu" ></span><br>客服
            </li>
        </router-link>
        
        <router-link class="nav" to="/mine">
            <li>
                <span class="iconfont icon-wode"></span><br>我的
            </li>
        </router-link>
        </ul>
    </section>
</template>

<style>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}

body{
    min-width:200px;
}
#change{
    width: 100%;
    border-radius: 5px;
    position: relative;
}
.mint-swipe-items-wrap{
    padding-bottom: 25.6%;
    width: 95%;
    margin: 10px auto 30px;
    border-radius: 5px;
    position: relative;
}
#change span{
    font: 12px PingFangSC-Regular;
    background-color: #C4D0D6;
    position: absolute;
    bottom: 0px;
    left: 0px;
}
</style>
<style scoped>
section{
    height: 100vh - 50px;
}
</style>
<style scoped>

.hl{
    float: left;
    width: 80%;
    background-color:#eeeeee ;
    padding-left: 10px;
    margin-left: 2%;
    margin-bottom: 10px;
}
.hl input{
    width: 90%;
    height: 39px;
    border: none;
    background-color:#eeeeee ;
    outline: none;
}
.hr{
    float: right;
    width: 9%;
    height: 40px;
    margin-right: 3%;
    position: relative;
}
#down{
    right: 30%;
    top: 10px;
    color: #616161;
    font-size: 12px;
}
.main{
    margin-top: 15px;
    height: 100vh - 55px;
    width: 100%;
    overflow: auto;
}
.nav1{
    overflow: hidden;
}
.nav1 li{
    width: 20%;
    float: left;
    margin-bottom: 0px;
    text-align: center;
    color: #333333;
}
.nav1 img{
    width: 70%;
}
.nav1 p{
    text-align: center;
    font-size: 13.152px;
    height: 34px;
}

.nav2{
    overflow: hidden;
}
.nav2 li{
    width: 20%;
    float: left;
    margin-bottom: 0px;
    /* background-color: cornflowerblue; */
}
.nav2 img{
    width: 45%;
    margin-left: 25%;
}
.nav2 p{
    text-align: center;
    font-size: 13.152px;
    height: 34px;
}
.indextem h2{
    color: #26282A;
    font:18px PingFangSC-Regular;
    margin: 3px 0px 8px 8px;
}
.indextem li{
    color: #666666;
    font: 12px PingFangSC-Regular;
    padding: 4px 13px;
    background-color: #ffffff;
    border-radius: 5px;
    display: inline-block;
    border: 1px solid #d7d7d7;
    margin-left: 2%;
    
}
.indextem .cur{
    background-color: #17c0c8;
    color: #FFF;
}
#chang{
    border-radius:5px; 
    width: 90%;
    margin-bottom: 50px;
}
.footer {
    height: 50px;
    width: 100%;
    position: absolute;
    position: fixed;
    bottom: -1px;
    background-color: white;
}
.bottom p{
    color: #999999;
    font:12px Arial,Helvetica;
    text-align: center;
}

.footer li{
    float: left;
    width: 25%;
    height: 55px;
    text-align: center;
    background-color:white;
    color: #616161;
    font:12px Arial,Helvetica;
}
.footer span{
    /* text-align: center; */
    line-height: 30px;
}
.footer .nav{
    font-size: .12rem;
    color: #616161;
    text-decoration:none;
    line-height: 10px;
}


</style>

<script>
import nowhol from "../components/nowhol.vue"
import nowsale from "../components/nowsale.vue"
import index_lt from "../components/index_lt.vue"
import index_pt from "../components/index_pt.vue"
import index_ft from "../components/index_ft.vue"
import index_pst from "../components/index_pst.vue"

export default{
    
    components:{
        'nowhol':nowhol,
        'nowsale':nowsale,
        'index_lt':index_lt,
        'index_pt':index_pt,
        'index_ft':index_ft,
        'index_pst':index_pst,
    },
    data(){
        
        return{
            msg:'nowhol',
            mxg:'index_lt',
            mfg:'index_ft',
            m:1,n:0,o:1,p:0,q:1,r:0,
            
            

            list2:[
                {
                    src:"./src/assets/images/ind21.png",
                    des:"海外酒店",
                },
                {
                    src:"./src/assets/images/ind22.png",
                    des:"低价机票",
                },
                {
                    src:"./src/assets/images/ind23.png",
                    des:"汽车票船票",
                },
                {
                    src:"./src/assets/images/ind24.png",
                    des:"自由行",
                },
                {
                    src:"./src/assets/images/ind25.png",
                    des:"攻略",
                },
                {
                    src:"./src/assets/images/ind31.png",
                    des:"民宿客栈",
                },
                {
                    src:"./src/assets/images/ind32.png",
                    des:"专车自驾",
                },
                {
                    src:"./src/assets/images/ind33.png",
                    des:"赚钱·信用卡",
                },
                {
                    src:"./src/assets/images/ind34.png",
                    des:"旅游团购",
                },
                {
                    src:"./src/assets/images/ind35.png",
                    des:"一日游",
                },
                {
                    src:"./src/assets/images/ind41.png",
                    des:"特惠酒店",
                },
                {
                    src:"./src/assets/images/ind42.png",
                    des:"借钱",
                },
                {
                    src:"./src/assets/images/ind43.png",
                    des:"白金卡",
                },
                {
                    src:"./src/assets/images/ind44.png",
                    des:"行程设计",
                },
                {
                    src:"./src/assets/images/ind45.png",
                    des:"周边短途",
                },

            ]

        }
    },
    methods:{
        backtop:function(){
            scrollTo(0,0);
        },
        changecolor(){
            this.msg="nowhol";
            this.n=0;
            this.m=1;
        },
        backcol(){
            this.msg="nowsale";
            this.m=0;
            this.n=1;
        },
        changecolor1(){
            this.mxg="index_lt";
            this.p=0;
            this.o=1;
        },
        backcol1(){
            this.mxg="index_pt";
            this.o=0;
            this.p=1;
        },
        changecolor2(){
            this.mfg="index_ft";
            this.r=0;
            this.q=1;
        },
        backcol2(){
            this.mfg="index_pst";
            this.q=0;
            this.r=1;
        }
    }
}
</script>
