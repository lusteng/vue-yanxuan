<template>
    <div class="goTop" v-show="visible" @touchstart="goTop">
        <i class="iconfont icon-shangla"></i>
    </div>
</template>

<script>
export default {
    name: "GoTop",
    data(){
        return {
            visible: false,
            scrolltopPos: 0,
            interval: null,
            speed: 0,
            counts: 0,
            throttle: 0 
        }
    },
    props: {
        visiblePos:{
            type: Number,
            default: 500 
        },
        speedRate: {
            type: Number,
            default: 300
        } 
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(){
            const scrollTop = this.getScrollPos(window)
            this.visible = scrollTop > this.visiblePos
        },
        getScrollPos(w){
            const method = 'scrollTop';
            this.scrolltopPos = w.pageYOffset
            if(typeof this.scrolltopPos !== 'number'){
                let d = w.document;
                this.scrolltopPos = d.documentElemelnt[method]
                if(typeof this.scrolltopPos !== 'number'){
                    this.scrolltopPos = d.body[method]
                }
            }
            return this.scrolltopPos
        },
        goTop(){
            const 
                initerval = 30,
                num = this.speedRate / initerval
            this.throttle = 0
            this.counts = num;
            this.speed = this.scrolltopPos / num
            this.interval = setInterval(this.setScroll, initerval)
        },
        setScroll(){
            if(this.throttle > this.counts || this.scrolltopPos <= 0){
                clearInterval(this.interval)
                return
            }
            this.throttle ++
            this.scrolltopPos -= this.speed
            document.documentElement.scrollTop = document.body.scrollTop = this.scrolltopPos
        }
    }

}
</script>

<style lang="scss">
    $boxSize : 40px;
    .goTop{
        width: $boxSize;
        height: $boxSize;
        border-radius: 50%;
        background:rgba(255,255,255,.8); 
        position: fixed;
        right : 11px;
        bottom: 60px;
        text-align: center;
        line-height: $boxSize; 
        font-size: 20px;
    }
</style>
