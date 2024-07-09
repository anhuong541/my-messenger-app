<script lang="ts">
  import dayjs from "dayjs";
  import lukaModric from "$lib/assets/luka-modric-avatar.jpg";
  import user from "$lib/assets/profile.jpg";

  const fakeUserId = 541;

  const fakeChatMessageEvents = [
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Hi Nice to Meet you again",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Another one!!!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "How is your day, bro!!!",
      createAt: 1720516307,
      emojis: [
        { type: "like", count: 1, userReact: false },
        { type: "heart", count: 2, userReact: false },
        { type: "wow", count: 4, userReact: true },
      ],
    },
  ];

  const messageEventsSize = fakeChatMessageEvents.length;
</script>

<div class="h-full overflow-hidden">
  <div class="h-full flex flex-col gap-2 overflow-y-auto">
    {#each fakeChatMessageEvents as message, index}
      {#if fakeUserId !== message.userId}
        <div class="flex justify-start items-end gap-4 pr-20">
          {#if index === messageEventsSize - 1 || message.userId !== fakeChatMessageEvents[index + 1].userId}
            <img src={message.avatar} alt="" class="w-16 h-16 rounded-md" />
          {:else}
            <div class="w-16 h-16 flex-shrink-0" />
          {/if}
          <div
            class="flex flex-col gap-2 bg-primaryColor-300 rounded-md px-4 py-2"
          >
            <h5 class="font-medium">{message.name}</h5>
            <p>{message.message}</p>
            <div class="flex justify-between text-xs">
              <div>Emojis Stuff</div>
              <p>{dayjs(message.createAt * 1000).format("HH:mm")}</p>
            </div>
          </div>
        </div>
      {:else}
        <div class="flex justify-end items-end gap-4 pl-20">
          <div
            class="flex flex-col gap-2 bg-primaryColor-300 rounded-md px-4 py-2"
          >
            <h5 class="font-medium">{message.name}</h5>
            <p>{message.message}</p>
            <div class="flex justify-between text-xs">
              <div>Emojis Stuff</div>
              <p>{dayjs(message.createAt * 1000).format("HH:mm")}</p>
            </div>
          </div>
          <img src={message.avatar} alt="" class="w-16 h-16 rounded-md" />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style></style>
