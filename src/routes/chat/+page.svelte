<script lang="ts">
  import socket from "$lib/socket";

  let message = "";
  let messages: any = [];

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

<div class="px-5 py-10 flex flex-col gap-2 container">
  <p class="font-medium text-sm">Message Here:</p>
  <ul id="messages" class="flex flex-col gap-2">
    {#each messages as msg}
      <li class="">- {msg}</li>
    {/each}
  </ul>
  <div>
    <form on:submit|preventDefault={sendMessage}>
      <input bind:value={message} autocomplete="off" class="px-4 py-2" />
      <button type="submit" class="px-4 py-1 border rounded-lg">Send</button>
    </form>
  </div>
</div>

<style></style>
