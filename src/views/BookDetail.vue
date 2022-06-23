<template>
  <div class="flex justify-between items-center bg-white text-center p-3 mb-5">
    <IconArrowLeft class="cursor-pointer" @click="router.push('/books')"/>
    <h1 class="text-3xl font-bold">{{book.title}}</h1>
    <IconEdit class=" cursor-pointer" />
  </div>
  <div>
    <h2 class="bg-white p-4 mb-4">書名：{{book.title}}</h2>
    <h3 class="bg-white p-4 mb-4">作者：{{book.author}}</h3>
    <p class="bg-white p-4">簡介：{{book.description}}</p>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import IconEdit from '@/components/icons/IconEdit.vue';

const route = useRoute();
const router = useRouter();
const axios = inject('axios');
const book = ref({});

const getBook = () => {
  const url = `https://fe-interview-api.unnotech.com/books/${route.params.bookId}`;
  axios
    .get(url)
    .then((res) => {
      book.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  getBook();
});
</script>
