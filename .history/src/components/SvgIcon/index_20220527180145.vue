<template>
  <svg
    class="svgClass"
    :style="{ fontSize: size + 'px', color: color }"
    aria-hidden="true"
    @click.stop="handleClick"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup name="svgIcon">
name='svg-icon'
const emit = defineEmits(['click'])

const props = defineProps({
  size: {
    type: Number,
    default: 16
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'rgba(0, 0, 0, 0.65);'
  }
})

const handleClick = () => {
  emit('click')
}

const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>
<style scoped>
.svgClass {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  outline: 0;
}
</style>
