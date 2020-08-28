<template>
<main>
    <ul class="nav">
        <li v-for="(item,index) in list">
            <span class="iconfont">{{item.b}}</span>
            <p>{{item.s}}</p>
        </li>
    </ul>
    <p class="often">常见问题</p>
    <ul class="oque">
        <li v-for="(item,index) in list2">
            <span class="iconfont">{{item.s}}</span>
            <span>{{item.i}}</span>
        </li>
    </ul>
    <p class="bot">点击登录，享受更多服务</p>
    <button>登录</button>
</main>
</template>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    main{
        overflow: hidden;
        background: #eceef0;
    }
    .nav{
        overflow: hidden;
        width: 100%;
        padding-top: 15px;
        background: #ffffff;
    }
    .nav li{
        float:left;
        width: 25%;
        /* background-color: cornflowerblue; */
        overflow: hidden;
        margin-bottom: 17px;
    }
    .nav span{
        width: 100%;
        height: 30px;
        font:40px yofont;
        display: inline;
        margin-left: 30%;
                
    }
    .nav p{
        color: #666666;
        width: 100%;
        height: 15px;
        font: 12px "Heiti SC Light","Helvetica Neue";
        text-align: center;
    }
    .often{
        /* background: #eceef0; */
        padding: 17px;
        color: #666;
        font:12px "Heiti SC Light","Helvetica Neue";
    }
    .oque li{
        width: 100%;
        padding: 12px;
        background: #ffffff;
        border-bottom: 1px solid #eceef0;
    }
    .bot{
        margin-top: 110px;
        padding: 13px;
        color: #888888;
        font:12px "Heiti SC Light","Helvetica Neue";
    }
    button{
        width: 90%;
        height: 45px;
        text-align: center;
        margin-left: 5%;
        color: #1BA9BA;
        background:#ffffff ;
        border: none;
        border-radius: 5px;
        margin-bottom: 30px;
        font:16px "Heiti SC Light","Helvetica Neue";
    }
</style>




<script>
export default{
    data(){
        return{
            list:[
                {
                    b:"\ue508",
                    s:"机票问题",
                },
                {
                    b:"\ue507",
                    s:"酒店问题",
                },
                {
                    b:"\ue679",
                    s:"火车票问题",
                },
                {
                    b:"\ue637",
                    s:"门票问题",
                },
                {
                    b:"\ue508",
                    s:"度假问题",
                },
                {
                    b:"\ue57d",
                    s:"用车问题",
                },
                {
                    b:"\ue67d",
                    s:"账号问题",
                },
                {
                    b:"\ue60d",
                    s:"其他",
                },
            ],
            list2:[
                {
                    s:"\ue508",
                    i:"闪游卡",
                },
                {
                    s:"\ue508",
                    i:"实名认证",
                },
                {
                    s:"\ue508",
                    i:"返现金额如何提现",
                },
                {
                    s:"\ue508",
                    i:"账户安全险问题",
                },
                {
                    s:"\ue508",
                    i:"找不到订单",
                },
                {
                    s:"\ue508",
                    i:"火车票退票手续费怎么算",
                },
                {
                    s:"\ue508",
                    i:"到店无法入住",
                },

            ]
        }
    }
}
</script>