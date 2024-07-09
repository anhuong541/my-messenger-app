<script lang="ts">
  import Icon from "@iconify/svelte";

  export let emojis: {
    type: string;
    count: number;
    userReact: boolean;
  }[];

  const listEmojisRaw = [
    { type: "like", icon: "mdi:like-outline" },
    { type: "heart", icon: "mdi:heart-outline" },
    { type: "wow", icon: "lets-icons:wow" },
  ];

  $: top3ListEmojis = emojis
    .slice(0, 3)
    .map((item) => {
      return {
        ...item,
        icon: listEmojisRaw.find((e) => item.type === e.type)?.icon ?? "",
      };
    })
    .sort((a, b) => b.count - a.count);
</script>

<div class="flex gap-2">
  {#each top3ListEmojis as { icon, count }}
    <div class="flex gap-1 items-center rounded-full p-1">
      <Icon {icon} />{count}
    </div>
  {/each}
</div>

<style></style>
