<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['edit', 'remove'])

const editCard = (item) => {
  emits('edit', item)
}
const removeCard = (item) => {
  emits('remove', item)
}
</script>

<template>
  <div class="card sm:w-2/4 md:w-1/3 px-3.5 pb-8" v-for="item in props.posts" :key="item.id">
    <div class="card-item relative h-full rounded-2xl">

      <img v-if="!item.image" alt="card image" src="@/assets/card-img.png" width="100%" class="md:min-h-36 lg:min-h-58 object-cover" />
      <img v-else alt="card image" :src="item.image" width="100%" class="rounded-t-2xl md:min-h-36 lg:min-h-58 object-cover" />

      <div class="pt-4 pl-5 pr-4 pb-6 sm:pt-7 sm:pl-8 sm:pr-7 sm:pb-10">
        <h2 class="text-red-500 font-bold leading-normal pb-2 sm:pb-4">{{ item.title }}</h2>
        <p class="text-sm leading-normal">{{ item.description }}</p>

        <button 
          class="bg-orange text-white uppercase h-9 w-28 mt-6 sm:mt-7 text-sm leading-normal rounded-lg font-semibold" 
          @click="editCard(item)"
        >
          edit
        </button>
      </div>

      <div class="w-12 h-12 absolute -right-2 -top-3">
        <img alt="remove icon" src="@/assets/icons/remove-icon.svg" width="48" height="48" @click="removeCard(item.id)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  box-shadow: 0px 13px 12px 0px rgba(0, 0, 0, 0.15);
}
</style>
