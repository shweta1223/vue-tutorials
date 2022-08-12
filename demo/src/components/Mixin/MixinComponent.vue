<template>
    <div>
        <h4 class="title">Counter Example</h4>
       <click-counter/>
       <hover-counter/>
       <h4 class="title">Model Example</h4>
       <model-component/>
       <h4 class="title">Tooltip Example</h4>
       <the-tooltip/>
       <h4 class="title">Option Merging Example</h4>
       <mixin-optionMerge/>
    </div>
</template>

<script>
export default {
  
  
        name:"MixinComponent"
    }
</script>

<style scoped>
.title{
    color: brown;
    
}

</style>