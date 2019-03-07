/*
 * @Desc 商品竖状说明标签
 */

 <template>
     <div :class="`s-label ${outerClass}`">
        <slot></slot>
     </div>
 </template>
 
 <script>
 export default {
     name: "SpecificationLabel",
     props: {
         outerClass: String
     }
 }
 </script>

 <style lang="scss">
    $color: #b4a078;
    .s-label{
        display: inline-block;
        width: 16px;
        text-align: center;
        padding: 5px 0;
        writing-mode: vertical-rl;
        color: $color;
        border: 1px solid $color; 
    }
 </style>
 
 
