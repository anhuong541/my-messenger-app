<script lang="ts">
  import defaultImg from "$lib/assets/default-avatar.webp";

  import { Avatar, Input, Modal } from "flowbite-svelte";
  import { collection, doc, setDoc } from "firebase/firestore";
  import Icon from "@iconify/svelte";

  import Button from "../Widget/Button.svelte";
  import { firestore, user } from "$lib/utils/firebase";
  import { generateChatRoomId, triggerToast } from "$lib/utils";
  import { userInfo } from "$lib/utils/dataStore";

  export let openModal = false;
  export let friendsList: any[];

  let memberList: any[] = [];
  let searchUser = "";
  let groupName = "";

  const creatGroupChat = async () => {
    if (groupName === "") {
      triggerToast("You should type your group name", "warning");
      return;
    }

    if (memberList.length === 0) {
      triggerToast("You should add more team member", "warning");
      return;
    }

    const newChatGroupId = generateChatRoomId();
    const newChatGroupRef = collection(firestore, "chat_groups");

    await setDoc(doc(newChatGroupRef, newChatGroupId), {
      members: [...memberList, $userInfo],
      groupName,
      createAt: Date.now(),
      chatGroupId: newChatGroupId,
    });

    friendsList = [...friendsList, ...memberList];
    memberList = [];
    openModal = false;
  };

  const selectMember = (item: any) => {
    memberList = [...memberList, item];
    friendsList = friendsList.filter((i) => i !== item);
  };

  const removeMember = (item: any) => {
    memberList = memberList.filter((i) => i !== item);
    friendsList = [...friendsList, item];
  };

  $: formatFriendsList = friendsList.filter((person: any) =>
    person.username.toLowerCase().includes(searchUser.toLowerCase())
  );

  //   $: userFilterd = usersData.find((item: any) => item?.uid === uidTyped);
  //   $: isUser = $user?.uid === userFilterd?.uid ?? false;

  $: console.log({ formatFriendsList, friendsList });
  $: console.log({ memberList });
</script>

<Modal title="Create New Group Chat" bind:open={openModal}>
  <div class="flex flex-col gap-4">
    <label for="search-friends" class="relative">
      <Icon
        icon="material-symbols:groups-outline"
        class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
      />
      <Input
        type="text"
        id="search"
        name="search"
        bind:value={groupName}
        placeholder="Name Group"
        class="border py-3 px-6 pl-12 rounded-xl w-full"
      />
    </label>
    <label for="search-friends" class="relative">
      <Icon
        icon="material-symbols:search-rounded"
        class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
      />
      <Input
        type="text"
        id="search"
        name="search"
        bind:value={searchUser}
        placeholder="Search there name"
        class="border py-3 px-6 pl-12 rounded-xl w-full"
      />
    </label>
  </div>
  <div class="flex flex-col gap-4">
    {#if memberList.length > 0}
      <div>
        <p class="text-sm font-medium">Selected member</p>
        <div
          class="flex flex-col gap-2 p-4 border rounded-xl max-h-[600px] overflow-y-auto"
        >
          {#each memberList as member}
            <div
              class="flex items-center gap-2 hover:bg-primaryColor-200 py-4 px-2 rounded-xl"
            >
              <Avatar src={defaultImg} class="h-12 w-12 rounded-full" />
              <div class="flex flex-col justify-center w-full overflow-hidden">
                <div class="flex items-center gap-2">
                  <h4 class="font-medium">{member.username}</h4>
                  <span class="text-sm text-green-400">{member.gender}</span>
                </div>
                <p
                  class="text-sm text-primaryColor-600 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {member.email}
                </p>
              </div>
              <button
                class="rounded-full flex-shrink-0 w-10 h-10 bg-primaryColor-100"
                on:click={() => removeMember(member)}
              >
                <Icon
                  icon="material-symbols:group-remove-outline-rounded"
                  class="h-6 w-6 m-auto"
                />
              </button>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    {#if formatFriendsList.length > 0}
      <div class="flex flex-col gap-1">
        <p class="text-sm font-medium">Friends</p>
        <div
          class="flex flex-col gap-2 p-4 border rounded-xl max-h-[600px] overflow-y-auto"
        >
          {#each formatFriendsList.slice(0, 20) as friend}
            <div
              class="flex items-center gap-2 hover:bg-primaryColor-200 py-4 px-2 rounded-xl"
            >
              <Avatar src={defaultImg} class="h-12 w-12 rounded-full" />
              <div class="flex flex-col justify-center w-full overflow-hidden">
                <div class="flex items-center gap-2">
                  <h4 class="font-medium">{friend.username}</h4>
                  <span class="text-sm text-green-400">{friend.gender}</span>
                </div>
                <p
                  class="text-sm text-primaryColor-600 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {friend.email}
                </p>
              </div>
              <button
                class="rounded-full flex-shrink-0 w-10 h-10 bg-primaryColor-100"
                on:click={() => selectMember(friend)}
              >
                <Icon
                  icon="material-symbols:group-add-outline-rounded"
                  class="h-6 w-6 m-auto"
                />
              </button>
            </div>
          {/each}
        </div>
      </div>
    {:else if memberList.length === 0}
      <p class="text-red-500">You have no friend</p>
    {/if}

    <div class="flex justify-end items-center gap-4">
      <Button on:click={creatGroupChat}>Create Group</Button>
    </div>
  </div>
</Modal>
