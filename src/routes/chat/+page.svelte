<script lang="ts">
  import { realtime } from "$lib/ably-socket";
  import { onMount } from "svelte";

  let message = "";
  let messages: any = [];
  let history: any = [];

  const channel = realtime.channels.get("chatroom");

  $: runFunc = async () => {
    history = await channel.history();

    console.log({ history: history.items });
  }; // load data in server side: https://kit.svelte.dev/docs/load

  onMount(() => {
    channel.subscribe("message", (msg) => {
      messages = [...messages, msg.data];
    });
  });

  function sendMessage() {
    if (message.trim() !== "") {
      channel.publish("message", message);
      message = "";
    }
  }
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
