<template>
	<main>
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.src" alt="">
				<p>{{item.con}}</p>
				<span class="sp1">{{item.price}}</span>
				<span class="sp2">起/人</span>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
            return{
                list:[
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},
                	{
                		src:'./src/assets/images/holiday/holiday41.jpg',
                		con:'〖两天一夜〗入住清远新银盏温泉酒店+古龙峡漂流（含无限次温泉、2自助餐）',
                		price:'￥398'
                	},


                ]
            }           
        },
	}
</script>

<style scoped>
	ul{
		width:95%;
		margin-left:10px;
		overflow:hidden;
	}
	li{
		width:48.7%;
		float:left;
		margin-top:15px;
	}
	img{
		width:100%;
	}
	ul li:nth-of-type(2n+1){
		margin-right:2.55%;
	}
	p{
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

</style>