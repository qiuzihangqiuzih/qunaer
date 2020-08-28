<template>
	<div>
		<div class="big">
		<div class="b">
			<p class="bb">北京</p>
			<div><img src="../assets/images/hotel/ihotel1.png" alst=""><p class="bbb">我的位置</p></div>
		</div>
		<div class="c">
	


			<div class="c1">
				<span class="c11">今天</span>
				<span class="c11">入住</span><br>
				<span class="c12">10月01日</span>
			</div>
			<span class="c2">至</span>
			<div class="c3">
				<span class="c31">明晚</span>
				<span class="c31">离店</span>
				<span class="c32">10月01日</span>
			</div>
			<span class="c4">共3小时</span>
		</div>
		<input type="text" placeholder="搜索酒店、地名、地标">
		<div class="d">
			搜索
		</div>
		<div class="e">
			<img src="../assets/images/hotel/ihotel2.png" alst="">我的订单>
		</div>
		</div>

		
	</div>
</template>

<script>
  export default {
    methods: {
      openPicker() {
        this.$refs.picker.open();
      }
    }
  };
</script>


<style scoped>
	.big{
		width: 95%;
		margin-left:auto;
		margin-right:auto;
		background:#fff;
		overflow:hidden;
	}

	.b{
		overflow:hidden;
		padding-top:10px;
		padding-bottom:5px;
		

	}
	.b .bb{
		width:50%;
		float:left;
		padding:10px;
		font-size:20px;
		font-weight:bold;
	}
	.b div{
		width:20%;
		float:right;
		text-align:center;
	}
	.b img{
		width:13px;
	}
	.c{
		width:92%;
		margin-left:auto;
		margin-right:auto;
		overflow:hidden;
		margin-top:10px;
	}
	.c .c1{
		float:left;
		width:30%;
	}
	.c .c11{
		font-size:12px;
		margin-right:1px;
		color:#b4b4b4;
	}
	.c .c12{
		font-size:22px;
		display:block;
		color:#373737;
		font-weight:bold;
	}
	.c .c2{
		display:inline-block;
		margin-left:10px;
		margin-top:28px;
		font-size:12px;
		margin-right:25px;
	}

	.c .c3{
		width:30%;
		display:inline-block;
	}
	.c .c31{
		font-size:12px;
		margin-right:1px;
		color:#b4b4b4;
	}
	.c .c32{
		font-size:22px;
		display:block;
		color:#373737;
		font-weight:bold;
	}
	.c .c4{
		display:inline-block;
		float:right;
		margin-top:25px;
		margin-right:20px;
		font-size:12px;
		color:#373737;
	}
	input{
		display:block;
		width:92%;
		margin-left:auto;
		margin-right:auto;
		padding-top:20px;
		padding-bottom:20px;
		outline:none;
		border:1px solid #fff;
	}
	.d{
		width:92%;
		margin-left:auto;
		margin-right:auto;
		background:#ff714a;
		text-align:center;
		padding-top:11px;
		padding-bottom:11px;
		margin-top:13px;
		border-radius:50px;
		color:#fff;
	}
	.e img{
		width:13px;
	}
	.e{
		width:40%;
		font-size:13px;
		margin:20px auto;
		text-align:center;
	}

	.header{
		width:95%;
		margin:10px auto 0px;
		padding:10px 0px;
		overflow:hidden;
	}
	.header h1{
		display:inline-block;
		font-size:21px;
		width:50%;
	}
	.header span{
		float:right;
		font-size:10px;
		padding:5px 0px;
		color:#979797;
	}
	.a{
		width:95%;
		margin:0px auto;
		overflow:hidden;
	}
	.a li{
		width:49%;
		float:left;
		margin-bottom:20px;
	}
	.a div{
		width:100%;
		height:88px;
		overflow:hidden;
	}
	.a li:nth-of-type(2n+1){
		margin-right:2%;
	}
	.a .a1{
		width:100%;
		border-radius:10px;
	}
	.a p{
		font-size:13px;
		margin:10px 10px;
	}
	.a .a2{
		width:13px;
		margin-left:10px;
	}
	.a span{
		font-size:13px;
		vertical-align:top;
	}
	.bb1{
		width:95%;
		padding:13px 0px;
		margin:0px auto;
		background:#f3edd3;
		border-radius:10px;
		text-align:center;
		font-size:13px;
	}
	.cc1{
		width:100%;
		text-align:center;
		font-size:13px;
		padding:28px 0px;
	}
	.cc1 img{
		width:13px;
	}
	.cc1 span{
		vertical-align:top;
		margin-right:5px;
	}

</style>