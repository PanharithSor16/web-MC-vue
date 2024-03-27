<template>
  <div>
    <button
      @click="showForm = true"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Update Status
    </button>

    <!-- Modal Dialog -->
    <div v-if="showForm" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div>
                  <h2 class="mb-2 font-medium">UpdateStatus</h2>
                  <div class="flex items-center">
                    <div
                      class="bg-slate-200 mr-1 h-8 w-24 border-2 rounded-md text-center place-items-center"
                    >
                      <input
                        type="radio"
                        id="not-yet"
                        value="Not-yet"
                        v-model="picked"
                      />
                      <label for="not-yet" class="ml-1">Not yet</label>
                    </div>
                    <div
                      class="bg-green-500 mr-1 h-8 w-24 border-2 rounded-md text-center place-items-center items-center"
                    >
                      <input
                        type="radio"
                        id="stop"
                        value="Stop"
                        v-model="picked"
                      />
                      <label for="stop" class="ml-1">Stop</label>
                    </div>
                    <div
                      class="bg-yellow-500 mr-1 h-8 w-24 border-2 rounded-md text-center place-items-center"
                    >
                      <input
                        type="radio"
                        id="run"
                        value="Run"
                        v-model="picked"
                      />
                      <label for="run" class="ml-1">Run</label>
                    </div>
                    <div
                      class="bg bg-red-500 h-8 w-24 border-2 rounded-md text-center place-items-center"
                    >
                      <input
                        type="radio"
                        id="finish"
                        value="Finish"
                        v-model="picked"
                      />
                      <label for="finish" class="ml-1">Finish</label>
                    </div>
                  </div>
                  <h2 class="mb-2 mt-2 font-medium">Plan to Finish</h2>
                  <div>
                    <!-- the input data and time -->
                    <div>
                      <DateTime/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="updateStatus"
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
            <button
              @click="showForm = false"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal Dialog -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DateTime from './DateTime.vue'
const picked = ref("");
const showForm = ref(false);
const statusText = ref("");

const updateStatus = () => {
  console.log("Posted status:", statusText.value);
  showForm.value = false;

  // Clear the status text after posting

  const selectedDate = ref("");
  const selectedTime = ref("");

  const updateDate = (event) => {
    selectedDate.value = event.target.value;
  };

  const updateTime = (event) => {
    selectedTime.value = event.target.value;
  };

  // const selectedDateTime = computed(() => {
  //   if (selectedDate.value !== null && selectedTime.value !==null) {
  //     return `${selectedDate.value} ${selectedTime.value}`;
  //   } else {
  //     return "";
  //   }
  // });
};
</script>
