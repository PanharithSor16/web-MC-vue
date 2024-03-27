<template>
    <div>
      <!-- Example divs -->
      <div v-for="(content, index) in divContents" :key="index" :class="getBackgroundColor(content)">
        <p class="text-white">{{ content }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define the contents of the divs
  const divContents = ref([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  ]);
  
  // Function to determine the background color class based on the text content
  function getBackgroundColor(content) {
    // Logic to determine the background color class based on the content
    // You can modify this logic to suit your requirements
    
    // Example: If the text contains certain keywords, change the background color class
    if (content.includes('example')) {
      return 'bg-blue-500'; // Set the background color class to blue
    } else {
      return 'bg-gray-500'; // Default background color class (gray)
    }
  }
  </script>
  
 
  