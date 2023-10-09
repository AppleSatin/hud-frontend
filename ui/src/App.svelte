<script lang="ts">
	import VisibilityProvider from '@providers/VisibilityProvider.svelte'
	import { browserMode, resName } from '@store/stores'
	import DebugBrowser from '@providers/DebugBrowser.svelte'
	import AlwaysListener from '@providers/AlwaysListener.svelte'
	import Main from '@components/Main.svelte'
	import Menu from '@components/Menu.svelte'
	import VisibilityMenu from '@providers/VisibilityMenu.svelte'


	$resName = 'hud-frontend' // Change this to your resource name (case sensitive)
</script>



<VisibilityProvider>
  <Main />
</VisibilityProvider>

<VisibilityMenu>
  <Menu />
</VisibilityMenu>



<style>


</style>


<AlwaysListener />
{#if $browserMode}
	<DebugBrowser />
	<body class="bg-neutral-900"></body>
{/if}
