<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { MachineTypeName } from "../data";

const selectedMachineNumber = ref("");
const selectedMachineType = ref("");
const selectedMachineName = ref("");

const selectedMachineTypeOptions = computed(() => {
  const machineType = MachineTypeName.find(
    (item) => item.value === selectedMachineNumber.value
  );
  return machineType ? machineType.children : [];
});

const selectedMachineNameOptions = computed(() => {
  const machineName = selectedMachineTypeOptions.value.find(
    (item) => item.value === selectedMachineType.value
  );
  return machineName ? machineName.children : [];
});

const updateSelectedMachineTypeOptions = () => {
  selectedMachineType.value = "";
};

const updateSelectedMachineNameOptions = () => {
  selectedMachineName.value = "";
};

onMounted(() => {
  if (MachineTypeName.length > 0) {
    selectedMachineNumber.value = MachineTypeName[0].value;
    updateSelectedMachineTypeOptions();
  }
});

// set time to reload page
const countdown = ref(30);
const startCountdown = () => {
  const interval = setInterval(() => {
    countdown.value -= 1;

    // When countdown reaches 0, reload the page
    if (countdown.value === 0) {
      window.location.reload();
    }
  }, 60000); // 1000 milliseconds = 1 second

  // Clear the interval when the component is destroyed
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
};

onMounted(() => {
  // Start the countdown timer
  startCountdown();
});

// date 
const currentDate = ref('');

onMounted(() => {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDate.value = today.toLocaleDateString(undefined, options);
});
</script>
<template>
  <div>
    <div
      class="w-[95%] m-3 md:flex md:grid-cols-1 place-content-around items-center overflow-x-auto sticky"
    >
      <div
        class="flex rounded-sm border-orange-500 text-center place-content-around items-center font-semibold space-x-3 mb-2"
      >
        <h3>លេខម៉ាសុីនទី:</h3>
        <select
          v-model="selectedMachineNumber"
          @change="updateSelectedMachineTypeOptions"
          class="border rounded-md border-cyan-600 text-cyan-600 h-10 focus:border-orange-500 "
        >
          <option disabled value="" class="">Please select one</option>
          <option
            :value="machineType.value"
            v-for="machineType in MachineTypeName"
            :key="machineType.id"
          >
            {{ machineType.label }}
          </option>
        </select>
      </div>
      <div
        class="flex rounded-sm mb-2 border-orange-500 place-content-around text-center items-center font-semibold space-x-3"
      >
        <h3>ប្រភេទម៉ាសុីន:</h3>
        <select
          v-model="selectedMachineType"
          @change="updateSelectedMachineNameOptions"
          class="border rounded-md border-cyan-600 text-cyan-600 h-10 focus:border-orange-500"
        >
          <option disabled value="" class="">Please select one</option>
          <option
            :value="machineName.value"
            v-for="machineName in selectedMachineTypeOptions"
            :key="machineName.id"
          >
            {{ machineName.label }}
          </option>
        </select>
      </div>
      <div
        class="flex rounded-sm place-content-around border-orange-500 text-center items-center font-semibold space-x-3"
      >
        <h3>ឈ្មោះម៉ាសុីន:</h3>
        <select
          v-model="selectedMachineName"
          class="border rounded-md border-cyan-600 text-cyan-600 h-10 focus:border-orange-500"
        >
          <option disabled value="" class="">Please select one</option>
          <option
            :value="MachineName.value"
            v-for="MachineName in selectedMachineNameOptions"
            :key="MachineName.id"
          >
            {{ MachineName.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- reload the web page and data -->
    <div class="flex place-content-around">
      <div >
        <p class=" text-red-600 font-semibold">Refresh in {{ countdown }} minutes.</p>
      </div>
      <div>
        <p class=" font-semibold text-cyan-500" > {{ currentDate }}</p>
      </div>
    </div>
  </div>
</template>
