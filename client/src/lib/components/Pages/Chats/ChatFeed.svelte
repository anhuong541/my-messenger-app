<script lang="ts">
  import lukaModric from "$lib/assets/luka-modric-avatar.jpg";
  import user from "$lib/assets/profile.jpg";
  import defaultAvatar from "$lib/assets/default-avatar.jpg";

  import Button from "$lib/components/Widget/Button.svelte";
  import Icon from "@iconify/svelte";
  import { Input } from "flowbite-svelte";
  import dayjs from "dayjs";
  import { doc, setDoc } from "firebase/firestore";
  import { firestore } from "$lib/utils/firebase";
  import { selectedChatroomId } from "$lib/utils/store";
  import { userInfo } from "$lib/utils/dataStore";
  import { collectionStore } from "sveltefire";

  let message = "";
  let fetchMessageFromChatRoom;

  $: {
    if ($selectedChatroomId) {
      fetchMessageFromChatRoom = collectionStore(
        firestore,
        `chat_rooms/${$selectedChatroomId}/messages`
      );
    }
  }

  $: messages = ($fetchMessageFromChatRoom && $fetchMessageFromChatRoom) ?? [];
  $: messageEventsSize = messages?.length ?? 0;

  const onUserSendMessage = async () => {
    if ($selectedChatroomId && $userInfo) {
      await setDoc(
        doc(
          firestore,
          `chat_rooms/${$selectedChatroomId}/messages/${messageEventsSize}`
        ),
        {
          userId: $userInfo.uid,
          name: $userInfo.username,
          avatar: defaultAvatar,
          message,
          createAt: Date.now(),
          emojis: [],
        }
      );

      message = "";
    }
  };

  $: console.log({ messages });
</script>

<div class="flex flex-col justify-between h-full py-2">
  <!-- chat feed -->
  <div class="h-full overflow-hidden">
    <div
      class="flex-grow flex-col-reverse h-[78vh] flex gap-2 overflow-y-auto px-4 py-2"
    >
      {#if $selectedChatroomId !== "" && $fetchMessageFromChatRoom}
        {#each messages.reverse() ?? [] as item, index}
          {#if $userInfo.uid !== item?.userId}
            <div class="flex justify-start items-end gap-4 sm:pr-20 pr-16">
              {#if index === messageEventsSize + 1 || item?.userId !== messages[index - 1]?.userId}
                <img
                  src={item?.avatar ?? defaultAvatar}
                  alt=""
                  class="w-12 h-12 rounded-full"
                />
              {:else}
                <div class="w-12 h-12 flex-shrink-0" />
              {/if}
              <div
                class="flex flex-col gap-2 bg-primaryColor-200 rounded-xl px-4 py-2"
              >
                <h5 class="font-medium">{item?.name}</h5>
                <p>{item?.message}</p>
                <div class="flex justify-between text-xs">
                  <!-- <Emojis emojis={message.emojis} /> -->
                  <p>{dayjs(item?.createAt).format("HH:mm")}</p>
                </div>
              </div>
            </div>
          {:else}
            <div class="flex justify-end items-end gap-4 sm:pl-20 pl-16">
              <div
                class="flex flex-col gap-2 bg-primaryColor-600 text-white rounded-xl px-4 py-2"
              >
                <h5 class="font-medium">{item?.name}</h5>
                <p>{item?.message}</p>
                <div class="flex justify-between text-xs">
                  <p>{dayjs(item?.createAt).format("HH:mm")}</p>
                </div>
              </div>
              {#if index === messageEventsSize + 1 || item?.userId !== messages[index - 1]?.userId}
                <img
                  src={item?.avatar ?? defaultAvatar}
                  alt=""
                  class="w-12 h-12 rounded-full"
                />
              {:else}
                <div class="w-12 h-12 flex-shrink-0" />
              {/if}
            </div>
          {/if}
        {/each}
      {:else}
        no chat ....
      {/if}
    </div>
  </div>

  <!-- send message -->
  <div class="flex items-center gap-2 px-2">
    <Input
      type="text"
      placeholder="Aa"
      class="border py-3 px-4 rounded-xl w-full"
      bind:value={message}
    />
    <Button
      className="!w-[140px]"
      on:click={onUserSendMessage}
      disabled={$selectedChatroomId ? false : true}
    >
      Send
      <Icon icon="material-symbols:send-outline-rounded" class="h-6 w-6 " />
    </Button>
  </div>
</div>

<style></style>
