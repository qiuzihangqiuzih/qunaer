<template>
    <main>
        <ul class="nav3">
        <li v-for="(item,index) in list ">
            <div class="current">
                <img v-bind:src="item.src" alt="">
                <div class="current1">
                    <p>{{item.p}}</p>
                    <span>{{item.s}}</span>
                </div>
            </div>
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
    /* padding: 2%; */
    margin-top: 7px;
}
.nav3 li{
    float: left;
    width: 46%;
    margin-right: 2%;
    margin-left: 2%;
    position: relative;
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
.current1 P{
    text-align: center;
    color: #FFFFFF;
    font-size: 15.456px;
}
.current1 span{
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0px;
    color: #FFDE00;
    font-size: 12px;
    
}
.nav3 b{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #000000;
    font-size: 15.456px;
}
.nav3 u{
    text-decoration:none;
    color: #FF7400;
    font: 19.872px arial,sans-serif;
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
                src:"./src/assets/images/ind51.jpg",
                p:"广州",
                s:"5天跟团游",
                b:"含4晚住宿",
                u:"￥ 1873"
            },
            {
                src:"./src/assets/images/ind62.jpg",
                p:"广州-惠州",
                s:"5天跟团游",
                b:"含4晚住宿",
                u:"￥ 3608"
            },
            {
                src:"./src/assets/images/ind61.jpg",
                p:"广州-清远",
                s:"5天跟团游",
                b:"含4晚住宿",
                u:"￥ 2705"
            },
            {
                src:"./src/assets/images/ind52.jpg",
                p:"广州-丽江",
                s:"8天跟团游",
                b:"含往返飞机票(含税)+7晚住宿",
                u:"￥ 2235"
            },
            
            
        ]
        }
    }
}
</script>

