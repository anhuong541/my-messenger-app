<script>
  import ChatInfo from "./ChatInfo.svelte";
  import ChatSide from "./ChatSide.svelte";
  import FriendsList from "./FriendsList.svelte";
</script>

<div class="grid grid-cols-12 h-[92vh]">
  <FriendsList />
  <ChatSide />
  <ChatInfo />
</div>
