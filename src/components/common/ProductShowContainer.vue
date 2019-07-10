/*
 * @Author:  
 * @Desc: 首页商品展示框 
 */

 <template>
    <section class="yx-showcase-container">
        <div class="yx-showcase-head">
            <h3>
                {{title}}
                <a class="fr" v-if="more" href="#">更多&gt;</a>
            </h3>
        </div>
        <div class="yx-showcase-content">
            <slot></slot>
        </div>
    </section>     
 </template>
 
 <script>
    export default{
        name: "ProductShowContainer",
        props: {
            title: {
                type: String,
                default: ""
            },
            more: String
        },
        data(){
            return {
                
            }
        }
    }
 </script>

<style lang="scss" scoped> 
    .yx-showcase-container{
        margin-bottom: 10px;
        padding: 0 15px;
        background: $white;
        .yx-showcase-head{
            line-height: 50px; 
            h3{
                font-size: 16px;
                color: $black;
                a{
                    font-size: 14px; 
                }
            }
        }
        .yx-showcase-content{
            padding-bottom: 10px;
        }
    }

</style>
