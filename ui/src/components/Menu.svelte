<script lang="ts">
	import { visibilityMenu } from "@store/stores"
	import { SendNUI } from "@utils/SendNUI"
  import { onMount } from 'svelte';

  onMount(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (['Escape'].includes(e.code)) {
        SendNUI('hideMenu');
      }
    };

    window.addEventListener('keydown', keyHandler);

    return () => window.removeEventListener('keydown', keyHandler);
  });
</script>

{#if $visibilityMenu}
<div class="h-screen w-screen flex items-center justify-center">
  <div class="absolute w-[70rem] h-[50rem] bg-[#2C3E50] bg-opacity-95 font-medium z-50">
    <div class="flex justify-between bg-[#242A39]">
      <div class="h-[10%] p-4 text-[2rem]"> Options</div>
      <button 
      on:click={() => { SendNUI("hideMenu");}}
      class="h-[10%] w-[10%] p-4 text-[2rem] hover:bg-red-500"><i class="fas fa-xmark"></i></button>
    </div>
    <div class="h-[90%]">
      <div class="flex mt-4">
        <p class="m-4">Toggle Hud</p>
        <button 
        on:click={() => { SendNUI("ToggleHUD");}}
        class="bg-[#242A39] p-3 px-8 rounded-2xl">Toggle</button>
      </div>
    </div>
  </div>
</div>
{/if}