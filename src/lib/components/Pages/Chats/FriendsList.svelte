<script lang="ts">
  import fakeImg1 from "$lib/assets/luka-modric-avatar.jpg";
  import fakeImg2 from "$lib/assets/default-avatar.webp";
  import fakeImg3 from "$lib/assets/profile.jpg";

  import dayjs from "dayjs";
  import Icon from "@iconify/svelte";
  import { Avatar, Input } from "flowbite-svelte";
  import AddFriendModal from "../../Modals/AddFriendModal.svelte";

  let chooseTypeFriendList: "friends" | "friends_request" = "friends";
  let openAddFriendModal: boolean = false;

  const fakeFriendsList = [
    {
      name: "Bruno Mark",
      image: fakeImg1,
      lastMsg: "Nice to see ya!",
      online: true,
      lastTimeMsg: 1721560240,
    },
    {
      name: "John Lengend",
      image: fakeImg2,
      lastMsg: "See you again! Hope you have all the asjofbabo luck!!!!",
      online: false,
      lastTimeMsg: 1721559088,
    },
    {
      name: "Luke Modric",
      image: fakeImg3,
      lastMsg: "Good News!",
      online: false,
      lastTimeMsg: 1721556628,
    },
  ];
</script>

<div class="col-span-3 flex flex-col border-r h-full">
  <div class="flex justify-between items-center border-b px-4 h-[70px]">
    <h3 class="font-semibold text-lg">Messages</h3>
    <button
      class="rounded-full w-10 h-10 bg-gray-100"
      on:click={() => (openAddFriendModal = !openAddFriendModal)}
    >
      <Icon
        icon="material-symbols:person-add-outline-rounded"
        class="h-6 w-6 m-auto"
      />
    </button>
  </div>
  <div class="flex justify-between font-medium border-b">
    <button
      class={`flex items-center justify-center w-full py-3 transition-all duration-300 animate-shock ${chooseTypeFriendList === "friends" ? "border-b-2 border-black" : ""}`}
      on:click={() => (chooseTypeFriendList = "friends")}
    >
      Friends
    </button>
    <button
      class={`flex items-center justify-center w-full py-3 transition-all duration-300 animate-shock ${chooseTypeFriendList === "friends_request" ? "border-b-2 border-black" : ""}`}
      on:click={() => (chooseTypeFriendList = "friends_request")}
    >
      Friends Request
    </button>
  </div>
  <div class="flex flex-col gap-4 py-4 w-full">
    <label for="search-friends" class="relative px-4">
      <Icon
        icon="material-symbols:search-rounded"
        class="absolute top-[50%] left-8 -translate-y-1/2 w-6 h-6"
      />
      <Input
        type="text"
        id="search-friends"
        name="search-friends"
        placeholder="Search"
        class="border py-3 px-6 pl-12 rounded-full w-full"
      />
    </label>
    <div class="flex flex-col gap-2 px-2">
      {#each fakeFriendsList as friend}
        <div
          class="flex items-center gap-2 w-full px-2 py-3 hover:bg-gray-200 active:bg-gray-100 rounded-md cursor-pointer"
        >
          <Avatar src={friend.image} class="h-12 w-12 rounded-full" />
          <div class="flex flex-col justify-center w-full overflow-hidden">
            <h4>{friend.name}</h4>
            <p
              class="text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {friend.lastMsg}
            </p>
            <div class="flex justify-between w-full gap-1 text-sm">
              <p class={`${friend.online ? "text-green-500" : "text-red-500"}`}>
                {friend.online ? "Online" : "Offline"}
              </p>
              <p class="text-gray-500 text-xs">
                {dayjs(friend.lastTimeMsg).format("DD-MM")}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<AddFriendModal bind:openModal={openAddFriendModal}>
  Some thing!!!
</AddFriendModal>

<style>
</style>
