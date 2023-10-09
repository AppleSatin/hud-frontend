<script lang="ts">
	import { ReceiveNUI } from '@utils/ReceiveNUI'
	import { debugData } from '@utils/debugData'
	import { Player, Players, Vehicle, Vehicles, browserMode, isVehicle, visibility, visibilityMenu } from '@store/stores'

	debugData([
		{
			action: 'setVisible',
			data: true,
		},
	])

	debugData([
		{
			action: 'setBrowserMode',
			data: true
		},
	])

	function browserHideAndShow(e: KeyboardEvent) {
		if (e.key === '=') {
			$visibility = true
		}
	}

	ReceiveNUI('setBrowserMode', (data: boolean) => {
		browserMode.set(data)
		console.log('browser mode enabled')
		if (data) {
			window.addEventListener('keydown', browserHideAndShow)
		} else {
			window.removeEventListener('keydown', browserHideAndShow)
		}
	})

  ReceiveNUI<boolean>('setVehicle', (bool: boolean) => {
    isVehicle.set(bool);
    // console.log("InsideVehicel: ", bool)
  });

  ReceiveNUI('setVehicleData', (data: any) => {
    if (typeof data === 'object' && !Array.isArray(data)) {
      Vehicle.set(data);
      Vehicles.set($Vehicle[0]);
    } else {
      console.error('Invalid vehicle data received:', data);
    }
  });

  ReceiveNUI('setPlayerData', (data: any) => {
		Player.set(data);
    Players.set($Player[0]);
    // console.log("health", data.health)
    // console.log("armour", data.armour)
    // console.log("hunger", data.hunger)
    // console.log("thirst", data.thirst)
    // console.log("oxygen", data.oxygen)
    // console.log("stress", data.stress)
	});

  ReceiveNUI<boolean>('ShowMenu', (data: boolean) => {
    visibilityMenu.set(data);
  });
</script>
