<template>
    <main>
        <ul class="nav7">
            <li v-for="(item,index) in list">
                <div class="current">
                    <img v-bind:src="item.src" alt="">
                </div>
                <span>{{item.s}}</span>
                <p>{{item.p}}</p>
                <b>{{item.b}}</b>
            </li>
        </ul>
        <div>更多特惠门票<div></div></div>
    </main>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.nav7{
    overflow: hidden;
}
.nav7 li{
    float: left;
    width: 46%;
    margin-right: 2%;
    margin-left: 2%;
    position: relative;
}
.nav7 img{
    width: 100%;
    margin-top:7px ;
    border-radius: 5px;
}
.current{
    width: 100%;
}
span{
    color: #000000;
    font: 12px PingFangSC-Regular;
}
p{
    color: #555555;
    font: 12px PingFangSC-Regular;
}
b{
    color: #FF7400;
    font: 15.36;
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
                    src:"./src/assets/images/ind81.jpg",
                    s:"长隆水上乐园",
                    p:"全球必去的水上乐园",
                    b:"￥99",
                },
                {
                    src:"./src/assets/images/ind82.jpg",
                    s:"长隆野生动物世界",
                    p:"奇妙的朋友与您共享欢乐时光",
                    b:"￥243",
                },
                {
                    src:"./src/assets/images/ind83.jpg",
                    s:"古龙峡漂流长隆水上乐园",
                    p:"广东漂流看清远，清远漂流看古龙",
                    b:"￥147",
                },
                {
                    src:"./src/assets/images/ind84.jpg",
                    s:"闸坡大角湾",
                    p:"阳光灿烂，沙质均匀松软，海水清澈纯净",
                    b:"￥46",
                },
            ]
        }
    }
}
</script>