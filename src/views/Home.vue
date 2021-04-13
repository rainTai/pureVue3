<template>
  <div class="main"></div>
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
    // @ts-ignore //获取全局变量
    const { ctx } = getCurrentInstance();
    onMounted(() => {});
    onBeforeUnmount(() => {});
    return {};
  },
});
</script>

<style scoped lang="scss">
.main {
  color: $redColor;
  @include fontUltraBig;
}
</style>
