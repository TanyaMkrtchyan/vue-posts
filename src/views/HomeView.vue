<script setup>

import { ref, computed } from 'vue'
import { usePostsStore } from '@/stores/posts'

// components
import Card from '../components/Card.vue'
import Dialog from '../components/Dialog.vue'

const store = usePostsStore()
const allPosts = ref(store.getPosts)
const selectedPost = ref(store.getSelectedPost)

const title = ref('')
const description = ref('')
const isOpenModal = ref(false)
const isNameEmpty = ref(false)
const isDescriptionEmpty = ref(false)
const isEdit = ref(false)
const image = ref(null)


const openModal = () => {
  isOpenModal.value = true
}

const lastPost = computed(() => {
  if (allPosts.value && allPosts.value.length > 0) {
    return allPosts.value[allPosts.value.length - 1]
  } else {
    return null
  }
})

const addCard = () => {
  if (title.value && description.value) {
    store.addPost({
      id: lastPost.value ? lastPost.value.id + 1 : 1,
      title: title.value,
      description: description.value,
      image: image.value
    })

    resetData()
  } else {
    title.value ? isNameEmpty.value = false : isNameEmpty.value = true
    description.value ? isDescriptionEmpty.value = false : isDescriptionEmpty.value = true
  }
}

const resetData = () => {
  title.value = ''
  description.value = ''
  isOpenModal.value = false
  isNameEmpty.value = false
  isDescriptionEmpty.value = false
  image.value =  null
}

const checkName = () => {
  title.value ? isNameEmpty.value = false : isNameEmpty.value = true
}
const checkDescription = () => {
  description.value ? isDescriptionEmpty.value = false : isDescriptionEmpty.value = true
}

const handleEdit = (editedPost) => {
  isEdit.value = true
  store.setPost(editedPost)
  selectedPost.value = editedPost
  isOpenModal.value = true
  title.value = editedPost.title
  description.value = editedPost.description
}
const editCard = () => {
  if (title.value && description.value) {
    const postId = selectedPost.value.id
    store.editPost(postId, { 
      title: title.value,
      description: description.value
    })
    isEdit.value = false
    resetData()
  } else {
    title.value ? isNameEmpty.value = false : isNameEmpty.value = true
    description.value ? isDescriptionEmpty.value = false : isDescriptionEmpty.value = true
  }
}

const handleRemove = (removedPost) => {
  store.removePost(removedPost)
  allPosts.value = store.getPosts
}


const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return;

  const reader = new FileReader()
  reader.onload = (e) => {
    image.value = e.target.result
  };
  reader.readAsDataURL(file)
}

</script>

<template>
  <main class="pt-10 sm:pt-16 2xl:pt-24 pb-16">
    <div class="container m-auto">
      <div class="flex flex-wrap">
        <Card :posts="allPosts" @edit="handleEdit" @remove="handleRemove" />

        <div class="card w-full sm:w-2/4 md:w-1/3 px-3.5 pb-8">
          <div class="card-special flex justify-center items-center w-full h-full min-h-98 2xl:min-h-102">
            <button @click="openModal()">
              <img class="w-28" alt="card image" src="@/assets/icons/add-icon.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <Dialog :isOpen="isOpenModal">
      <template v-slot:modal-body>
        <div>
          <div class="mb-5">
            <label class="block capitalize mb-2">name</label>
            <input 
              class="form-input h-11 w-full rounded-3xl bg-darkGray px-4" 
              :class="isNameEmpty ? 'border-2 border-error' : ''" 
              v-model="title"  
              type="text"         
              @input="checkName"
            />
            <p v-if="isNameEmpty" class="text-error text-sm">Name is required field!</p>
          </div>

          <div>
            <label class="block capitalize mb-2">description</label>
            <textarea 
              class="form-input w-full rounded-3xl bg-darkGray resize-none p-4 h-40" 
              :class="isDescriptionEmpty ? 'border-2 border-error' : ''" 
              v-model="description" 
              @input="checkDescription"
            />
            <p v-if="isDescriptionEmpty" class="text-error text-sm">Description is required field!</p>
          </div>
        </div>
      </template>
      <template v-slot:modal-footer>
        <div class="flex justify-between mt-7">
          <div class="upload-block w-45 h-9 flex items-center">
            <div v-if="image" class="mt-4">
              <img :src="image" alt="uploaded img" class="w-44 object-cover rounded-md" />
            </div>
            <div v-else>
              <label for="upload" class="cursor-pointer	label capitalize w-full text-white text-sm h-9 text-center p-2 rounded-lg">upload image</label>
              <input type="file" id="upload" hidden @change="handleFileUpload" />
            </div>
          </div>
          
          <button v-if="isEdit" class="bg-orange text-white uppercase h-9 w-28 text-sm leading-normal rounded-lg font-semibold" @click="editCard()">edit</button>
          <button v-else class="bg-orange text-white uppercase h-9 w-28 text-sm leading-normal rounded-lg font-semibold" @click="addCard()">save</button>
        </div>
      </template>
    </Dialog>
  </main>
</template>

<style scoped>
.container {
  max-width: 1274px;
}

.card-special {
  border-radius: 43px;
  background: linear-gradient(180deg, #4FDD88 0%, #87C5A7 100%);
  box-shadow: 0px 13px 12px 0px rgba(0, 0, 0, 0.15);
}

.file-btn {
  border-radius: 9px;
  background: linear-gradient(90deg, #FFB763 0%, #FF5757 100%);
}

.upload-block .label {
  background: linear-gradient(90deg, #FFB763 0%, #FF5757 100%);
}
</style>