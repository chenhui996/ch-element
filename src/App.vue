<script setup lang="ts">
import Button from './components/Button/Button.vue';
import type { ButtonInstance } from './components/Button/types';
import { ref, onMounted } from 'vue';

const buttonRef = ref<ButtonInstance>();

onMounted(() => {
  console.log(buttonRef.value?.ref);
})
</script>

<template>
  <main>
    <!-- <Button ref="buttonRef" type="info" plain disabled>按钮</Button> -->
    <!-- 测试一下 style.css 是否生效 -->
    <Button plain>plain button</Button>
    <Button round>round button</Button>
    <Button circle>Ch</Button>
    <Button disabled>disabled button</Button>
    <br />
    <br />
    <Button type="primary">primary button</Button>
    <Button type="success">success button</Button>
    <Button type="warning">warning button</Button>
    <Button type="danger">danger button</Button>
    <Button type="info">info button</Button>
    <br />
    <br />
    <Button type="primary" plain>primary button</Button>
    <Button type="success" plain>success button</Button>
    <Button type="warning" plain>warning button</Button>
    <Button type="danger" plain>danger button</Button>
    <Button type="info" plain>info button</Button>
    <br />
    <br />
    <Button size="small">small button</Button>
    <Button size="large">large button</Button>
  </main>
</template>

<style scoped></style>
