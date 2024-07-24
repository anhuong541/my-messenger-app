<script lang="ts">
  import Icon from "@iconify/svelte";
  import classNames from "classnames";

  export let variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "underlined"
    | "delete"
    | "disabled"
    | "" = "primary";
  export let className: string = "";
  export let disabled: boolean = false;
  export let isLoading: boolean = false;
  export let size: "supper-small" | "small" | "medium" | "large" = "small";
  export let type: "button" | "submit" | "reset" = "button";

  $: buttonClassName = classNames(className, "button", "btn-container", {
    ["disabled"]: disabled || variant === "disabled",
    ["underlined"]: variant === "underlined",
    ["secondary"]: variant === "secondary",
    ["tertiary"]: variant === "tertiary",
    ["delete"]: variant === "delete",
    ["large"]: size === "large",
    ["small"]: size === "small",
    ["supper-small"]: size === "supper-small",
    ["loading"]: isLoading,
  });
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {type}
  class={buttonClassName}
  disabled={disabled || isLoading}
>
  {#if isLoading}
    <Icon
      icon="icomoon-free:spinner2"
      class={`w-6 h-6 animate-spin ${variant === "secondary" ? "text_27326F" : "text-white"}`}
    />
  {:else}
    <slot />
  {/if}
</button>

<style>
  .button {
    width: 100%;
    padding: 8px 16px 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    border-radius: 0.75rem; /* 12px */
    padding: 10px 16px;
    gap: 4px;
    cursor: pointer;
  }

  .button:disabled {
    opacity: 30%;
    background-color: black;
    color: white;
  }

  .button:disabled:hover {
    opacity: 30%;
  }

  .button:disabled:active {
    opacity: 30%;
  }

  .button:hover {
    opacity: 80%;
  }

  .button:active {
    opacity: 50%;
  }

  .button[type="submit"],
  .button[type="button"] {
    background: #007070;
  }

  .secondary {
    color: #007070;
    border: 1px solid #007070;
  }
  .secondary[type="submit"],
  .secondary[type="button"] {
    background: #fff;
  }

  .tertiary[type="submit"],
  .tertiary[type="button"] {
    color: #fff;
    background: #33a3a3;
    border: 1px solid #33a3a3;
  }

  .delete {
    color: #fff;
    border: none;
  }
  .delete[type="submit"],
  .delete[type="button"] {
    background: red;
  }
</style>
