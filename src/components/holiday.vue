<template>
	<main>
	<div class="ac">
	<div class="a">
		<router-link to="/">
		<img src="../assets/images/holiday/iholiday4.png" alt="" class="img1">
		</router-link>
		<img src="../assets/images/holiday/iholiday1.png" alt="" class="img3">
		<div class="b">
		<span class="aa">旅游度假</span>
		<span></span>
		<span>广州站</span>
		<img src="../assets/images/holiday/iholiday3.png" alt="" class="img2">
		</div>
	</div>
	<div class="c">
		<img src="../assets/images/holiday/iholiday5.png" alt="">
		<input type="text" placeholder="搜索目的地享首单立减">
	</div>
	</div>
	<div class="jkl">
	<mt-swipe :auto="4000">
	  <mt-swipe-item><img src="../assets/images/holiday/holiday01.jpg" alt=""></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/images/holiday/holiday02.jpg" alt=""></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/images/holiday/holiday03.jpg" alt=""></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/images/holiday/holiday04.jpg" alt=""></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/images/holiday/holiday05.jpg" alt=""></mt-swipe-item>
	</mt-swipe>
	</div>
	<div class="e">
		<h3>当季热门目的地</h3>
		<ul>
			<li><img src="../assets/images/holiday/holiday11.jpg" alt=""><div class="ee"><p>丽江</p><p>2308人喜欢</p></div></l>
			<li><img src="../assets/images/holiday/holiday12.jpg" alt=""><div class="ee"><p>桂林</p><p>2308人喜欢</p></div></l>
			<li><img src="../assets/images/holiday/holiday13.jpg" alt=""><div class="ee"><p>张家界</p><p>2308人喜欢</p></div></l>
			<li><img src="../assets/images/holiday/holiday14.jpg" alt=""><div class="ee"><p>巴厘岛</p><p>2308人喜欢</p></div></l>
			<li><img src="../assets/images/holiday/holiday15.jpg" alt=""><div class="ee"><p>马尔代夫</p><p>2308人喜欢</p></div></l>
			<li><img src="../assets/images/holiday/holiday16.jpg" alt=""><div class="ee"><p>塞班岛</p><p>2308人喜欢</p></div></li>
		</ul>
	</div>
	<ul class="f">
		<li>北京</li>
		<li>三亚</li>
		<li>杭州</li>
		<li>上海</li>
		<li>普吉岛</li>
		<li>沙巴</li>
		<li>巽寮湾</li>
		<li>清远</li>
	</ul>
	<div class="g">
		<ul>
			<li><img src="../assets/images/holiday/holiday21.png" alt=""></li>
			<li><img src="../assets/images/holiday/holiday22.png" alt=""></li>
			<li><img src="../assets/images/holiday/holiday23.png" alt=""></li>
			<li class="gg"><img src="../assets/images/holiday/holiday24.png" alt=""></li>
		</ul>
	</div>
	<div class="h">
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.src" alt="">
				<p>{{item.p}}</p>
			</li>
		</ul>
	</div>

	<div class="i">
		<ul>
		<li>
			<router-link to="/holiday1" @click="change()">尾单特惠</router-link>
		</li>
		<li>
			<router-link to="/holiday2">超值自由行</router-link>
		</li>
		</ul>
		<router-view></router-view>
	</div>
	<div class="j">
		<img src="../assets/images/holiday/iholiday22.png" alt="">
	</div>

	<div class="k">
		<ul>
			<li><img src="../assets/images/holiday/iholiday6.png" alt=""><p>度假</p></li>
				<li><img src="../assets/images/holiday/iholiday8.png" alt=""><p>好货</p></li>
				<li><router-link to="/buy"><img src="../assets/images/holiday/iholiday7.png" alt=""><p>特卖</p></router-link></li>
				<li><img src="../assets/images/holiday/iholiday9.png" alt=""><p>我的</p></li>
			</ul>
	</div>
	</main>
</template>

<script>
	export default{
		data(){
            return{
                list:[
                     {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                      {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                      {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                     {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                      {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                      {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                     {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                     {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                      {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                     {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                      {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                     {
                        src:'./src/assets/images/holiday/iholiday6.png',
                        p:'周边游'
                    },
                    ],
            }           
        },
        methods:{
        	change(){
        		$('html,body').animate({'scrollTop':$('.router-link-exact-active').offset().top});
        		$('li').css('background','pink');
        	}
        }
	}

</script>



<style scoped>
.ac{
		width:100%;
	}
	.a{
		width: 100%;	
		overflow:hidden;
		margin-bottom:10px;

	}
	.aa{
		color:#616161;
	}
	.b{
		width:50%;
		margin-left:auto;
		margin-right:auto;
		margin-top:3%;
		text-align:center;

	}
	.img1{
		width: 10%;
		float:left;
	}
	.img2{
		width:10%;
	}
	.img3{
		width:10%;
		float:right;
	}
	.c{
		width:86%;
		margin-left:7%;
		font-size:20px;
		border-radius: 50px;
		padding-top:7px;
		padding-bottom:7px;
		border:1px solid #616161;
		margin-bottom:10px;
	}
	.ac{
		background:#fff;
		position:fixed;
		z-index:1000;
		left:0px;
		top:0px;
	}
	.c input{
		border:1px solid #fff;
	}
	.c img{
		width:20px;
		margin-left:5px;
		margin-top:3px;
		float:left;
	}
	.e{
		width:92%;
		margin-left:7%;
		margin-top:20px;
	}
	.e ul{
		margin-top:15px;
		overflow:hidden;

	}
	.e ul li{
		width:30%;
		float:left;
		margin-right:2%;
		position:relative;
		margin-bottom:15px;
	}
	.e img{
		width:100%;
	}
	.ee{
		position:absolute;
		background:#fff;
		width:80%;
		left:10%;
		bottom:-10%;
		padding-top:6%;
		padding-bottom:6%;
		font-size:15px;
		border:0.5px solid #a9a9a9;
	}
	.ee p{
		text-align:center;
	}
	.f{
		width:90%;
		margin-left:5%;
		margin-top:8%;
		overflow:hidden;
	}
	.f li{
		float:left;
		width:25%;
		margin-bottom:25px;
		text-align:center;
		font-size:13px;
	}
	.g{
		width:90%;
		margin-left:5%;
		overflow:hidden;
	}
	.g ul{
		width:100%;
		overflow:hidden;
	}
	.g li{
		width:22%;
		float:left;
		margin-right:3.77%;
	}
	.g .gg{
		margin-right:0px;
	}
	.g li img{
		width:100%;
	}
	.h{
		width:100%;
	}
	.h ul{
		width:100%;
	}
	.h li{
		width:16%;
		text-align:center;
		padding-top:15px;
		padding-bottom:15px;
		float:left;
		margin-right:1px;
		font-size:13px;
	}
	.h img{
		width:50%;
	}
	.i{
		width:100%;
		overflow:hidden;
		padding-top:25px;
		margin-bottom:100px;
	}
	.i li{
		width:50%;
		float:left;
		text-align:center;
		padding-top:10px;
		padding-bottom:10px;
	}
	.i a{
		text-decoration:none;
		color:black;
	}
	.i .router-link-exact-active{
		color:#15b6cc;
	}
	.i .router-link-active{
		color:#15b6cc;
	}
	.j{
		position:fixed;
		right:30px;
		bottom:80px;
		width:10%;
		border-radius: 50%;
		background:#15b6cc;
		opacity:0.9;
	}
	.j img{
		width:100%;
	}
	.k ul{
		width:100%;
		overflow:hidden;
		position:fixed;
		left:0px;
		z-index:100;
		bottom:0px;
	}
	.k li{
		width:25%;
		float:left;
		text-align:center;
		border:3px solid #15b6cc;
		box-sizing:border-box;
		border-radius: 25px;
		background:#fff;
	}
	.k li p{
		color:black;
	}
	.k a{
		text-decoration:none;
	}
	.k img{
		width:50%;
	}
</style>
<style>
	.jkl img{
		width:100%;
	}
	.jkl .mint-swipe-items-wrap{
		padding-bottom:25.6%;
	}
	.jkl{
		margin-top:calc(16vh);
	}

	</style>