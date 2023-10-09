<script lang="ts">
  import { ReceiveNUI } from '../utils/ReceiveNUI';
  import { SendNUI } from '../utils/SendNUI';
  import { onMount } from 'svelte';
  import { visibilityMenu } from '../store/stores';
  import BackdropFix from './BackdropFix.svelte';


let isVisible: boolean;

visibilityMenu.subscribe((visible: boolean) => {
  isVisible = visible;
});

ReceiveNUI<boolean>('setVisibleMenu', (visible: boolean) => {
  visibilityMenu.set(visible);
});

onMount(() => {
  const keyHandler = (e: KeyboardEvent) => {
    if (isVisible && ['Escape'].includes(e.code)) {
      SendNUI('hideMenu');
      visibilityMenu.set(false);
    }
  };

  window.addEventListener('keydown', keyHandler);

  return () => window.removeEventListener('keydown', keyHandler);
});
</script>

{#if isVisible}
<main>
    <slot />
</main>
<!-- <BackdropFix /> -->
{/if}

<style>
  main {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    user-select: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100vh;
width: 100vw;
  }
  </style>

