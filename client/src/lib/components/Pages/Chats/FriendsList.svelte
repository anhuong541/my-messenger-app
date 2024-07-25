<script lang="ts">
  import fakeImg1 from "$lib/assets/luka-modric-avatar.jpg";
  import defaultImg from "$lib/assets/default-avatar.webp";
  import fakeImg3 from "$lib/assets/profile.jpg";

  import dayjs from "dayjs";
  import Icon from "@iconify/svelte";
  import { Avatar, Input } from "flowbite-svelte";
  import AddFriendModal from "../../Modals/AddFriendModal.svelte";
  import { firestore, user } from "$lib/utils/firebase";
  import { collectionStore } from "sveltefire";
  import Button from "$lib/components/Widget/Button.svelte";
  import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
  import { generateChatRoomId } from "$lib/utils";
  import { onMount } from "svelte";
  import { friendSelected, userInfo, usersList } from "$lib/utils/dataStore";
  import { selectedChatroomId } from "$lib/utils/store";

  let chooseTypeFriendList: "friends" | "friends_request" = "friends"; // change to personal and business later
  let openAddFriendModal: boolean = false;
  let fetchFriendsList;
  let fetchFriendsRequestList;
  let friendsRequestList: any = [];
  let friendsList: any = [];
  let isFetchedFriendsListData = false;
  let collectionUser;

  const onAcceptFriendRequest = async (selectedUid: string) => {
    if ($user) {
      const friendsRef = collection(firestore, "users", $user?.uid, "friends");
      const selectedUidFriendsRef = collection(
        firestore,
        "users",
        selectedUid,
        "friends"
      );
      const friendsRequestRef = collection(
        firestore,
        "users",
        $user?.uid,
        "friends_request"
      );
      const addNewChatRoomId = collection(firestore, "chat_rooms");
      const chatRoomId = generateChatRoomId();
      await setDoc(doc(friendsRef, selectedUid), {
        chatRoomId,
      });
      await setDoc(doc(selectedUidFriendsRef, $user?.uid), {
        chatRoomId,
      });
      await deleteDoc(doc(friendsRequestRef, selectedUid));
      await setDoc(doc(addNewChatRoomId, chatRoomId), {
        chatRoomId,
        userUid1: $user?.uid,
        userUid2: selectedUid,
        createAt: Date.now(),
      });
    }
  };

  const onDeleteFriendRequest = async (selectedUid: string) => {
    if ($user) {
      const friendsRequestRef = collection(
        firestore,
        "users",
        $user?.uid,
        "friends_request"
      );
      await deleteDoc(doc(friendsRequestRef, selectedUid));
    }
  };

  $: friendsRequestList =
    ($fetchFriendsRequestList && $fetchFriendsRequestList) ?? [];

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
  });

  $: {
    if ($collectionUser) {
      usersList.set($collectionUser);
    }
  }

  $: {
    if ($user && $usersList) {
      const res = $usersList.find((item: any) => item?.uid === $user.uid);
      if (res) {
        const { id, uid, username, date, gender, online, email } = res;
        userInfo.set({ id, uid, username, date, gender, online, email });
      }
    }
  }

  $: console.log("chatRoomId: ", $selectedChatroomId);
</script>

<div class="col-span-3 flex flex-col border-r h-full">
  <div class="flex justify-between items-center border-b px-4 h-[70px]">
    <h3 class="font-semibold text-lg">Messages</h3>
    <div class="flex justify-end items-center gap-2">
      <button class="rounded-full w-10 h-10 bg-gray-100" on:click={() => {}}>
        <Icon
          icon="material-symbols:person-add-outline-rounded"
          class="h-6 w-6 m-auto"
        />
      </button>
      <button
        class="rounded-full w-10 h-10 bg-gray-100"
        on:click={() => (openAddFriendModal = !openAddFriendModal)}
      >
        <Icon
          icon="material-symbols:person-search-outline-rounded"
          class="h-6 w-6 m-auto"
        />
      </button>
    </div>
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
      Friend Requests
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
      {#if chooseTypeFriendList === "friends"}
        {#each friendsList ?? [] as friend}
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class={`flex items-center gap-2 w-full px-2 py-3 hover:bg-gray-200 active:bg-gray-100 rounded-md cursor-pointer ${$selectedChatroomId === friend.chatRoomId ? "bg-gray-200" : ""}`}
            on:click={() => {
              selectedChatroomId.set(friend.chatRoomId);
              friendSelected.set(friend);
            }}
          >
            <Avatar src={defaultImg} class="h-12 w-12 rounded-full" />
            <div class="flex flex-col justify-center w-full overflow-hidden">
              <h4>{friend.username}</h4>
              <p
                class="text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {friend.email}
              </p>
              <div class="flex justify-between w-full gap-1 text-sm">
                <p
                  class={`${friend?.online ? "text-green-500" : "text-red-500"}`}
                >
                  {friend?.online ? "Online" : "Offline"}
                </p>
                <p class="text-gray-500 text-xs">
                  {dayjs(friend.lastTimeMsg).format("DD-MM")}
                </p>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        {#each friendsRequestList ?? [] as friend}
          <div
            class="flex items-center gap-2 w-full px-2 py-3 hover:bg-gray-200 active:bg-gray-100 rounded-md cursor-pointer"
          >
            <Avatar src={defaultImg} class="h-12 w-12 rounded-full" />
            <div class="flex flex-col justify-center w-full overflow-hidden">
              <h4>{friend.username}</h4>
              <p
                class="text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {friend.email}
              </p>
              <div class="flex items-center w-full gap-1 text-sm">
                <p class="text-green-500">
                  {friend.gender}
                </p>
              </div>
            </div>
            <Button
              className="!w-[100px]"
              on:click={async () => onAcceptFriendRequest(friend.uid)}
            >
              Accept
            </Button>
            <Button
              className="!w-[100px]"
              on:click={async () => onDeleteFriendRequest(friend.uid)}
            >
              Delete
            </Button>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<AddFriendModal
  bind:openModal={openAddFriendModal}
  usersData={$collectionUser ?? []}
/>

<style>
</style>
