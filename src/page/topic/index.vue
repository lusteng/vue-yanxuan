<template>
    <div>
        <SimpleHeader />  
        <div class="yx-topic"> 
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SimpleHeader from '@/layout/header/SimpleHeader'
    export default {
        name: "topic", 
        computed: {
            ...mapGetters(['topicList'])
        }, 
        components: {
            SimpleHeader,
        },
        created(){
            this.$store.dispatch('fetchTopicData', {
                id: this.$route.params.id || 0
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

