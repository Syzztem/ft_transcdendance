<script lang="ts" setup>

import { reactive, ref } from "vue";

const state = reactive
	<{
      messages: string[],
      currentMessage: string,
    }>
	({
      messages: [],
      currentMessage: '',
    })

function UpdateMessages()
{
	state.messages.push(state.currentMessage)
	state.currentMessage = ''
}

</script>

<template>
	<div class = "container">
		<div class="users">users</div>
		<div class="div">messages
			<div v-for="message in state.messages" :key="message">{{ message }}</div>
		</div>
		<div class="channels">channels</div>
	</div>
	
	<input v-model="state.currentMessage" @change="UpdateMessages">
</template>


<style>

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

</style>