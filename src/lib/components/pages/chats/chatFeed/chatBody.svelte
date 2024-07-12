<script lang="ts">
  import Icon from "@iconify/svelte";
  import ChatEvents from "./chatEvents.svelte";

  export let messages = [] as any;
</script>

<div class="flex flex-col justify-between gap-2 h-full">
  <ChatEvents {messages} />
  <form class="flex gap-2 w-full flex-shrink-0" on:submit={() => {}}>
    <input
      type="text"
      class="w-full py-2 px-4"
      placeholder="Typing your message..."
    />
    <button
      type="submit"
      class="py-2 px-4 flex items-center justify-center gap-2 bg-primaryColor-500 text-white rounded-md"
    >
      Send <Icon icon="ion:send" />
    </button>
  </form>
</div>

<style></style>
