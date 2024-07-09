<script lang="ts">
  import { ChatInfo, Sidebar, ChatFeeds } from "../../components/pages/chats";
</script>

<main class="h-screen w-screen grid grid-cols-12 gap-2 p-2">
  <div
    class="xl:col-span-10 col-span-12 grid grid-cols-10 gap-6 bg-gray-100 rounded-3xl"
  >
    <Sidebar />
    <ChatFeeds />
  </div>
  <ChatInfo />
</main>

<style></style>
