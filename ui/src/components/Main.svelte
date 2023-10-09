<script>
	import { isVehicle } from "@store/stores"
	import PlayerHud from "./Player-hud.svelte"
	import VehicleHud from "./Vehicle-hud.svelte"
	import Menu from "./Menu.svelte"
</script>

<div class="w-screen h-screen flex items-end justify-between">
    <PlayerHud />
    {#if $isVehicle}
        <VehicleHud />
    {/if}
</div>