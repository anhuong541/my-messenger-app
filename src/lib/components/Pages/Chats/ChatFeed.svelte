<script>
  import Button from "$lib/components/Widget/Button.svelte";
  import Icon from "@iconify/svelte";
  import { Input } from "flowbite-svelte";
  import ChatEvent from "./ChatEvent.svelte";
</script>

<div class="flex flex-col justify-between h-full py-2">
  <ChatEvent />
  <div class="flex items-center gap-2 px-2">
    <Input
      type="text"
      placeholder="Aa"
      class="border py-3 px-4 rounded-xl w-full"
    />
    <Button className="!w-[140px]">
      Send
      <Icon icon="material-symbols:send-outline-rounded" class="h-6 w-6 " />
    </Button>
  </div>
</div>

<style></style>
