<template>
    <main>
        <ul class="nav3">
        <li v-for="(item,index) in list ">
            <div class="current">
                <img v-bind:src="item.src" alt="">
            </div>
            <span>{{item.s}}</span><br>
            <b>{{item.b}}</b>
            <u>{{item.u}}</u>
        </li>
    </ul>
    <div>更多特惠度假<div></div></div>
    </main>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.nav3{
    overflow: hidden;
    margin-top: 7px;
}
.nav3 li{
    float: left;
    width: 46%;
    margin-right: 2%;
    margin-left: 2%;
    position: relative;
    /* background-color: cyan; */
}
.nav3 img{
    width: 100%;
    border-radius: 5px;
}
.current{
    width: 100%;
    position: relative;
}
.current1{
    position: absolute;
    height: 37px;
    width: 60%;
    bottom: 4px;
    margin-left: 20%;
    background-color: #00000099;
    
    /* background-color: darkorange; */
}

.nav3 span{
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0px;
    font-size: 12px;
    color: #000000;
    
}
.nav3 b{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #555555;
    font: 12px PingFangSC-Regular;
}
.nav3 u{
    text-decoration:none;
    color: #FF7400;
    font: 15.36px arial,sans-serif;
}
main>div{
    width: 87%;
    height: 20px;
    text-align: center;
    font: 14px;
    color: #00D0D4;
    /* background-color: aquamarine; */
    margin: 20px auto 15px;
    padding: 10px;
    border: 1px solid #00D0D4;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
}
main>div div{
    height: 4px;
    width: 4px;
    border-right: 1px solid #00D0D4; 
    border-bottom: 1px solid #00D0D4; 
    transform: rotate(-45deg); 
    position: absolute;
    bottom: 15px;
    left: 65%;
}
</style>

<script>
export default{
    data(){
        return{
            list:[
            {
                src:"./src/assets/images/ind53.jpg",
                s:"广州-清远 1天跟团游",
                b:"清远网红打卡胜地：天子山瀑布、嗨8欢乐王国、彩虹滑道、天子飞龙",
                u:"￥148起"
            },
            {
                src:"./src/assets/images/ind63.jpg",
                s:"广州-清远 1天跟团游	",
                b:"〖广州出发〗清远清泉湾漂流一天游",
                u:"￥128起"
            },
            {
                src:"./src/assets/images/ind54.jpg",
                s:"广州-清远 2天跟团游	",
                b:"入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧",
                u:"￥308起"
            },
            
            {
                src:"./src/assets/images/ind64.jpg",
                s:"广州-清远 2天跟团游",
                b:"〖新银盏直通车〗入住清远新银盏温泉酒店（含无限次温泉、2自助餐）",
                u:"￥298起"
            },
        ]
        }
    }
}
</script>

