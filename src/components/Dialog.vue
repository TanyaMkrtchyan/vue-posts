<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  isOpen: Boolean
})
</script>

<template>
  <transition name="fade">

    <div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-4/5 lg:w-182 p-6 sm:p-10 xl:p-20">
            <slot name="modal-body"></slot>
            <slot name="modal-footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>