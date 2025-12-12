
<script>
  import { chatbotMessages } from '../lib/stores/chatbotMessages';

  import { t } from '../lib/i18n';
  let userInput = '';
  let loading = false;
  let sessionId = crypto.randomUUID();

  // Mensagem inicial internacionalizada
  $: messages = $chatbotMessages.length > 0 ? $chatbotMessages : [{ from: 'bot', text: $t('chatbot_initial') }];

  const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '');
  console.log('API_BASE (runtime):', API_BASE);

  async function sendMessage() {
    if (!userInput.trim()) return;
    const input = userInput;
    chatbotMessages.update(msgs => [...msgs, { from: 'user', text: input }]);
    userInput = '';
    loading = true;
    try {
      // Preparar histórico para enviar ao backend
      const historico = $chatbotMessages
        .slice(1) // Remove mensagem inicial de boas-vindas
        .map(msg => ({
          role: msg.from === 'user' ? 'user' : 'assistant',
          content: msg.text
        }));

      const response = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          mensagem: input,
          session_id: sessionId,
          historico: historico
        })
      });
      const data = await response.json();
      if (data?.resposta) {
        chatbotMessages.update(msgs => [...msgs, { from: 'bot', text: data.resposta }]);
      } else {
        chatbotMessages.update(msgs => [...msgs, { from: 'bot', text: 'Erro: resposta inesperada.' }]);
      }
    } catch (e) {
      chatbotMessages.update(msgs => [...msgs, { from: 'bot', text: 'Erro ao conectar ao servidor.' }]);
    }
    loading = false;
  }
 </script>

<style>
  .chatbot-container {
    border-radius: 1.2rem;
    max-width: 350px;
    background: transparent;
    /* border: 1.5px solid var(--panel-border); */
    box-shadow: 0 8px 32px rgba(124, 58, 237, 0.13), 0 1.5px 8px rgba(15,23,42,0.08);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: inherit;
  }
  .chatbot-header {
    background: linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%);
    color: #fff;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 0.7rem 1.2rem;
    letter-spacing: 0.01em;
    border-bottom: 1.5px solid var(--panel-border);
    text-align: left;
  }
  .messages {
    min-height: 180px;
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 1rem;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .message {
    padding: 0.6rem 1rem;
    border-radius: 1.1rem;
    font-size: 1rem;
    max-width: 85%;
    word-break: break-word;
    box-shadow: 0 1px 4px rgba(124,58,237,0.04);
    color: var(--text-color);
  }
  .user {
    background: linear-gradient(135deg, #38bdf8 0%, #7c3aed 100%);
    color: #fff;
    align-self: flex-end;
    text-align: right;
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.1rem;
    box-shadow: 0 2px 8px rgba(56,189,248,0.10);
  }
  .bot {
    background: linear-gradient(135deg, #f8fafc 0%, #ede9fe 100%);
    color: #222;
    align-self: flex-start;
    text-align: left;
    border-bottom-left-radius: 0.3rem;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    border-bottom-right-radius: 1.1rem;
    box-shadow: 0 2px 8px rgba(124,58,237,0.08);
  }
  :root[data-theme='dark'] .bot {
    background: linear-gradient(135deg, #18192b 0%, #312e81 100%);
    color: #f8fafc;
  }
  form {
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem 1rem 1rem;
  }
  input[type="text"] {
    flex: 1;
    padding: 0.6rem 1rem;
    border-radius: 999px;
    border: 1.5px solid var(--panel-border);
    background: var(--panel-bg);
    color: var(--text-color);
    font-size: 1rem;
    outline: none;
    transition: border 0.2s;
  }
  input[type="text"]:focus {
    border-color: #7c3aed;
  }
  button {
    padding: 0.45rem 0.7rem;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%);
    color: #fff;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(124,58,237,0.10);
    transition: background 0.2s, box-shadow 0.2s;
  }
  button:disabled {
    background: #a5b4fc;
    cursor: not-allowed;
    color: #f1f5f9;
  }
</style>


<div class="chatbot-container">
  <div class="chatbot-header">
    {$t('chatbot_title')}
  </div>
  <div class="messages">
    {#each messages as msg}
      <div class="message {msg.from}">{msg.text}</div>
    {/each}
    {#if loading}
      <div class="message bot">...</div>
    {/if}
  </div>
  <form on:submit|preventDefault={sendMessage}>
    <input type="text" bind:value={userInput} placeholder={$t('chatbot_placeholder')} autocomplete="off" />
    <button type="submit" disabled={loading || !userInput.trim()}>{$t('chatbot_send')}</button>
  </form>
</div>
