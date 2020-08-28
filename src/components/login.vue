<template>
	<main>
		<div class="header">
            <router-link to="/"><img src="../assets/images/jiantou_liebiaoxiangzuo (1).png" alt=""></router-link>
			
            <router-link to="/sign"><span class="b">注册</span></router-link>
			
		</div>
		<div class="c">
			<ul class="d">
					<li v-for="(item,index) in list">
						<router-link :to="item.path" 
       					>{{item.con}}</router-link>
					</li>
			</ul>
		</div>
		<router-view></router-view>
	</main>
</template>

<script>
	export default{
		data(){
            return{
            	num:0,
                list:[
                    {
                        con:'短信验证码登录',
                        path:'/login1'
                    },
                    {
                        con:'账号登录',
                        path:'/login2'
                    },
                    ],
            }           
        },
	}

</script>
<style scoped>
	 .header{
            width: 100%;
            line-height:49px;
            text-align:center;
            background-color:#18a9b9;
            overflow:hidden;
            }
		img{
		    width:12%;
			float:left;
		}
		.a{
			color:#fff;
			margin-left:auto;
			margin-right:auto;
		}
		.b{
			display:block;
			float:right;
			color:#75ffff;
			margin-right:20px;

		}
	    .c{
            width: 100%;
            padding:5px;
            background-color:#18a9b9;
        }
        .d{
            margin-left:5%;
            height:26px;
            width:90%;
            background-color:#18a9b9;
            border-radius:5%;
            border:1px solid #ffffff;
            overflow:hidden;
        }
        .d li{
            float:left;
            text-align:center;
            color:#fff;
            width:50%;
            box-sizing:border-box;
            }
        .d li a{
        	height:27px;
        	line-height:20px;
            color:#fff; 
            text-decoration:none;
        }
        .d li .router-link-exact-active,.d li .router-link-active{
            display:inline-block;
        	background-color:#fff;
        	color:#18a9b9;
        	width:100%;
        }

	</style>



