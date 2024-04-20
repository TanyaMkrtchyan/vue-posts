import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: 1,
        title: 'Lorem Ipsum is dolor 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        id: 2,
        title: 'Lorem Ipsum is dolor 2',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
    post: '',
  }),

  getters: {
    getPosts(state) {
        return state.posts
    },
    getSelectedPost(state) {
      console.log('state.post', state.post);
        return state.post
    }
  },

  actions: {
    // add a new post
    addPost(data) {
      this.posts.push(data)
    },

    // set selected post
    setPost(value) {
      this.post = value
    },

    // remove post
    removePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId)
    },

    // edit post
    editPost(id, newData) {
      const index = this.posts.findIndex(post => post.id === id)

      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], ...newData }
      }
    }
  }
})