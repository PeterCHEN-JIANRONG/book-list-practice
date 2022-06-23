<template>
  <div class="flex justify-between items-center bg-white text-center py-5 px-3 mb-5">
    <IconArrowLeft class="cursor-pointer" @click="router.push('/books')" />
    <h1 class="text-lg md:text-3xl font-bold">新增書本</h1>
    <span></span>
  </div>
  <Form ref="form" class="" v-slot="{ errors }" @submit="newBook">
    <div class="mb-3">
      <label for="title" class="inline-block mb-1"
        >書名
        <span class="text-red-600 mr-2">*</span>
      </label>
      <Field
        id="title"
        name="書名"
        type="text"
        class="w-full p-2"
        :class="{ 'is-invalid': errors['書名'] }"
        placeholder="請輸入書名"
        v-model="book.title"
        rules="required"
      />
      <ErrorMessage name="書名" class="mt-1 block text-red-600" />
    </div>
    <div class="mb-3">
      <label for="author" class="inline-block mb-1"
        >作者 <span class="text-red-600 mr-2">*</span>
      </label>
      <Field
        id="author"
        name="作者"
        type="text"
        class="w-full p-2"
        :class="{ 'is-invalid': errors['作者'] }"
        placeholder="請輸入作者"
        v-model="book.author"
        rules="required"
      />
      <ErrorMessage name="作者" class="mt-1 block text-red-600" />
    </div>
    <div class="mb-3">
      <label for="description" class="inline-block mb-1">備註 </label>
      <textarea name="備註" id="description" rows="8" class="w-full p-2" v-model="book.description">
      </textarea>
    </div>
    <div class="flex gap-5">
      <button
        class="bg-transparent w-1/2 hover:bg-blue-500 text-blue-700 font-semibold
        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
        @click.prevent="router.push('/books')"
      >
        返回
      </button>
      <button
        type="submit"
        class="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full"
      >
        新增
      </button>
    </div>
  </Form>
</template>

<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';

const router = useRouter();
const axios = inject('axios');
const Swal = inject('$swal');

// 送出成功
const postSuccess = (title, text, path) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    router.push(path);
  });
};

// 新增書籍
const book = ref({});
const newBook = () => {
  const { title, author, description } = book.value;
  const data = {
    title,
    author,
    description,
  };
  const url = `${process.env.VUE_APP_API}/books/`;
  axios
    .post(url, data)
    .then(() => {
      postSuccess('書籍', '新增成功', '/books');
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
