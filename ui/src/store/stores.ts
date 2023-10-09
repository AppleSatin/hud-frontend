import { writable } from "svelte/store";

export const visibility = writable<boolean>(false);
export const browserMode = writable<boolean>(false);
export const resName = writable<string>("");
export const visibilityMenu = writable<boolean>(false);


export const isVehicle = writable<boolean>(false);

interface VehicleData {
  seatbelt: boolean,
  speed: number,
  fuel: number,
  engine: number,
  nos: number,
  nosActive: boolean,
  HasTurbo: boolean,
  turbo: number,
}
  
export const Vehicle = writable<VehicleData>({
  seatbelt: false,
  speed: 0,
  fuel: 100,
  engine: 100,
  nos: 0,
  nosActive: false,
  HasTurbo: false,
  turbo: 0,
});
export const Vehicles = writable<VehicleData>(null);


interface PlayerData {
  health: number,
  armour: number,
  hunger: number,
  thirst: number,
  oxygen: number,
  stress: number,
  dead: boolean,
  talking: any,
}
  
export const Player = writable<PlayerData>({
  health: 100,
  armour: 100,
  hunger: 100,
  thirst: 100,
  oxygen: 100,
  stress: 0,
  dead: false,
  talking: null,
});
export const Players = writable<PlayerData>(null);
