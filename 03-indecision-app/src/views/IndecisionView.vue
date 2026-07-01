
<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Pochita</span>
    </div>

    <!-- Messages Container -->
    <ChatMessages :messages="messages" />

    <!-- Message box -->
    <MessageBox @send-message="onMessage"/>
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type {ChatMessage} from '@/interface/chat-message.interface'
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: 'Hola mundo!',
        itsMine: true,
    },
    {
        id: new Date().getTime(),
        message: '¿Quieres ir al cine?',
        itsMine: true,
    },
    { 
        id: new Date().getTime() + 1 ,
        message: 'No',
        itsMine: false,
        image: 'https://yesno.wtf/assets/no/28-e19b6f658f621f7c5980a33f8249a65d.gif'
    }
]);

//Añadimos un metodo para escuchar el evento que emitimos desde el componente MessageBox.vue
// y añadirlo a nuestro array de mensajes
const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text
    })
}

</script>