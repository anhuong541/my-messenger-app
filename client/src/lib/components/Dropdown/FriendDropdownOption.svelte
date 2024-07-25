<script>
  import { friendSelected } from "$lib/utils/dataStore";
  import { firestore, user } from "$lib/utils/firebase";
  import { selectedChatroomId } from "$lib/utils/store";
  import Icon from "@iconify/svelte";
  import { collection, deleteDoc, doc } from "firebase/firestore";
  import { Dropdown, DropdownItem } from "flowbite-svelte";

  export let showDropdown = false;
  export let friend;

  const onRemoveFriend = async () => {
    if ($user) {
      const friendRef = collection(firestore, "users", $user?.uid, "friends");
      const userAtFriendListRef = collection(
        firestore,
        "users",
        friend.uid,
        "friends"
      );
      const chatRoomCol = collection(firestore, "chat_rooms");

      await deleteDoc(doc(friendRef, friend.uid));
      await deleteDoc(doc(userAtFriendListRef, $user?.uid));
      selectedChatroomId.set("");
      friendSelected.set({});
      await deleteDoc(doc(chatRoomCol, friend?.chatRoomId));
      showDropdown = false;
    }
  };

  const onDeleteMessage = async () => {
    if ($user) {
      const chatRoomCol = collection(firestore, "chat_rooms");
      selectedChatroomId.set("");
      await deleteDoc(doc(chatRoomCol, friend?.chatRoomId));
      showDropdown = false;
    }
  };

  const onBlockUser = async () => {
    // This feature has not yet been considered
    showDropdown = false;
  };

  $: console.log({ friend });

  const dropdownOption = [
    {
      label: "Unfriend",
      icon: "material-symbols:person-cancel-outline-rounded",
      handler: onRemoveFriend,
    },
    {
      label: "Delete",
      icon: "material-symbols:delete-outline-rounded",
      handler: onDeleteMessage,
    },
    {
      label: "Block User",
      icon: "material-symbols:block",
      handler: onBlockUser,
    },
  ];
</script>

{#if showDropdown}
  <button
    class="absolute right-4 top-[50%] -translate-y-1/2 z-10 rounded-full w-10 h-10 bg-gray-100"
  >
    <Icon icon="material-symbols:more-horiz" class="h-6 w-6 m-auto" />
  </button>
  <Dropdown classContainer="w-[140px]">
    {#each dropdownOption as { label, icon, handler }}
      <DropdownItem on:click={handler}>
        <div class="flex item-center gap-2">
          <Icon {icon} class="w-6 h-6" />
          {label}
        </div>
      </DropdownItem>
    {/each}
  </Dropdown>
{/if}
