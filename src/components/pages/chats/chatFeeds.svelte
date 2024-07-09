<script lang="ts">
  import ChatBody from "./chatFeed/chatBody.svelte";
  import ChatHeader from "./chatFeed/chatHeader.svelte";
</script>

<div class="col-span-7 flex flex-col gap-2 px-4 py-4 h-full overflow-hidden">
  <!-- chat header -->
  <ChatHeader />
  <ChatBody />
</div>

<style></style>
