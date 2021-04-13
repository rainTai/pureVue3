<template>
  <div class="left">
 左
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from "vue";
export default defineComponent({
  name: "Home",
  setup: () => {
    // @ts-ignore //注释这个引用报错
    const { ctx } = getCurrentInstance();
    const THREE = ctx.$three;
    onMounted(() => {});
    onBeforeUnmount(() => {});
    return {};
  },
});
</script>

<style scoped lang="scss">
.body {
  color: $redColor;
  @include fontUltraBig;
}
</style>
