<template>
    <div class="ch-collapse">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import { collapseContextKey, type NameType, type CollapseProps, type CollapseEmits } from './type';

defineOptions({
    name: 'ChCollapse',
})

const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmits>();

const activeNames = ref<NameType[]>(props.modelValue);

watch(() => props.modelValue, (newVal: NameType[]) => {
    activeNames.value = newVal;
})

if (props.accordion && props.modelValue.length > 1) {
    console.warn('accordion mode must only set one active item');
}

const handleItemClick = (name: NameType) => {
    if (props.accordion) {
        activeNames.value = [activeNames.value[0] === name ? '' : name];
    } else {
        const index = activeNames.value.indexOf(name);
        if (index > -1) {
            activeNames.value.splice(index, 1);
        } else {
            activeNames.value.push(name);
        }
    }

    emit('update:modelValue', activeNames.value);
    emit('change', activeNames.value);
}

provide(collapseContextKey, {
    activeNames,
    handleItemClick,
})

</script>

<style scoped></style>