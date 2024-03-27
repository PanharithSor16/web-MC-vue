<template>
  <table
    class="m-3 w-[120%] md:w-[100%]  place-content-around items-center border border-collapse self-center fixed-table"
  >
    <thead class="sticky bg-slate-300 ">
      <tr>
        <th class="border -2 " v-for="(item, index) in ListItem" :key="index">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(machinePlan, index) in MachinePlan"
        :key="index"
        class=" text-center"
      >
        <td class="border p-2 ">{{ machinePlan.nameMachine }}</td>
        <td class="border p-2 ">
          <input class=""
            type="checkbox"
            v-model="machinePlan.ipqc"
            id="checkbox"
          />         
        </td>
        <td class="border p-2">{{ machinePlan.no }}</td>
        <td class="border p-2">{{ machinePlan.shipment }}</td>
        <td class="border p-2">{{ machinePlan.code }}</td>
        <td class="border p-2">{{ machinePlan.nameItem }}</td>
        <td class="border p-2">{{ machinePlan.pos }}</td>
        <td class="border p-2">{{ machinePlan.pesise }}</td>
        <td class="border p-2" :class="getBackgroundColor(machinePlan.wire)" >{{ machinePlan.wire }}</td>
        <td class="border p-2">{{ machinePlan.long }}</td>
        <td class="border p-2">{{ machinePlan.semi}}</td>
        <td class="border p-2">{{ machinePlan.qty}}</td>
        <td class="border p-2" @click="count++"  :disabled="!machinePlan.ipqc"> {{ count }} {{ machinePlan.status }}
        </td>
        <td class="border p-2">
          {{ machinePlan.planFinish }}
        </td>
      
      </tr>
    </tbody>
  </table>
 

 
</template>

<script setup>
import { ref } from 'vue';
import { MachinePlan, ListItem } from '../data';
const count = ref(0)



function getBackgroundColor(text){
  if (text.includes('VLT')) {
    return 'bg-purple-600 '; // Set the background color to cornflower blue
  } if (text.includes('RED')) {
    return "bg-red-600 "
  }if (text.includes("BLU")) {
    return "bg-blue-600"
  } else {
    return " "
  }
  
}



</script>
