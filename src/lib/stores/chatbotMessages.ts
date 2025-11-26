import { writable } from 'svelte/store';

export const chatbotMessages = writable([
  { from: 'bot', text: 'Olá eu sou o Klaus, assitente da IT VALLEY em que posso te ajudar ?' }
]);
