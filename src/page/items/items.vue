<template> 
    <div class="yx-item">
        <a href="#" class="yx-activity">
            <img z-lazy="cateData.banner_img" />
        </a>
        <ItemProductBlock 
            v-for="(item, index) in cateData.list"
            :key="index"
            :itemData="item"
        />
    </div>

</template>

<script>
import {mapGetters} from 'vuex'
import ItemProductBlock from './ItemProductBlock'
export default {
    name: "items",
    components: {
        ItemProductBlock
    },
    computed: {
        ...mapGetters(['cateData'])
    },
    created(){
        this.$store.dispatch('fetchItemsData')
        this.$store.dispatch('fetchCategoryGoods')
    }
}
</script>

<style lang="sass" scoped>

</style>

