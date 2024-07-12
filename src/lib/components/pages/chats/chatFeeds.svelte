<script lang="ts">
  import ChatBody from "$lib/components/pages/chats/chatFeed/ChatBody.svelte";
  import ChatHeader from "$lib/components/pages/chats/chatFeed/ChatHeader.svelte";
  import { firestore } from "$lib/utils/firebase";
  import { collectionStore } from "sveltefire";

  export let colSpan = "";
  export let friend = {
    id: null,
  };
  export let userUid = "";

  $: messages = collectionStore(
    firestore,
    `/users/${userUid}/friends/${friend?.id}/messages`
  );
</script>

<div class={`${colSpan} flex flex-col gap-2 px-4 py-4 h-full overflow-hidden`}>
  <!-- chat header -->
  <ChatHeader />
  <ChatBody messages={$messages} />
</div>

<style></style>
