<template>
   <main>
   		<div class="a">
            <div class="b">
                <span class="c">账号</span>
                <input type="text" placeholder="手机号/邮箱/用户名" class="d">
            </div>
            <div class="e">
            	<span class="c">密码</span>
                <input type="password" placeholder="请输入密码" class="d">
            </div>
        </div>
        <div class="f">登录</div>
        <span class="q">找回密码</span>
        <p class="j">登录即同意去哪儿<span class="g">用户服务协议</span>和<span class="g">隐私协议</span></p>
        <ul>
        	<li>
        		电脑版	
        	</li>
        	<li>
        		关于我们	
        	</li>
        </ul>
        <p class="h">Qunar 京ICP备05021087</p>
   </main>
</template>

<style scoped>
	.a{
		width:100%;
		margin-top:10px;
		padding-left:3%;
		padding-top:3%;
		padding-bottom:3%;
		border-top:1px solid #cccccc;
		border-bottom:1px solid #cccccc;
		box-sizing:border-box;
	}
	input{
		width:60%;
		outline:none;
		border:1px solid #fff;
	}
	.c{
		margin-right:8%;
		color:#18a9b9;
	}
	.b{
		padding-bottom:3%;
	}
	.e{
		border-top:1px solid #cccccc;
		padding-top:3%;
	}
	button{
		padding:6px 11px;
		outline:none;
		border-top:1px solid #cccccc;
		background:#fff;
		border-radius:10%;
	}
	.f{
		background:#18a9b9;
		margin:13px 5%;
		border-radius:3%;
		box-sizing:border-box;
		padding:4% 0px;
		color:#fff;
		text-align:center
	}
	.j{
		font-size:10px;
		color:#9e9e9e;
		text-align:center;
		padding:3%;
	}
	.g{
		text-decoration:underline;
	}
	main{
		position:relation;
	}
	ul{
		position:absolute;
		width:100%;
		overflow:hidden;
		bottom:calc(6vh);
		padding-top:15px;
		padding-bottom:15px;
	}
	li{
		width:50%;
        float:left;
        text-align:center;
        font-size:10px;
        color:#18a9b9;
    }
    .h{
    	width:100%;
    	position:absolute;
    	color:#9e9e9e;
    	font-size:8px;
    	text-align:center;
    	padding-top:15px;
		padding-bottom:15px;
		bottom:calc(0vh);
    }
    .q{
    	font-size:10px;
    	color:#18a9b9;
    	float:right;
    	margin-right:5%;
    }

</style>

