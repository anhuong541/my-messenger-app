<script lang="ts">
  import ChatBody from "$lib/components/pages/chats/chatFeed/chatBody.svelte";
  import ChatHeader from "$lib/components/pages/chats/chatFeed/chatHeader.svelte";

  export let colSpan = "";
</script>

<div class={`${colSpan} flex flex-col gap-2 px-4 py-4 h-full overflow-hidden`}>
  <!-- chat header -->
  <ChatHeader />
  <ChatBody />
</div>

<style></style>
