<template>
	<main>
		<router-link to="/"><img src="../assets/images/jiantou_liebiaoxiangzuo (1).png" alt="" class="img"></router-link>
		
		<ul>
			<li @click="msg='hotel1'" :class="{current:msg=='hotel1'}"><p>国内·港澳台</p><i></i></li>
			<li @click="msg='hotel2'" :class="{current:msg=='hotel2'}"><p>海外</p><i></i></li>
			<li @click="msg='hotel3'" :class="{current:msg=='hotel3'}"><p>钟点房</p><i></i></li>
		</ul>
		<component :is="msg"></component>
		
	</main>
</template>

	
<script>
    import hotel1 from '../components/hotel1.vue'
   	import hotel2 from '../components/hotel2.vue'
  	import hotel3 from '../components/hotel3.vue'
	export default{
		
		data(){
            return{
            	msg:'hotel1',
            }
        },
         components:{
	   		'hotel1':hotel1,
	   		'hotel2':hotel2,
	   		'hotel3':hotel3,
		  },
		  
    }
</script>

<style scoped>
	main{
		background:url('../../src/assets/images/hotel/homebg.png') no-repeat;
		background-size:100%;
	}
	.img{
		width:12%;
	}
	
	ul{
		border-bottom:3px solid #efefef;
		width: 95%;
		margin-left:auto;
		margin-right:auto;
		background-color:#fff;
		margin-top:calc(13.5vh);
	    border-top-left-radius: 12px;
    	border-top-right-radius: 12px;
		overflow:hidden;
	}
	li{
		width: 33.33%;
		padding-top:15px;
		padding-bottom:10px;
		text-align:center;
		float:left;
		font-size:19px;
	}
	.current{
		color:#1fc9e0;
		border-bottom:3px solid #0ac4dd;
	}
	.current i{
	    width: .4rem;
	    height: .03rem;
	    display: block;
	    margin: 0px auto;
	    border-radius: 1rem;
	    background-color: #0ac4dd;
	}

</style>