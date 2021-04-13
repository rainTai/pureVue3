<template>
  <div class="main">
    <Pieces />
    <Controller />
    <Space />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from "vue";
import Pieces from "./left/pieces.vue";
import Controller from "./right/controller.vue";
import Space from "./middle/space.vue";
export default defineComponent({
  name: "Home",
  components: {
    Pieces,
    Controller,
    Space,
  },
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
.main {
  color: $redColor;
  @include fontUltraBig;
}
</style>
