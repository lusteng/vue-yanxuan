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
            height: auto!important;
        }
        img, .u-link{
            width: 375px!important;
            vertical-align: middle;
            height: auto!important;
        }
    }
</style>

