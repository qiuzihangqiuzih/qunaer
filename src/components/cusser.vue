<template>
    <section>
        <header>
            
                <router-link class="nav" to="/" >
                     <span class="iconfont icon-fanhui1" id="back"></span>
                </router-link>
            
            <ul class="hea">
                <li v-on:click="changecolor()" :class='{cur:this.m==1}'>订单服务</li>
                <li v-on:click="backcol()"  :class='{cur:this.m==2}'>产品咨询</li>
            </ul>
            <i class="iconfont icon-dianhua" id="tel"></i>
        </header>
        <component :is='msg'></component>
    </section>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
#back{
    font-size: 40px;
    color:#77FFFF ;
}
#tel{
    font-size: 30px;
    color:#77FFFF ;
}
header{
    width: 100%;
    background-color:#00bcd4 ;
    height: 55px;
    overflow: hidden;
}
header span{
    float: left;
    width: 13%;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    margin: 15px 0px 0px 1%;
}
header i{
    float: right;
    width: 13%;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    margin: 15px auto;
}
.hea{
    width:70%;
    margin:9px auto 6px;
    display: inline-block;
}
.hea li{
    float: left;
    width: 47%;
    height: 35px;
    background-color: #00bcd4;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    border-radius: 3px;
    border: 1px solid #ffffff;
}
.hea .cur{
    background-color: #ffffff;
    color: #00bcd4;
}
</style>

<script>
import cusser_con from "../components/cusser_con.vue"
import cusser_book from "../components/cusser_book.vue"
export default{

    components:{
        'cusser_con':cusser_con,
        'cusser_book':cusser_book,
    },
    data(){
        return{
            msg:'cusser_con',
            m:2,
        }
    },
    methods:{
        changecolor(){
            this.msg="cusser_book";
            this.m=1;
        },
        backcol(){
            this.msg="cusser_con";
            this.m=2;
        }
    }
    
}
</script>