/*
 * @Desc: 带中划线标题 
 */

 <template>
     <h3 class="yx-tl"> 
         <span
            :style="{fontSize: `${fontSize}px`}"
         >{{title}}</span>
     </h3>
 </template>

 <script>
 export default {
    name: "ThroughLineTitle",
    props: {
        title: String,
        fontSize: {
            type: Number,
            default: 17
        }
    }
 }
 </script>

 <style lang="scss">
    $lineWidth: 30px;
    $offset: 6px;
    .yx-tl{
        padding: 25px 0;
        text-align: center;
        span{ 
            position: relative; 
            &::before, &::after{
                position: absolute;
                top: 50%;
                height: 1px;
                background: #ccc;
                width: $lineWidth;
            }
            &::before{
                content: "";
                left: -($lineWidth + $offset);
            }
            &::after{
                content: "";
                right: -($lineWidth + $offset);
            }
        }
    }
 </style>
 
 
 
