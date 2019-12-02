<template>
	<div class="globalRoamingBox">
		<!--国际区号-->
		<div class="areaCli" ><span>中国&nbsp;+86</span>&nbsp;></div>
		<div class="areaBox" v-show="listShow">
			<ul>
				<li v-for="(item,index) in 20" :class="choiceIndex===index?'liCli':''" @click="changeIndex(index)">美国&nbsp;+999</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				listShow:false,
				choiceIndex:0
			}
		},
		methods:{
			changeIndex(index){
				this.choiceIndex=index;
				this.listShow=false;
			}
		}
	}
</script>

<style lang="scss">
	.globalRoamingBox{
		width:100px;
		background: red;
		position: absolute;
		top:0px;
		left:0px;
		.areaCli{
			width:100px;
			height:20px;
			line-height:20px;
			cursor:pointer;
			position: absolute;
			top:8px;
			left:0px;
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			border-right:1px solid #eee;
		}
		.areaBox{
			width:200px;
			height:300px;
			overflow: auto;
			background: white;
			box-shadow: 0px 0px 3px #ddd;
			position: absolute;
			left:0px;
			top:37px;
			z-index:250;
			ul{
				li{
					cursor:pointer;
					height:30px;
					line-height:30px;
					text-indent:15px;
					width:100%;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow: hidden;
				}
				li:hover{
					background: #eee;
				}
				.liCli{
					background: #eee;
				}
			}
		}
	}
	
</style>