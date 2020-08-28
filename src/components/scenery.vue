<template>
	<main>
	<div class="header">
		<router-link to="/">
		<img src="../assets/images/jiantou_liebiaoxiangzuo (1).png" alt="">
		</router-link>
		<input type="text" placeholder="输入城市/景点/游玩住题">
		<span>茂名</span>
	</div>
	<div class="a">
	<ul class="a1">
		<li v-for="(item,index) in list">
			<img :src="item.src" alt="">
			<p>{{item.con}}</p>
		</li>
	</ul>
	</div>
	<div class="cd">
	<div class="c"><img src="../assets/images/scenery/iscenery1.png" alt="">定位失败</div>
	<div class="d"><img src="../assets/images/scenery/iscenery2.png" alt="">必游榜单</div>
	</div>
	<div class="e">
	<p><img src="../assets/images/scenery/iscenery3.png" alt="">本周热门榜单</p>
	<span>全部榜单></span>
	</div>
	<div class="f">
		<ul>
			<li v-for="(item,index) in list1">
				<img :src="item.src" alt="">
				<p>{{item.con}}</p>
				<p><span>{{item.n}}</span>起</p>
			</li>
		</ul>
	</div>
	<div class="g">
		<img src="../assets/images/scenery/scenery03.png" alt="">
		猜你喜欢
	</div>
	<ul class="h">
		<li v-for="(item,index) in list2">
			<div>
			<img :src="item.src" alt="" class="h1">
			<span class="sp">{{item.sp}}</span>
			</div>
			<p class="h2">{{item.con}}</p>
			<p class="h3"><img :src="item.src1" alt=""><img :src="item.src1" alt=""><img :src="item.src1" alt=""><img :src="item.src1" alt=""><img :src="item.src1" alt=""><span>{{item.m}}条评论</span></p>
			<p class="h4"><span class="h42">￥</span><span class="h41">{{item.n}}</span>起<span class="h43">电白县</span></p>
		</li>
	</ul>
	<p class="i">查看所有产品</p>
	<p class="j">周末去哪儿</p>
	<ul class="k">
		<li v-for="(item,index) in list3">
			<img :src="item.src" alt="">
			<p class="k1">{{item.con1}}</p>
			<p class="k2">{{item.con2}}</p>
		</li>
	</ul>
	<p class="l"><span class="iconfont icon-zhuyi"></span>是指通过景区指定窗口售卖的纸质门票上标注的价格</p>
	<ul class="n">
		<li>
			<i class="iconfont icon-feiji"></i><span class="n1">机票</span>
		</li>
		<li>
			<i class="iconfont icon-hotel"></i><span class="n1">酒店</span>
		</li>
		<li>
			<i class="iconfont icon-gongyu"></i><span class="n1">公寓</span>
		</li>
		<li class="nli">
		<span>|</span> <i class="iconfont icon-shuangxiangxiajiantou"></i><span>更多</span>
		</li>
	</ul>
	<ul class="m">
		<li>登录</li>
		<li>我的订单</li>
		<li>最近浏览</li>
		<li>关于我们</li>
	</ul>
	<div class="o"><span class="o1">触屏版</span><span class="o2">电脑版</span></div>
	<p class="z">Qunar 京ICP备05021087意见反馈</p>
	</main>
</template>

<script>
	export default{
		data(){
            return{
                list:[
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery01.png',
                		con:'海滨海岛'
                	},
                ],
                list1:[
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery02.jpg',
                		con:'茂名潜梦岛',
                		n:'￥160'
                		
                	},
                ],
                list2:[
                	{
                		src:'./src/assets/images/scenery/scenery04.jpg',
                		src1:'./src/assets/images/scenery/iscenery4.png',
                		con:'盈香生态园',
                		m:'1122',
                		n:'160',
                		sp:'随买随用'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery04.jpg',
                		src1:'./src/assets/images/scenery/iscenery4.png',
                		con:'盈香生态园',
                		m:'1122',
                		n:'160',
                		sp:'随买随用'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery04.jpg',
                		src1:'./src/assets/images/scenery/iscenery4.png',
                		con:'盈香生态园',
                		m:'1122',
                		n:'160',
                		sp:'随买随用'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery04.jpg',
                		src1:'./src/assets/images/scenery/iscenery4.png',
                		con:'盈香生态园',
                		m:'1122',
                		n:'160',
                		sp:'随买随用'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery04.jpg',
                		src1:'./src/assets/images/scenery/iscenery4.png',
                		con:'盈香生态园',
                		m:'1122',
                		n:'160',
                		sp:'随买随用'
                		
                	},
                	{
                		src:'./src/assets/images/scenery/scenery04.jpg',
                		src1:'./src/assets/images/scenery/iscenery4.png',
                		con:'盈香生态园',
                		m:'1122',
                		n:'160',
                		sp:'随买随用'
                		
                	},
                ],
                list3:[
                	{
                		src:'./src/assets/images/scenery/scenery05.jpg',
                		con1:'佛山打卡',
                		con2:'走进佛山河网密布，生态优美的岭南水仙'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery05.jpg',
                		con1:'佛山打卡',
                		con2:'走进佛山河网密布，生态优美的岭南水仙'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery05.jpg',
                		con1:'佛山打卡',
                		con2:'走进佛山河网密布，生态优美的岭南水仙'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery05.jpg',
                		con1:'佛山打卡',
                		con2:'走进佛山河网密布，生态优美的岭南水仙'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery05.jpg',
                		con1:'佛山打卡',
                		con2:'走进佛山河网密布，生态优美的岭南水仙'
                	},
                	{
                		src:'./src/assets/images/scenery/scenery05.jpg',
                		con1:'佛山打卡',
                		con2:'走进佛山河网密布，生态优美的岭南水仙'
                	}
                ]
            }           
        },
	}

</script>


<style scoped>
	.o{
		width:60%;
		margin:8px auto;
		text-align:center;
	}
	.o .o1{
		margin-right:35px;
	}
	.o .o2{
		color:#4bb2c5;
	}
	.z{
		text-align:center;
		color:#cecece;
		font-size:14px;
		margin-bottom:30px;
	}

	.m{
		overflow:hidden;
		border-bottom:2px solid #d4d4d4;
		padding-bottom:13px;
	}
	.m li{
		color:#4bb2c5;
		float:left;
		font-size:14px;
		font-weight:bold;
		margin-left:20px;
	}

	.n{
		width:80%;
		overflow:hidden;
		padding-bottom:15px;
		margin:13px auto 0px;
		font-size:13px;
	}
	.n li{
		float:left;
		margin-right:23px;
		color:#616161;
	}
	.n .nli{
		margin-right:0px;
		margin-top:5px;
	}
	.n .nli span{
		margin-right:15px;
	}
	.n i{
		font-size:20px;

	}
	.n .n1{
		text-decoration:underline;
	}
	.n .icon-shuangxiangxiajiantou{
		font-size:5px;
	}

	.l{
		font-size:13px;
		color:#616161;
	}

	.k{
		width:100%;
	}
	.k li{
		margin-bottom:20px;
	}
	.k img{
		width:100%;
	}
	.k .k1{
		width:100%;
		padding:9px 9px;
		box-sizing:border-box;
		font-size:13px;
		color:#616161;
	}
	.k .k2{
		font-size:12px;
		padding-left:9px;
		color:#616161;
	}

	.j{
		width:100%;
		padding:10px;
		box-sizing:border-box;
		font-size:13px;
		color:#616161;
	} 

	.i{
		width:100%;
		text-align:center;
		color:#00afc7;
		font-size:14px;
		margin-bottom:20px;
	}	

	.h li{
		width:100%;
		overflow:hidden;
		margin-bottom:30px;
	}
	.h div{
		width:25%;
		float:left;
		margin:0px 12px;
		position:relative;
	}
	.h1{
		width:100%;
	}
	.h .sp{
		position:absolute;
		left:0px;
		top:0px;
		background:#ffa91c;
		z-index:100;
		color:#fff;
		width:50%;
		font-size:12px;
		text-align:center;
	}
	.h2{
		padding:15px 0px 5px;
	}
	.h3{
		font-size:11px;
		margin-top:7px;
	}
	.h3 img{
		width:11px;
		margin-left:2px;
		
	}
	
	.h3 span{
		margin-left:18px;
	}
	.h4{
		padding:11px 0px 0px;
		font-size:12px;
	}
	.h4 .h41{
		font-size:21px;
		color:#ffa547
	}
	.h .h42{
		color:#ffa547;
	}
	.h .h43{
		float:right;
		margin-top:9px;
	}


	.header{
		width:100%;
		background:#00bcd4;
		padding:7px 0px;
	}
	.header img{
		width:6%;
	}
	.header img,.header input{
		vertical-align:top;
	}
	.header input{
		width:70%;
		height:24.8px;
		border-radius: 5px;
		outline: none;
		border:0px solid #fff;
	}
	.header span{
		float:right;
		margin-top:6px;
		font-size:15px;
		margin-right:30px;
		font-weight:bold;
		color:#fff;
	}
	.a{
		width:100%;
		overflow:auto;

	}
	.a1{
		width:200%;
		bcakground:lime;
		overflow:hidden;
		padding-right:40%;
		padding-bottom:10px;
		box-sizing:border-box;
	}
	.a1 li{
		width:15.5%;
		text-align:center;
		float:left;
		padding:9px 0px 0px;
		font-size:14px;
	}
	.a1 img{
		width:55%;
	}
	.cd{
		width:100%;
		overflow:hidden;
		margin-top:28px;
	}
	.c img,.d img{
		width:13px;
		vertical-align:top;
	}
	.c{
		width:50%;
		float:left;
		text-align:center;
		font-size:13px;
	}
	.d{
		width:50%;
		float:right;
		text-align:center;
		font-size:13px;
	}
	.e{
		width:100%;
		margin-top:38px;
		overflow:hidden;
		padding:5px 5px;
		box-sizing:border-box;
	}
	.e p{
		width:35%;
		float:left;
		font-size:15px;
	}
	.e span{
		float:right;
		font-size:15px;
		margin-right:10px;
	}
	.e img{
		width:15px;
	}
	.f{
		width:100%;
		overflow:auto;
		margin-top:12px;
	}
	.f ul{
		width:270%;
		overflow:hidden;
	}
	.f li{
		width:9%;
		float:left;
		margin-left:6px;
	}
	.f img{
		width:100%;
	}
	.f p{
		padding:4px 0px 0px;
		text-align:center;
		font-size:12px;
		color:#353535;
	}
	.f p span{
		color:#ff992e;
		font-weight:bold;
	}
	.g{
		margin-top:35px;
		margin-bottom:26px;
	}
	.g img{
		width:15px;
	}

</style>