<template>
	<div class="viewBox">
		<!--多张图片时显示-->
		<div class="imgBox" v-if="imgs && imgs.length!==1">
			<!--作为帖子两行显示时-->
			<div class="imgList" v-if="!imgChoiceShow" v-show="!isJudge">
				<div class="imgLi" v-for="(item,index) in imgs" :style="`background-image: url(${item})`" @click="enlarge(item,index)"></div>
			</div>
			<!--作为帖子单行显示时-->
			<div class="imgSingleList" v-if="!imgChoiceShow" v-show="isJudge">
				<div class="imgLi" v-for="(item,index) in imgs" :style="`background-image: url(${item})`" @click="enlarge(item,index)"></div>
			</div>
			<div class="imgCarousel" v-if="imgChoiceShow">
				<div class="bigImgBox" @click="reduce">
					<img class="bigImg" :src="bigImgSrc" />
					<div class="btns">
						<span class="prev" @click.stop.prevent="prev"><i class="iconfont">&#xe629;</i></span>
						<span class="next" @click.stop.prevent="next"><i class="iconfont">&#xe628;</i></span>
					</div>
				</div>
				<ul class="imgCliList">
					<li :class="imgChoiceIndex===index?'imgCli imgCliChoice':'imgCli'" v-for="(item,index) in imgs" :style="`background-image: url(${item})`" @click="imgChoiceCli(item,index)"><div></div></li>
				</ul>
			</div>
		</div>
		<!--只有一张图片时显示-->
		<div class="singelImgBox" v-if="imgs && imgs.length===1">
			<img :src="imgs[0]" />
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgChoiceIndex:0,//图片选择时的下标
				imgChoiceShow:false,//图片是否处于轮播点击状态,初始时未轮播为排列状态
				bigImgSrc:"",//放大图的路径
//				imgs:["http://www.wallcoo.com/human/sz_154_okinawa_japan_02/wallpapers/1920x1200/beach_of_okinawa_gj140.jpg","http://img5.imgtn.bdimg.com/it/u=622156368,4159042905&fm=26&gp=0.jpg","http://img3.imgtn.bdimg.com/it/u=432467183,3949854008&fm=26&gp=0.jpg","http://img3.imgtn.bdimg.com/it/u=1090872546,507390195&fm=26&gp=0.jpg","http://img0.imgtn.bdimg.com/it/u=1070332522,954463208&fm=26&gp=0.jpg","http://upload.mnw.cn/2017/0814/1502698443378.jpg"]
			}
		},
		props:{
			isJudge:Boolean,
			imgs:Array
		},
		mounted(){
			
		},
		methods:{
//			图片放大点击
			enlarge:function(src,index){
				this.bigImgSrc=src;
				this.imgChoiceShow=true;
				this.imgChoiceIndex=index;
			},
//			图片缩小点击
			reduce:function(){
				this.imgChoiceShow=false;
			},
//			上一张点击
			prev:function(){
				var len=this.imgs.length;
				this.imgChoiceIndex--;
				if(this.imgChoiceIndex<0){
					this.imgChoiceIndex=len-1;
				}
				this.bigImgSrc=this.imgs[this.imgChoiceIndex];
			},
			next:function(){
				var len=this.imgs.length;
				this.imgChoiceIndex++;
				if(this.imgChoiceIndex===len){
					this.imgChoiceIndex=0;
				}
				this.bigImgSrc=this.imgs[this.imgChoiceIndex];
			},
			imgChoiceCli:function(src,index){
				this.imgChoiceIndex=index;
				this.bigImgSrc=src;
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.viewBox{
		padding-top:15px;
		.singelImgBox{
			border-radius: 5px;
			overflow: hidden;
			margin-bottom:10px;
			img{
				width:100%;
				height:auto;
			}
		}
		.imgBox{
			.imgList{
				width:600px;
				overflow: hidden;
				.imgLi{
					width:158px;
					height:158px;
					border-radius:5px;
					overflow: hidden;
					float:left;
					margin-right:15px;
					margin-bottom:15px;
					background-size: cover;
					background-position: center center;
					background-repeat: no-repeat;
					cursor:zoom-in;
				}
			}
			.imgSingleList{
				height:80px;
				padding-top:8px;
				.imgLi{
					width:64px;
					height:64px;
					border-radius:3px;
					overflow: hidden;
					float:left;
					margin-right:15px;
					margin-bottom:15px;
					background-size: cover;
					background-position: center center;
					background-repeat: no-repeat;
					cursor:zoom-in;
				}
			}
			.imgCarousel{
				width:100%;
				height:auto;
				.bigImgBox{
					width:100%;
					height:auto;
					overflow:hidden;
					border-radius:5px;
					position:relative;
					cursor:zoom-out;
					.bigImg{
						width:100%;
						height:auto;
					}
					.btns{
						width:100%;
						height:62px;
						position: absolute;
						top:0px;
						right:0px;
						left:0px;
						bottom:0px;
						margin:auto;
						.prev{
							float:left;
							width:50px;
							height:62px;
							text-align: center;
							line-height:62px;
							background: rgba(0,0,0,0.36);
							cursor:pointer;
							color:white;
							i{
								font-size:26px;
								margin-right:3px;
							}
						}
						.prev:hover{
							color:#F39800 ;
						}
						.next{
							float:right;
							width:50px;
							height:62px;
							text-align: center;
							line-height:62px;
							background: rgba(0,0,0,0.36);
							cursor:pointer;
							color:white;
							i{
								font-size:26px;
								margin-left:5px;
							}
						}
						.next:hover{
							color:#F39800 ;
						}
					}
				}
				.imgCliList{
					height:100px;
					padding-top:15px;
					.imgCli{
						width:66px;
						height:66px;
						float:left;
						border-radius:5px;
						background-size: cover;
						background-position: center center;
						background-repeat: no-repeat;
						margin-right:12px;
						cursor:pointer;
						border:2px solid white;
						overflow:hidden;
						div{
							width:100%;
							height:100%;
							background: rgba(255,255,255,0.3);
						}
					}
					.imgCliChoice{
						border:2px solid #F39800 ;
						div{
							background: rgba(255,255,255,0);
						}
					}
					.imgCli:hover{
						border:2px solid #F39800 ;
						div{
							background: rgba(255,255,255,0);
						}
					}
				}
			}
		}
	}
</style>