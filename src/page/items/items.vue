<template> 
    <div>     
        <TopHeader />  
        <div class="yx-item"> 
            <router-link :to="`/marketDesc/${cateIndex}`">
                <img v-lazy="cateData.banner_img" />
            </router-link>
            <ItemProductBlock 
                v-for="(item, index) in cateData.list"
                :key="index"
                :itemData="item"
            />
        </div>
        <Footer />   
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TopHeader from '@/layout/header/TopHeader'
import Footer from '@/layout/footer/Footer'
import ItemProductBlock from './ItemProductBlock'
export default {
    name: "items",
    components: {
        TopHeader,
        Footer,
        ItemProductBlock
    },
    computed: {
        ...mapGetters(['cateData'])
    },
    data(){
        return {
            cateIndex: 0
        }
    },
    watch: {
        '$route'(to, from){ 
            this.getDatas(to.params.index)
        }
    },
    created(){ 
        this.cateIndex = this.$route.params.index
        this.getDatas(this.$route.params.index)
    },
    methods: {
        getDatas(index){ 
            this.$store.dispatch('fetchItemsData', {
                index 
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .yx-activity{
        display: block;
        height: 185px;
        margin-bottom: 10px;
    }
</style>

