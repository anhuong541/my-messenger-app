<script lang="ts">
  import { ChatInfo, Sidebar, ChatFeeds } from "../../components/pages/chats";
</script>

<main class="h-screen w-screen grid grid-cols-12">
  <div class="col-span-10 grid grid-cols-10 gap-6 bg-gray-100">
    <Sidebar />
    <ChatFeeds />
  </div>
  <ChatInfo />
</main>

<style></style>
