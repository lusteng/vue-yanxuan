<template>
    <div>
        <SimpleHeader />  
        <div class="yx-topic"> 
            <div class="yx-topic-cnt">
                <OptimalTo
                    v-for="(item, index) in topicList"
                    :key="index"
                    :data="item"
                />
            </div>  
        </div>
        <Footer />  
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SimpleHeader from '@/layout/header/SimpleHeader'
    import OptimalTo from '@/components/market/OptimalTo'
    import Footer from '@/layout/footer/Footer'
    export default {
        name: "topic", 
        computed: {
            ...mapGetters(['topicList'])
        }, 
        components: {
            SimpleHeader,
            OptimalTo,
            Footer,
        },
        created(){
            this.$store.dispatch('fetchTopicData', {
                id: this.$route.params.id || 0
            });
        }
    }
    
</script> 

