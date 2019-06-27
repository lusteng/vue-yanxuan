<template>
    <div>
        <SimpleHeader />  
        <div class="yx-login">
            <div class="logoWrap">
                <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
            </div>
            <p style="text-align: center; font-size: 13px;">Wait TODO 登陆</p>
        </div>
        <Footer />  
    </div> 
</template>

<script>        
import SimpleHeader from '@/layout/header/SimpleHeader'
import Footer from '@/layout/footer/Footer'
export default {
    name: "login",
    components: {
        SimpleHeader,
        Footer,
    }

}
</script>


<style lang="scss">
    .logoWrap{
        width: 80%;
        margin: 10% auto;
    } 
</style>
