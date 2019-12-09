<template>
    <div>
        <div class="title">
            <van-nav-bar title="首页" @click-left="onClickLeft">
                <van-icon name="bars" slot="left" />
            </van-nav-bar>
        </div>
        <div class="content" v-show="isShow">
            <van-tree-select
            height="100%"
            :items="items"
            @click-nav="getSortList"
            :main-active-index.sync="activeIndex"
            >
                <template slot="content">
                    <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                    <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                    <van-image v-if="activeIndex === 2" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                    <van-image v-if="activeIndex === 3" src="https://img.yzcdn.cn/vant/apple-4.jpg" />
                    <van-image v-if="activeIndex === 4" src="https://img.yzcdn.cn/vant/apple-5.jpg" />
                </template>
            </van-tree-select>
        </div>
        <div class="content" v-show="!isShow">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <van-image
                        width="100%"
                        height="200px"
                        fit="cover"
                        :src="image"
                        />
                </van-swipe-item>
            </van-swipe>
            <van-grid :gutter="10" :column-num="3" :center="true" :square="false" :border="false">
                <van-grid-item icon="hot" text="人气排行"/>
                <van-grid-item icon="shopping-cart" text="销量排行"/>
                <van-grid-item icon="good-job" text="9.9包邮"/>
                <van-grid-item icon="gift-card" text="19.9包邮"/>
                <van-grid-item icon="coupon" text="聚划算"/>
                <van-grid-item icon="point-gift" text="超高券"/>
            </van-grid>
            <div class="content-card" v-for="(item, index) in CommodityList" :key="index">
                <div class="card" >
                    <van-image width="100%" height="120px" src="https://img.yzcdn.cn/vant/apple-5.jpg" />
                    <div class="card-title" style="width:90%;height:35px;margin:auto;">{{item.jianjie}}</div>
                    <div class="flex_box">
                        <div style="margin-top:5px;">
                           <span style="font-size:11px;line-height:20px;">券后:<span style="color:red;font-size:15px; font-weight: bold;">{{item.quanhou_jiage}}</span></span> 
                        </div>
                        <div class="quan_css">
                            {{item.coupon_info_money}}元
                        </div>
                    </div>
                </div>
                <!-- <div class="card">
                    <van-image width="100%" height="120px" src="https://img.yzcdn.cn/vant/apple-5.jpg" />
                    <div class="card-title" style="width:90%;height:35px;margin:auto;">这个是标题这个是标题这个是标题标题标题标题标题标题标题</div>
                    <div class="flex_box">
                        <div style="margin-top:5px;">
                           <span style="font-size:11px;line-height:20px;">券后:<span style="color:red;font-size:15px;font-weight: bold;">19.9</span></span> 
                        </div>
                        <div class="quan_css">
                            88元券
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<style lang="css">
.van-dropdown-menu{
    height: 45px;
}
.title{
    width: 100%;
    position: fixed;
    z-index: 99999;
}
.content{
    position: absolute;
    width: 100%;
    top:45px;
    bottom: 0;
    margin: 0 auto;
}
.van-swipe{
    height: 150px;
}
.content-card{
    width: 95%;
    height: 500px;
    position: relative;
    margin: auto;
}
.card{
    width: 46%;
    height: 200px;
    float: left;
    margin-left: 12px;
    margin-top: 10px;
    background-color:rgb(250, 250, 250);
    border-radius: 10px;
}
.card-title{
    width: 100%;
    height: 41px;
    font-size: 13px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.quan_css{
    float: right;
    height: 35px;
    width:70px;
    color:white;
    font-size: 14px;
    background-image: url('../../assets/quan.png');
    background-size: 100% 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.flex_box{
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    margin: auto;
}
</style>
<script>
import Url from '@/config.js'
export default {
    data() {
    return {
        images: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        activeIndex: 0,
        items: [{ text: '女装' }, { text: '母婴' }, { text: '美妆' }, { text: '居家日用' }, { text: '鞋品' }, { text: '美食' }, { text: '文娱车品' }
                , { text: '数码家电' }, { text: '男装' }, { text: '内衣' }, { text: '箱包' }, { text: '配饰' }, { text: '户外活动' }, { text: '家居家纺' }],
        isShow: false,
        CommodityList:[],
    }
  },
  mounted:function() {
    this.getAllList();
  },
  methods:{
    // 分类选择模块的显示隐藏
    onClickLeft() {
        this.isShow = !this.isShow
    },
    getAllList(){
        var cid = 0;
        var page =1;
        this.axios.get(Url+'/product/getAllProducts/'+cid+'/'+page,).then(function(res){
            console.log(res.data.content);
            // var CommodityList = []
            console.log(this.CommodityList)
            // this.CommodityList = res.data.content
            
        })
    },
    // 获取分类被选择的种类内容
    getSortList(index){
        var cid = index + 1;
        var page =1;
        this.axios.get(Url+'/product/getAllProducts/'+cid+'/'+page,).then(function(res){
            console.log(res);
            
        })
    }
  }
}
</script>