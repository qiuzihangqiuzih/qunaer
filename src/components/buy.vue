<template>
	<main>
	<div class="header">
		<mt-header title="特卖·广深香出发">
		<router-link to="/holiday" slot="left">
		    <mt-button icon="back"></mt-button>
		</router-link>
	  	<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>

	<div class="a">
		<p class="aa">
		<img src="../assets/images/buy/ibuy2.png" alt="">
		<span>尾单特惠</span>
		<span class="aa2">近期出行任性低价</span>
		</p>
		<span class="aa1">低价提醒></span>
	</div>

	<div class="b">
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.src" alt="">
				<p>{{item.con}}</p>
				<span class="sp1">{{item.price}}</span>
				<span class="sp2">起/人</span>
			</li>
		</ul>
	</div>
	<p class="c">
		更多尾单产品
	</p>

	<div class="d"></div>

	<div class="g">
		<p class="gg">
		<img src="../assets/images/buy/ibuy2.png" alt="">
		<span>超值自由行</span>
		<span class="gg2">精挑细选组合多交</span>
		</p>
		<span class="gg1">低价提醒></span>
	</div>

	<div class="e">
		<ul>
			<li v-for="(item,index) in list1">
				<img :src="item.src" alt="">
				<p>{{item.con}}</p>
				<span class="sp1">{{item.price}}</span>
				<span class="sp2">起/人</span>
			</li>
		</ul>
	</div>
	<p class="f">
		更多尾单产品
	</p>
	</main>
</template>

<script>
	export default{
		data(){
            return{
                list:[
                	{
                		src:'./src/assets/images/buy/buy02.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥500W'
                	},
                	{
                		src:'./src/assets/images/buy/buy02.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥500W'
                	},
                	{
                		src:'./src/assets/images/buy/buy02.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥500W'
                	},
                	{
                		src:'./src/assets/images/buy/buy02.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥500W'
                	},
                ],
                list1:[
                	{
                		src:'./src/assets/images/buy/buy03.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥1E'
                	},
                	{
                		src:'./src/assets/images/buy/buy03.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥1E'
                	},
                	{
                		src:'./src/assets/images/buy/buy03.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥1E'
                	},
                	{
                		src:'./src/assets/images/buy/buy03.jpg',
                		con:'入住清远悦隆精品酒店、新银盏温泉+天子飞龙+时光滑道+水上嗨吧',
                		price:'￥1E'
                	},
                ],
            }           
        },
	}
	</script>

<style scoped>
	main{
		overflow:hidden;
	}
	.mint-header{
		width:100%;
		background:#00bcd4;
		height:calc(6vh);
		position:fixed;
		z-index:100;
	}
	.a{
		width:95%;
		margin-left:12px;
		margin-right:12px;
		margin-top:calc(8vh);
		overflow:hidden;
		line-height:20px;
	}
	.g{
		width:95%;
		margin-left:12px;
		margin-right:12px;
		margin-top:calc(3vh);
		overflow:hidden;
		line-height:20px;
	}
	.aa,.gg{
		width:60%;
		font-size:20px;
		float:left;
	}
	.aa img,.gg img{
		width:5%;
	}
	.aa .aa2,.gg .gg2{
		font-size:10px;
		color:#9e9e9e;
	}
	.aa1,.gg1{
		float:right;
		font-size:10px;
		color:#00bcd4;
	}

	.b ul{
		width:95%;
		margin-left:10px;
		overflow:hidden;
	}
	.b li{
		width:48.7%;
		float:left;
		margin-top:15px;
	}
	.b img{
		width:100%;
	}
	.b ul li:nth-of-type(2n+1){
		margin-right:2.54%;
	}
	.b p{
		display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    text-align:center;
	}
	.sp1{
		font-size:20px;
		font-weight:bold;
		color:#ff911d;
	}
	.sp2{
		color:#ff911d;
		font-size:10px;
	}
	.c,.f{
		width:45%;
		margin-left:auto;
		margin-right:auto;
		padding:2% 0px;
		text-align:center;
		color:#00bcd4;
		margin-top:30px;
		border:1px solid #00bcd4;
		margin-bottom:20px;
	}
	.d{
		width:100%;
		height:calc(1.5vh);
		background:#ebebeb;
	}
	.e{
		margin-top:4.93%;
	}

	.e ul{
		width:95%;
		margin-left:3.12%;
		overflow:hidden;
	}
	.e li{
		width:48.7%;
		float:left;
		margin-top:3px;
	}
	.e img{
		width:100%;
	}
	.e ul li:nth-of-type(2n+1){
		margin-right:2.55%;
	}
	.e p{
		display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    text-align:center;
	}
	.e .sp1{
		font-size:20px;
		font-weight:bold;
		color:#ff911d;
	}
	.e .sp2{
		color:#ff911d;
		font-size:10px;
	}

</style>