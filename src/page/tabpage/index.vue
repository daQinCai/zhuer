<template>
    <div>
        <div class="title">
            <!--<van-nav-bar title="首页" @click-left="onClickLeft">-->
                <!--<van-icon name="bars" slot="left" />-->
            <!--</van-nav-bar>-->
            <van-tabs v-model="active" sticky>
                <van-tab v-for="index in items" :title="index.text">
                    <div class="content" v-show="index.id==0">
                        <van-swipe :autoplay="3000">
                            <van-swipe-item v-for="(image, index) in images" :key="index">
                                <van-image
                                        width="100%"
                                        height="3.5rem"
                                        fit="cover"
                                        :src="image"
                                />
                            </van-swipe-item>
                        </van-swipe>
                        <van-grid :gutter="10" :column-num="3" :center="true" :square="false" :border="false">
                            <van-grid-item icon="hot" icon-size="40" text="人气排行"/>
                            <van-grid-item icon="shopping-cart" icon-size="40" text="销量排行"/>
                            <van-grid-item icon="good-job" icon-size="40" text="9.9包邮"/>
                            <van-grid-item icon="gift-card" icon-size="40" text="19.9包邮"/>
                            <van-grid-item icon="coupon" icon-size="40" text="聚划算"/>
                            <van-grid-item icon="point-gift" icon-size="40" text="超高券"/>
                        </van-grid>
                        <div class="content-card" >
                            <div class="card" v-for="(item, index) in CommodityList" :key="index">
                                <van-image width="100%" height="2.5rem" :src=item.pict_url />
                                <div class="card-title" style="width:90%;margin:auto;">{{item.jianjie}}</div>
                                <div class="flex_box">
                            <span class="quan_title">券后:
                                <span class="quan_content">{{item.quanhou_jiage}}</span>
                                <s class="yuanjia">{{item.size}}</s>
                                <!-- <span style="padding-left: 0.15rem">月销量:
                                    <span style="color: gainsboro;">{{item.volume}}</span>
                                </span> -->
                            </span>
                                    <div class="quan_css">
                                        {{item.coupon_info_money}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <!--<div class="content" v-show="isShow">-->
            <!--<van-tree-select-->
                    <!--height="100%"-->
                    <!--:items="items"-->
                    <!--@click-nav="getSortList"-->
                    <!--:main-active-index.sync="activeIndex"-->
            <!--&gt;-->
                <!--<template slot="content">-->
                    <!--<van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />-->
                    <!--<van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />-->
                    <!--<van-image v-if="activeIndex === 2" src="https://img.yzcdn.cn/vant/apple-3.jpg" />-->
                    <!--<van-image v-if="activeIndex === 3" src="https://img.yzcdn.cn/vant/apple-4.jpg" />-->
                    <!--<van-image v-if="activeIndex === 4" src="https://img.yzcdn.cn/vant/apple-5.jpg" />-->
                <!--</template>-->
            <!--</van-tree-select>-->
        <!--</div>-->

    </div>
</template>
<style lang="css">
    .quan_title{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        font-size:0.21rem;
    }
    .quan_content{
        color:red;
        font-size:0.25rem;
        font-weight: bold;
    }
    .yuanjia{
        color: gainsboro;
        padding-left: 0.05rem
    }
    .van-dropdown-menu{
        height: 0.45rem;
    }
    .title{
        width: 100%;
        position: fixed;
        z-index: 99999;
    }
    .content{
        position: absolute;
        width: 100%;
        top:0.45rem;
        bottom: 0;
        margin: 0 auto;
    }
    .van-swipe{
        height: 3.5rem;
    }
    .content-card{
        width: 100%;
        /* height: 5rem; */
        position: relative;
        margin: auto;
    }
    .card{
        width: 46%;
        /* height: 3.4rem; */
        float: left;
        margin-left: 0.2rem;
        margin-top: 0.15rem;
        background-color:rgb(250, 250, 250);
        border-radius: 0.1rem;
    }
    .card-title{
        width: 100%;
        /* height: 0.41rem; */
        font-size: 0.21rem;
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
        height: 0.45rem;
        width:0.90rem;
        color:white;
        font-size: 0.25rem;
        background-image: url('../../assets/quan.png');
        background-size: 100% 100%;
        border-radius: 0.10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }
    .flex_box{
        width: 90%;
        /* background-color: red; */
        /* margin-top: 0.20rem; */
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
                items: [{ id:0,text: '首页' },{ id:1,text: '女装' }, {id:2, text: '母婴' }, {id:3, text: '美妆' }, { id:4,text: '居家日用' }, { id:5,text: '鞋品' }, { id:6,text: '美食' }, { id:7,text: '文娱车品' }
                    , { id:8,text: '数码家电' }, {id:9, text: '男装' }, {id:10, text: '内衣' }, { id:11,text: '箱包' }, { id:12,text: '配饰' }, { id:13,text: '户外活动' }, { id:14,text: '家居家纺' }],
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
                var page =5;
                let _this=this;
                this.axios.get(Url+'/product/getAllProducts/'+cid+'/'+page,).then(function(res){
                    console.log(res.data.content);
                    // var CommodityList = []
                    _this.CommodityList=res.data.content
                    console.log(_this.CommodityList)
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