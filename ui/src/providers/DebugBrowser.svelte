<script>
    import { debugData } from '../utils/debugData';

	let show = false;
    //EXAMPLE
    
    // debugData([
	// 	{
	// 		action: 'setVisible',
	// 		data: true,
	// 	},
	// ])

	let options = [
		{
				component: 'Show',
				actions : [
					{
						name: "show",
						action: "setVisible",
						data: true,
					},
					{
						name: "hide",
						action: "setVisible",
						data: false,
					},
				]
		},

    {
				component: 'toggle Vehicle',
				actions : [
					{
						name: "show",
						action: "setVehicle",
						data: true,
					},
					{
						name: "hide",
						action: "setVehicle",
						data: false,
					},
				]
		},

	]
</script>


<div class="absolute top-0 z-[1000]">
	<button class="bg-[#232B33] text-white p-2 font-medium"
		on:click={() => {
			show = !show;
		}}
	>
	Show
	</button>
	{#if show}
	<div class="w-fit h-fit bg-[#25303B] p-2">
		{#each options as option}
		<div class="flex flex-row gap-2 items-center">
			<p class="text-white mr-4">{option.component}</p>
			{#each option.actions as action}
			<button class="bg-[#0098A3] text-white p-2"
				on:click={() => {

					if (action.custom == true) {
						action.customFunction();
						return
					}
					debugData([
						{
							action: action.action,
							data: action.data,
						},
					])
				}}
			>
			{action.name}
			</button>
			{/each}
		</div>
		{/each}
	</div>
	{/if}
</div>