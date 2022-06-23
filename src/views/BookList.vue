<template>
  <div class="flex justify-between items-center bg-white py-5 px-3 mb-3">
    <span></span>
    <h1 class="text-3xl font-bold">書本列表</h1>
    <IconPlus class="cursor-pointer" size="30" @click="router.push('/newBook')"/>
  </div>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <template v-for="book in books" :key="book.id">
      <li v-if="book.title">
        <BookCard :book="book" />
      </li>
    </template>
  </ul>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BookCard from '@/components/BookCard.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

const router = useRouter();
const axios = inject('axios');
const books = ref([]);

const getBooks = () => {
  const url = `${process.env.VUE_APP_API}/books/`;
  axios
    .get(url)
    .then((res) => {
      books.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  getBooks();
});
</script>
