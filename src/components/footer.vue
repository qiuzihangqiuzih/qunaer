<template>
    <main>
    <ul>
        <li>
            <span class="iconfont icon-shouye"></span><br><router-link class="nav" to="/index">首页</router-link>
        </li>
        <li>
            <span class="iconfont icon-dingdan"></span><br><router-link class="nav" to="/order">订单</router-link>
        </li>
        <li>
            <span class="iconfont icon-kefu" ></span><br><router-link class="nav" to="/service">客服</router-link>
        </li>
        <li>
            <span class="iconfont icon-wode"></span><br><router-link class="nav" to="/mine">我的</router-link>
        </li>
    </ul>
    </main>

</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
ul{
    height: 55px;
    width: 100%;
}
li{
    float: left;
    width: 25%;
    height: 55px;
    text-align: center;
    background-color: pink;
}
.nav{
    font-size: .12rem;
    color: #616161;
    text-decoration:none
    /* line-height: 55px; */
}
</style>

