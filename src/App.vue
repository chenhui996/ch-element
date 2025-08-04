<script setup lang="ts">
import Button from './components/Button/Button.vue';
import type { ButtonInstance } from './components/Button/types';
import { ref, onMounted, watch } from 'vue';
import Collapse from './components/Collapse/Collapse.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import type { NameType } from './components/Collapse/type';

const buttonRef = ref<ButtonInstance>();
const collapseModelValue = ref<NameType[]>(['2']);
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
    <br />
    <br />
    <Collapse v-model="collapseModelValue" accordion>
      <CollapseItem name="1" title="标题1">
        <template #title>
          <span>标题1</span>
        </template>
        <template #content>
          <div>内容1</div>
        </template>
      </CollapseItem>
      <CollapseItem name="2" title="标题2">
        <template #title>
          <span>标题2</span>
        </template>
        <template #content>
          <div>内容2</div>
        </template>
      </CollapseItem>
      <CollapseItem name="3" title="标题3" disabled>
        <template #content>
          <div>内容3</div>
        </template>
      </CollapseItem>
    </Collapse>
  </main>
</template>

<style scoped></style>
