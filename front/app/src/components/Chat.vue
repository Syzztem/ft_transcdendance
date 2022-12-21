<script lang="ts">
import { ref } from 'vue'

export default {
    data() {
        return {
        }
    },
    methods: 
    {
        sendmsg() 
        {
            let send = <HTMLElement> document.getElementById('id_newmsg')
            let input = <any> document.getElementById('inputid')
            send.innerHTML += input.value + '<br/>'
            input.value = ''
        }
    },
}

</script>

<template>
    <v-container class = "container">
        <div id="id_newmsg"></div>
        <input @change='sendmsg' id='inputid'>
    </v-container>
  </template>

<style scoped>
.container
{
    color:red;
}
</style>










