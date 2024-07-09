<script lang="ts">
  import ChatBody from "./chatFeed/chatBody.svelte";
  import ChatHeader from "./chatFeed/chatHeader.svelte";

  export let colSpan = "";
</script>

<div class={`${colSpan} flex flex-col gap-2 px-4 py-4 h-full overflow-hidden`}>
  <!-- chat header -->
  <ChatHeader />
  <ChatBody />
</div>

<style></style>
