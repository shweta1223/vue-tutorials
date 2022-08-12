<template>
    <div class="tooltip-demo">
       <h2 @mouseover="toggleShow">Check the Color</h2>
        <model-card v-if="isShowToggle" class="tooltip">
          <p>I'm a tooltip this time</p>
        </model-card>
    </div>
</template>

<script>
import Toggle from '../../../mixins/toggle'

    export default {
        name:'TheTooltip',
        mixins:[Toggle]
    }
</script>

<style  scoped>
.tooltip-demo {
  position: relative;
}

.tooltip {
	position: absolute;
  transform: translate3d(-20%, -160%, 0);
	background: #000000;
  color: white;
  width: 280px;
	border: 1px solid #8ef5c5;
}

.tooltip:after, .tooltip:before {
	top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.tooltip:after {
	border-color: rgba(0, 0, 0, 0);
	border-top-color: #000000;
	border-width: 10px;
	margin-left: -10px;
}
.tooltip:before {
	border-color: rgba(142, 245, 197, 0);
	border-top-color: #8ef5c5;
	border-width: 11px;
	margin-left: -11px;
}
</style>