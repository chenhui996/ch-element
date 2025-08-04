<template>
    <div class="ch-collapse-item" :class="{ 'is-disabled': disabled }" @click="handleClick">
        <div class="ch-collapse-item__header" :id="`item-header-${name}`">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="ch-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { collapseContextKey } from './type';
import type { CollapseItemProps } from './type';

defineOptions({
    name: 'ChCollapseItem',
})
const props = defineProps<CollapseItemProps>();

const collapseContext = inject(collapseContextKey);

const isActive = computed(() => {
    return collapseContext?.activeNames.value.includes(props.name);
})
const handleClick = () => {
    if (props.disabled) return;
    collapseContext?.handleItemClick(props.name);
}
</script>