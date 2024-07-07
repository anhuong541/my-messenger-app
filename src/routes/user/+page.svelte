<script lang="ts">
  import io from "socket.io-client";

  let socket;
  let message = "";
  let messages: any = [];

  // Establish socket connection
  socket = io("http://localhost:3000");

  // Listen for incoming messages
  socket.on("chat message", (msg) => {
    messages = [...messages, msg];
  });

  // Send a message
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chat message", message);
      message = "";
    }
  };
</script>

<div id="chat-container">
  <ul id="messages">
    {#each messages as msg}
      <li>{msg}</li>
    {/each}
  </ul>
  <form on:submit|preventDefault={sendMessage}>
    <input bind:value={message} autocomplete="off" />
    <button type="submit">Send</button>
  </form>
</div>

<style></style>
