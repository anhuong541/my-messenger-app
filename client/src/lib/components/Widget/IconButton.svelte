<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon;
  export let type: "button" | "submit" | "reset" = "button";
  export let labelBtn: string = "";
  export let btnClass: string =
    "rounded-full flex-shrink-0 w-10 h-10 bg-primaryColor-100";
  export let iconClass: string = "h-6 w-6 m-auto";
</script>

<button
  class={btnClass}
  {type}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
>
  {labelBtn}
  <Icon {icon} class={iconClass} />
</button>
