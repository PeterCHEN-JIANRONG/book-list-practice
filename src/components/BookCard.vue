<template>
  <div
    class="bg-white border rounded p-4 cursor-pointer hover:shadow-md"
    @click="router.push(`/books/${book.id}`)"
  >
    <h2 class="font-bold text-2xl mb-2 truncate">{{ book.title }}</h2>
    <h3 class="text-lg mb-2">作者：{{ book.author }}</h3>
    <p class="text-gray-500 h-44 overflow-hidden">{{ book.description }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  book: {
    type: Object,
    default: () => {},
  },
});
</script>
