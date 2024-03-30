<template>
  <nav class="bg-gray-800 p-4">
    <div class="flex justify-between items-center">
      <div class="flex-shrink-0 text-white mr-6">
        Your Logo
      </div>
      <div class="relative" ref="dropdown">
        <button @click="toggleDropdown" class="flex items-center text-white focus:outline-none">
          <span>{{ display }}</span>
          <svg class="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" clip-rule="evenodd" />
          </svg>
        </button>
        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200" 
            v-for="(week, index) in weekname" :key="index" @click="display = week, isDropdownOpen = !isDropdownOpen">
              {{week}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import weekname from '../assets/week.json';


const isDropdownOpen = ref(false);
const dropdown = ref(null);
let display = ref('週次');

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};


</script>
