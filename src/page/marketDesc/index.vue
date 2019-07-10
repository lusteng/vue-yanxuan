<template>
    <div>
        <SimpleHeader />  
        <div class="yx-marketdesc" v-html="marketDescHtml"> 
        </div> 
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SimpleHeader from '@/layout/header/SimpleHeader'
    export default {
        name: "marketDesc", 
        computed: {
            ...mapGetters(['marketDescHtml'])
        }, 
        components: {
            SimpleHeader,
        },
        created(){
            this.$store.dispatch('fetchMarketDesc', {
                id: this.$route.params.id
            });
        }
    }
    
</script>

<style lang="scss">
    .yx-marketdesc{
        .p2p-imgContent{ 
            clear: both;
            content:""; 
            display: block;  
        }
        img{
            display: block;  
        }
        img, .u-link{ 
            vertical-align: middle; 
        }
    }
</style>

