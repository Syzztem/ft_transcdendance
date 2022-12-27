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
            let send = <HTMLElement> document.getElementById('chatbox')
            let input = <any> document.getElementById('inputid')
            send.innerHTML += input.value + '<br/>'
            input.value = ''
        }
    },
}

</script>

<template>
    <v-container class = "container">
        <div class="row">
            <div id="chatbox"  class="column"></div>
        <div id="userlist" class="column">users</div>
        <div id="chanlist" class="column">chans</div>
        </div>
    </v-container>
    <input @change='sendmsg' id='inputid'>
    
  </template>

<style scoped>
.container
{
    background-color: rgb(145, 255, 0);
    display: flex;
    content: "";
    display: table;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

#chatbox
{
    background-color: rgb(17, 17, 194);
    color: rgb(53, 187, 0);
}
#userlist
{
    background-color: red;
}
#chanlist
{
    background-color: green;
}

#column {
  float: left;
  width: 33.33%;
}
</style>










