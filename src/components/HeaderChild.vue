<template>
    <div >
      <select v-model="selectedMachineNumber" @change="updateSelectedchineNameOptions">
        <option :value="machineType.value" v-for="machineType in MachineTypeName" :key="machineType.id">{{ machineType.label }}</option>
      </select>
      <select v-model="selectedMachineType" @change="updateSelectedMachineNameOptions">
        <option :value="machineName.value" v-for="machineName in selectedMachineTypeOptions" :key="machineName.id">{{ machineName.label }}</option>
      </select>
      <select v-model="selectedMachineName">
        <option :value="MachineName.value" v-for="MachineName in selectedMachineNameOptions" :key="MachineName.id">{{ MachineName.label }}</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { MachineTypeName } from '../data';
  
  const selectedMachineNumber= ref('')
  const selectedMachineType = ref('');
  const selectedMachineName = ref('');
  
  const selectedMachineTypeOptions = computed(() => {
    const machineType = MachineTypeName.find(item => item.value === selectedMachineNumber.value);
    return machineType ? machineType.children : [];
  });
  
  const selectedMachineNameOptions = computed(() => {
    const machineName = selectedMachineTypeOptions.value.find(item => item.value === selectedMachineType.value);
    return machineName ? machineName.children : [];
  });
  
  const updateSelectedMachineTypeOptions = () => {
    selectedMachineType.value = '';
  };
  
  const updateSelectedMachineNameOptions = () => {
    selectedMachineName.value = '';
  };
  
  onMounted(() => {
    if (MachineTypeName.length > 0) {
        selectedMachineNumber.value = MachineTypeName[0].value;
        updateSelectedMachineTypeOptions();
    }
  });
  
  </script>
  