<template>
  <div class="flex justify-between items-center bg-white text-center py-5 px-3 mb-5">
    <IconArrowLeft class="cursor-pointer" @click="router.push('/books')" />
    <h1 class="text-lg md:text-3xl font-bold">{{ book.title }}</h1>
    <IconEdit class="cursor-pointer" @click="openEdit" />
  </div>
  <div v-show="!isEdit">
    <h2 class="bg-white p-4 mb-4">書名：{{ book.title }}</h2>
    <h3 class="bg-white p-4 mb-4">作者：{{ book.author }}</h3>
    <p class="bg-white p-4">備註：{{ book.description }}</p>
  </div>
  <Form v-show="isEdit" ref="form" class="" v-slot="{ errors }" @submit="editBook(book.id)">
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
        v-model="tempBook.title"
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
        v-model="tempBook.author"
        rules="required"
      />
      <ErrorMessage name="作者" class="mt-1 block text-red-600" />
    </div>
    <div class="mb-3">
      <label for="description" class="inline-block mb-1">備註 </label>
      <textarea
        name="備註"
        id="description"
        rows="8"
        class="w-full p-2"
        v-model="tempBook.description"
      >
      </textarea>
    </div>
    <div class="flex gap-5">
      <button
        class="bg-transparent w-1/2 hover:bg-blue-500 text-blue-700 font-semibold
         hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
        @click.prevent="closeEdit"
      >
        取消
      </button>
      <button
        type="submit"
        class="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
         px-10 rounded-full"
      >
        修改
      </button>
    </div>
  </Form>
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
const tempBook = ref({});

const getBook = () => {
  const url = `https://fe-interview-api.unnotech.com/books/${route.params.bookId}`;
  axios
    .get(url)
    .then((res) => {
      book.value = res.data;
      tempBook.value = JSON.parse(JSON.stringify(book.value));
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  getBook();
});

// 編輯書籍
const isEdit = ref(false);
const editBook = (id) => {
  const { title, author, description } = tempBook.value;
  const data = {
    title, author, description,
  };
  const url = `https://fe-interview-api.unnotech.com/books/${id}`;
  axios
    .patch(url, data)
    .then((res) => {
      console.log('修改成功');
      book.value = res.data;
      isEdit.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
};

// 開啟編輯
const openEdit = () => {
  tempBook.value = JSON.parse(JSON.stringify(book.value));
  isEdit.value = true;
};

// 關閉編輯
const closeEdit = () => {
  isEdit.value = false;
};
</script>
