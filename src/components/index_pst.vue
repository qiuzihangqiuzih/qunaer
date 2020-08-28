<template>
    <main>
        <ul class="nav7">
            <li v-for="(item,index) in list">
                <div>
                    <img v-bind:src="item.src" alt="">
                </div>
                <span>{{item.s}}</span>
            </li>
        </ul>
        <div>更多精彩攻略<div></div></div>
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
span{
    color: #000000;
    font: 12px PingFangSC-Regular;
    display: inline-block;
    height: 40px;
}
main>div{
    width: 87%;
    height: 20px;
    text-align: center;
    font: 16px;
    color: #00D0D4;
    /* background-color: aquamarine; */
    margin: 20px auto 65px;
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
                    src:"./src/assets/images/ind101.jpg",
                    s:"探访日本，一部家庭旅行画册",
                },
                {
                    src:"./src/assets/images/ind102.jpg",
                    s:"厦门，带娃出行与幸福同行",
                },
                {
                    src:"./src/assets/images/ind103.jpg",
                    s:"带着相机去旅行，圆一场青海梦",
                },
                {
                    src:"./src/assets/images/ind104.jpg",
                    s:"陪你去三亚，陪你去天涯海角",
                },
            ]
        }
    }
}
</script>