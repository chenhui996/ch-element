<template>
    <button ref="buttonRef" class="ch-button" :class="{
        [`ch-button--${type}`]: type,
        [`ch-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
    }" :disabled="disabled" :type="nativeType" :autofocus="autofocus">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';

defineOptions({
    name: 'ChButton',
})

withDefaults(defineProps<ButtonProps>(), {
    type: 'primary',
    size: 'small',
    plain: false,
    round: false,
    circle: false,
    disabled: false,
    nativeType: 'button',
    autofocus: false,
});

const buttonRef = ref<HTMLButtonElement | null>(null);

defineExpose({
    ref: buttonRef,
})
</script>

<style>
.ch-button {
    background-color: var(--mian-bg-color);
}
</style>