<script lang="ts">
  import defaultImg from "$lib/assets/default-avatar.webp";
  import groupPeople from "$lib/assets/group-people.jpg";

  import dayjs from "dayjs";
  import Icon from "@iconify/svelte";
  import { Avatar, Input } from "flowbite-svelte";
  import { collectionStore } from "sveltefire";
  import { onMount } from "svelte";

  import { firestore, user } from "$lib/utils/firebase";
  import { friendSelected, userInfo, usersList } from "$lib/utils/dataStore";
  import { onTypeMessageChat, selectedChatroomId } from "$lib/utils/store";
  import { FriendDropdownOption } from "$lib/components/Dropdown";
  import {
    AddGroupModal,
    FriendRequestModal,
    AddFriendModal,
  } from "$lib/components/Modals";

  let chooseTypeFriendList: "personal" | "groups" = $onTypeMessageChat;
  let openAddFriendModal: boolean = false;
  let openFriendRequestModal: boolean = false;
  let openAddGroupModal: boolean = false;

  let fetchFriendsList;
  let fetchFriendsRequestList;
  let friendsRequestList: any = [];
  let friendsList: any = [];
  let isFetchedFriendsListData = false;
  let collectionUser;
  let collectionChatGroup;

  let friendDropdownIndex: number | null = null;

  $: friendsRequestList =
    ($fetchFriendsRequestList && $fetchFriendsRequestList) ?? [];

  $: groupsList =
    $collectionChatGroup &&
    $user &&
    $collectionChatGroup?.filter((item: any) =>
      item?.members.map((item: any) => item.uid).includes($user.uid)
    );

  $: {
    if ($fetchFriendsList && $collectionUser) {
      const friendList = $fetchFriendsList as any;
      const usersListCol = $collectionUser as any;
      const friendListById = friendList.map((item: any) => item.id);
      friendsList = usersListCol
        .map((item: any) => {
          if (friendListById.includes(item?.uid)) {
            const chatRoomId = friendList.find(
              (element: any) => element?.id === item?.uid
            ).chatRoomId;
            return {
              ...item,
              chatRoomId,
            };
          }
        })
        .filter(Boolean);
    }
  }

  $: {
    if ($user && !isFetchedFriendsListData) {
      fetchFriendsRequestList = collectionStore(
        firestore,
        `users/${$user.uid}/friends_request`
      );
      fetchFriendsList = collectionStore(
        firestore,
        `users/${$user.uid}/friends`
      );
      isFetchedFriendsListData = true;
    }
  }

  onMount(() => {
    collectionUser = collectionStore(firestore, "users");
    collectionChatGroup = collectionStore(firestore, "chat_groups");
  });

  $: {
    if ($collectionUser) {
      usersList.set($collectionUser);
    }
  }

  $: {
    if ($user && $usersList) {
      const res: any = $usersList.find((item: any) => item?.uid === $user.uid);
      userInfo.set(res);
    }
  }

  // $: console.log("chatRoomId: ", $selectedChatroomId);
</script>

<div class="col-span-3 flex flex-col border-r h-full">
  <div class="flex justify-between items-center border-b px-4 h-[70px]">
    <h3 class="font-semibold text-lg">Messages</h3>
    <div class="flex justify-end items-center gap-2">
      <button
        class="rounded-full w-10 h-10 bg-primaryColor-100 relative"
        on:click={() => (openFriendRequestModal = !openFriendRequestModal)}
      >
        <Icon
          icon="material-symbols:person-alert-outline"
          class="h-6 w-6 m-auto"
        />
        {#if friendsRequestList?.length > 0}
          <div
            class="absolute left-[90%] bottom-[80%] -translate-x-1/2 translate-y-1/2 rounded-full w-[10px] h-[10px] text-center bg-red-500"
          />
        {/if}
      </button>
      <button
        class="rounded-full w-10 h-10 bg-primaryColor-100"
        on:click={() => (openAddFriendModal = !openAddFriendModal)}
      >
        <Icon
          icon="material-symbols:person-add-outline-rounded"
          class="h-6 w-6 m-auto"
        />
      </button>
      <button
        class="rounded-full w-10 h-10 bg-primaryColor-100"
        on:click={() => (openAddGroupModal = !openAddGroupModal)}
      >
        <Icon
          icon="material-symbols:group-add-outline"
          class="h-6 w-6 m-auto"
        />
      </button>
    </div>
  </div>
  <div class="flex justify-between font-medium border-b">
    <button
      class={`flex items-center justify-center w-full py-3 transition-all duration-300 animate-shock ${chooseTypeFriendList === "personal" ? "border-b-2 border-black" : ""}`}
      on:click={() => {
        chooseTypeFriendList = "personal";
        onTypeMessageChat.set("personal");
      }}
    >
      Personal
    </button>
    <button
      class={`flex items-center justify-center w-full py-3 transition-all duration-300 animate-shock ${chooseTypeFriendList === "groups" ? "border-b-2 border-black" : ""}`}
      on:click={() => {
        chooseTypeFriendList = "groups";
        onTypeMessageChat.set("groups");
      }}
    >
      Groups
    </button>
  </div>
  <div class="flex flex-col gap-4 py-4 w-full">
    <!-- <label for="search-friends" class="relative px-4">
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
    </label> -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="flex flex-col gap-2 px-2 h-[70vh] overflow-y-auto"
      on:mouseleave={() => (friendDropdownIndex = null)}
    >
      {#if chooseTypeFriendList === "personal"}
        {#each friendsList ?? [] as friend, index}
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class={`relative w-full hover:bg-primaryColor-200 rounded-md cursor-pointer ${$selectedChatroomId === friend.chatRoomId ? "bg-primaryColor-200" : ""}`}
          >
            <div
              class="flex items-center gap-2 w-full px-2 py-3 active:bg-primaryColor-100"
              on:click={() => {
                selectedChatroomId.set(friend.chatRoomId);
                friendSelected.set({ type: "person", ...friend });
              }}
              on:mouseenter={() => (friendDropdownIndex = index)}
            >
              <Avatar src={defaultImg} class="h-12 w-12 rounded-full" />
              <div class="flex flex-col justify-center w-full overflow-hidden">
                <h4>{friend.username}</h4>
                <p
                  class="text-sm text-primaryColor-600 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {friend.email}
                </p>
                <div class="flex items-center w-full gap-1 text-sm">
                  <p
                    class={`${friend?.online ? "text-green-500" : "text-red-500"}`}
                  >
                    {friend?.online ? "Online" : "Offline"}
                  </p>
                  •
                  <p class="text-primaryColor-500 text-xs">
                    {dayjs(friend.lastTimeMsg).format("DD-MM")}
                  </p>
                </div>
              </div>
            </div>
            <FriendDropdownOption
              showDropdown={friendDropdownIndex === index && true}
              {friend}
            />
          </div>
        {/each}
      {:else}
        {#each groupsList ?? [] as group}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="flex items-center gap-2 w-full px-2 py-3 hover:bg-primaryColor-200 active:bg-primaryColor-100 rounded-md cursor-pointer"
            on:click={() => {
              selectedChatroomId.set(group?.chatGroupId);
              friendSelected.set({ type: "group", ...group });
            }}
          >
            <!-- ${$selectedChatroomId === request?.chatRoomId ? "bg-primaryColor-200" : ""} -->
            <Avatar src={groupPeople} class="h-12 w-12 rounded-full" />
            <div class="flex flex-col justify-center w-full overflow-hidden">
              <h4>{group?.groupName ?? "Room Name!!!"}</h4>
              <p
                class="text-sm text-primaryColor-600 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <!-- {request.email} --> last messages...
              </p>
              <div class="flex justify-between w-full gap-1 text-sm">
                <p class="text-gray-500">
                  {group?.members?.length ?? 0} members
                </p>
                <p class="text-primaryColor-500 text-xs">
                  {dayjs(group?.createAt).format("DD-MM")}
                </p>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<AddFriendModal
  bind:openModal={openAddFriendModal}
  usersData={$collectionUser ?? []}
  {friendsList}
/>

<FriendRequestModal
  bind:openModal={openFriendRequestModal}
  {friendsRequestList}
/>

<AddGroupModal bind:openModal={openAddGroupModal} {friendsList} />

<style>
</style>
