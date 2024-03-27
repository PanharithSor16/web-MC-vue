<template>
  <div class="text-center flex items-center">
    <div class=" h-auto border-2 rounded-md border-green-400 mr-2 text-center justify-items-center">
      <label for="date" class=" font-medium mr-1">Select Date:</label>
      <input
        type="date"
        id="date"
        v-model="selectedDate"
        @change="updateDate"
      />
    </div>

    <div class="h-auto border-2 rounded-md border-green-400 text-center justify-items-center">
      <label for="time" class="font-medium mr-1" >Select Time:</label>
      <input
        type="time"
        id="time"
        v-model="selectedTime"
        @change="updateTime"
      />
    </div>
  </div>
  <div class=" text-center mt-3">
    <p v-if="selectedDate && selectedTime" class=" font-black text-red-400 ">{{ selectedDateTime }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedDate = ref("");
const selectedTime = ref("");

const updateDate = (event) => {
  selectedDate.value = event.target.value;
};

const updateTime = (event) => {
  selectedTime.value = event.target.value;
};

const selectedDateTime = computed(() => {
  if (selectedDate.value && selectedTime.value) {
    return `${selectedDate.value} ${selectedTime.value}`;
  } else {
    return "";
  }
});
</script>
