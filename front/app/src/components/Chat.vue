<script lang="ts">
import IMessage from '../models/IMessage'

export default {
    data()
    {
        return {
        }
    },
    computed: {
        messages: {
            get() {
                return this.$store.getters.getMessages
            },
            set(val: IMessage) {
                this.$store.commit('setMessages', val)
            }
        }
    },
    mounted() {
        this.messages[0] = 'test'
        this.messages[1] = 'test'
    },
    /*methods: {
        sendMessage()
    }*/
}
</script>

<template>
    <div id="divMessages">
        <h2>{{messages}}</h2>
    </div>
    <div id="divInput">
        <textarea>user input</textarea>
    </div>
    <div>
        <button id="sendButton">send msg</button>
    </div>
</template>

<style scoped>
</style>
