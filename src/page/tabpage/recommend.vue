<template>
    <div>
        <div class="title">
            <van-nav-bar title="推荐" ></van-nav-bar>
        </div>
        <div class="content">
            <div class="content_card">
                 <van-image width="50px" height="50px" radius="50px" style="margin-top:10px;margin-left:10px;" src="https://img.yzcdn.cn/vant/apple-5.jpg" />
                 <span>我是主角</span>
            </div>
        </div>
    </div>
</template>
<style lang="css">
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
.content_card{
    width: 90%;
    height: 200px;
    margin: auto;
    margin-top: 10px;
    line-height: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(187, 187, 187, 1);
    vertical-align:middle;
}
</style>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>