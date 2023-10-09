<script lang="ts">
    import { isVehicle, Vehicle } from "@store/stores";
    import { afterUpdate, onMount } from "svelte"
    let rotation = 0;
    let rotationTurbo = 0;
    const maxRotation = 130;
  
    const needleStyle = (deg) => {
        return `transform: rotate(${deg}deg);`;
    };
  
    // Speed 
    const updateRotation = () => {
        const rawRotation = ($Vehicle && $Vehicle.speed / 120) * 160 - 140;
        rotation = Math.max(Math.min(rawRotation, maxRotation), -maxRotation);
    };
  
    // Turbo 
    const updateRotationTurbo = () => {
        const rawRotation = ($Vehicle && $Vehicle.turbo / 250) * 160 - 140;
        rotationTurbo = Math.max(Math.min(rawRotation, maxRotation), -maxRotation);
    };
  
    onMount(() => {
        updateRotation();
        updateRotationTurbo();
    });
  
    afterUpdate(() => {
        updateRotation();
        updateRotationTurbo();
    });
  
    function getColor(data) {
        if (data > 50) {
        return "#00FF47";
        } else if (data > 20) {
        return "#D77B26";
        } else {
        return "#D72626";
        }
    }
  
    function getGear(speed) {
        if (speed < 30) {
        return 1;
        } else if (speed < 70) {
        return 2;
        } else if (speed < 100) {
        return 3;
        } else if (speed < 120) {
        return 4;
        } else if (speed < 160) {
        return 5;
        } else {
        return 6;
        }
    }
  </script>
  
  <div class="mb-[4rem] mr-[2.5rem] flex {isVehicle ? "" : "hidden"}">
      <div class="flex items-end -mr-4">
          <!-- Nitrous -->
          {#if $Vehicle && $Vehicle.nosActive}
                <div class="w-[4rem] h-[4rem] flex items-center justify-center">
                    <i class="fas fa-fire fa-sm z-10 {$Vehicle && $Vehicle.nosActive ? 'text-[#4076da]' : 'text-[#4076da]'}"></i>
                    <svg class="fixed w-[4rem]" width="200" height="200" viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" fill="#2c3e50c0" stroke="#0f1831" stroke-width="1" /><clipPath id="c-cut-out-hexwhole"><rect x="0" y="0" width="100%" height="30%" /></clipPath>
                        <rect x="0" y="calc(100% - {$Vehicle ? $Vehicle.nos : 0}%)" width="100%" height="{$Vehicle ? $Vehicle.nos : 0}%" fill="#1f2b49" clip-path="url(#c-cut-out-hexwhole)" />
                    </svg>
                </div>
          {/if}
          <!-- Engine -->
          <div class="w-[4rem] h-[4rem] flex items-center justify-center -ml-8 mb-14">
              <i class="fas fa-triangle-exclamation fa-sm z-10" style="color: {getColor($Vehicle ? $Vehicle.engine : 0)}"></i>
              <svg class="fixed w-[4rem]" width={200} height={200} viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"fill="#1f2b49"stroke="#0f1831"stroke-width=1/><clipPath id="c-cut-out-hexwhole"><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"/></clipPath></g></svg>
          </div>
          <!-- Seatbelt -->
          <div class="w-[4rem] h-[4rem] flex items-center justify-center -ml-8">
              <i class="fas fa-user-slash fa-sm z-10 {$Vehicle && $Vehicle.seatbelt ? "text-[#00FF47]" : "text-[#D72626] animate-pulse"}"></i>
              <svg class="fixed w-[4rem]" width={200} height={200} viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"fill="#1f2b49"stroke="#0f1831"stroke-width=1/><clipPath id="c-cut-out-hexwhole"><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"/></clipPath></g></svg>
          </div>
      </div>
      <!-- Speedometer -->
      <div>
          {#if $Vehicle && $Vehicle.HasTurbo}
          <!-- Turbo -->
          <div class="-mt-[8rem] ml-[8.5rem] absolute w-[8rem] h-[8rem] rounded-full border-[3px] border-primary bg-secondary flex items-center justify-center flex-col">
             <!-- lines  -->
             <svg class="w-[7.5rem] h-[7.5rem] -mt-[1rem]" xmlns="http://www.w3.org/2000/svg" width="145" height="128" viewBox="0 0 145 128" fill="none"><g id="Rev Lines"><line id="Line 13" x1="72.5" x2="72.5" y2="9.87968" stroke="#D8D8D8"/><line id="Line 20" y1="-0.5" x2="9.75899" y2="-0.5" transform="matrix(-0.747306 0.664479 -0.648193 -0.761476 31.293 120)" stroke="#D8D8D8"/><line id="Line 21" y1="-0.5" x2="9.70043" y2="-0.5" transform="matrix(-0.914853 0.403787 -0.389219 -0.921145 16 100)" stroke="#D8D8D8"/><line id="Line 22" opacity="0.9" y1="-0.5" x2="9.66663" y2="-0.5" transform="matrix(-0.999998 0.00217205 -0.00207939 -0.999998 9.6665 75)" stroke="#D8D8D8"/><line id="Line 23" y1="-0.5" x2="9.69258" y2="-0.5" transform="matrix(-0.935238 -0.354019 0.340703 -0.940171 13.0649 52.4314)" stroke="#D8D8D8"/><line id="Line 24" y1="-0.5" x2="9.77893" y2="-0.5" transform="matrix(-0.681736 -0.731598 0.716583 -0.697502 29.2002 27.1543)" stroke="#D8D8D8"/><line id="Line 25" y1="-0.5" x2="9.84811" y2="-0.5" transform="matrix(-0.379599 -0.925151 0.919137 -0.393938 48.6001 14.6475)" stroke="#D8D8D8"/><line id="Line 26" y1="-0.5" x2="9.75899" y2="-0.5" transform="matrix(0.747306 0.664479 0.648193 -0.761476 113.307 119.463)" stroke="#D8D8D8"/><line id="Line 27" y1="-0.5" x2="9.70043" y2="-0.5" transform="matrix(0.914853 0.403787 0.389219 -0.921145 128.6 99.4634)" stroke="#D8D8D8"/><line id="Line 28" opacity="0.9" y1="-0.5" x2="9.66663" y2="-0.5" transform="matrix(0.999998 0.00217205 0.00207939 -0.999998 134.934 74.4634)" stroke="#D8D8D8"/><line id="Line 29" y1="-0.5" x2="9.69258" y2="-0.5" transform="matrix(0.935238 -0.354019 -0.340703 -0.940171 131.535 51.8949)" stroke="#D8D8D8"/><line id="Line 30" y1="-0.5" x2="9.77893" y2="-0.5" transform="matrix(0.681736 -0.731598 -0.716583 -0.697502 115.4 26.6178)" stroke="#D8D8D8"/><line id="Line 31" y1="-0.5" x2="9.84811" y2="-0.5" transform="matrix(0.379599 -0.925151 -0.919137 -0.393938 96 14.111)" stroke="#D8D8D8"/></g></svg>
            <!-- needle -->
            <div class="needle absolute w-[0.2rem] h-[3.6rem] -mt-[3.5rem] transition-all" style="{needleStyle(rotationTurbo)}"><div class="bg-[#00D1FF] w-[0.15rem] h-[35%]"></div></div>
             <!-- <div class="absolute w-4 h-4 z-10 rounded-full bg-[#515A60]"></div> -->
             <div class=" absolute z-10 font-medium text-[3rem]">
                  {$Vehicle && $Vehicle.turbo}
              </div>
          </div>
          {/if}
          <div class="w-[15rem] h-[15rem] bg-secondary rounded-full border-[3px] border-primary flex items-center justify-center">
             <!-- Lines -->
              <svg class="w-[15rem] h-[15rem] -mt-[1.7rem]" xmlns="http://www.w3.org/2000/svg" width="145" height="128" viewBox="0 0 145 128" fill="none"><g id="Rev Lines"><line id="Line 13" x1="72.5" x2="72.5" y2="9.87968" stroke="#D8D8D8"/><line id="Line 20" y1="-0.5" x2="9.75899" y2="-0.5" transform="matrix(-0.747306 0.664479 -0.648193 -0.761476 31.293 120)" stroke="#D8D8D8"/><line id="Line 21" y1="-0.5" x2="9.70043" y2="-0.5" transform="matrix(-0.914853 0.403787 -0.389219 -0.921145 16 100)" stroke="#D8D8D8"/><line id="Line 22" opacity="0.9" y1="-0.5" x2="9.66663" y2="-0.5" transform="matrix(-0.999998 0.00217205 -0.00207939 -0.999998 9.6665 75)" stroke="#D8D8D8"/><line id="Line 23" y1="-0.5" x2="9.69258" y2="-0.5" transform="matrix(-0.935238 -0.354019 0.340703 -0.940171 13.0649 52.4314)" stroke="#D8D8D8"/><line id="Line 24" y1="-0.5" x2="9.77893" y2="-0.5" transform="matrix(-0.681736 -0.731598 0.716583 -0.697502 29.2002 27.1543)" stroke="#D8D8D8"/><line id="Line 25" y1="-0.5" x2="9.84811" y2="-0.5" transform="matrix(-0.379599 -0.925151 0.919137 -0.393938 48.6001 14.6475)" stroke="#D8D8D8"/><line id="Line 26" y1="-0.5" x2="9.75899" y2="-0.5" transform="matrix(0.747306 0.664479 0.648193 -0.761476 113.307 119.463)" stroke="#D8D8D8"/><line id="Line 27" y1="-0.5" x2="9.70043" y2="-0.5" transform="matrix(0.914853 0.403787 0.389219 -0.921145 128.6 99.4634)" stroke="#D8D8D8"/><line id="Line 28" opacity="0.9" y1="-0.5" x2="9.66663" y2="-0.5" transform="matrix(0.999998 0.00217205 0.00207939 -0.999998 134.934 74.4634)" stroke="#D8D8D8"/><line id="Line 29" y1="-0.5" x2="9.69258" y2="-0.5" transform="matrix(0.935238 -0.354019 -0.340703 -0.940171 131.535 51.8949)" stroke="#D8D8D8"/><line id="Line 30" y1="-0.5" x2="9.77893" y2="-0.5" transform="matrix(0.681736 -0.731598 -0.716583 -0.697502 115.4 26.6178)" stroke="#D8D8D8"/><line id="Line 31" y1="-0.5" x2="9.84811" y2="-0.5" transform="matrix(0.379599 -0.925151 -0.919137 -0.393938 96 14.111)" stroke="#D8D8D8"/></g></svg>
              <!-- needle -->
              <div class="needle absolute w-[0.2rem] h-[7.2rem] -mt-[7.3rem] transition-all" style="{needleStyle(rotation)}"><div class="bg-[#00D1FF] w-[0.15rem] h-[35%]"></div></div>
              <!-- <div class="absolute w-4 h-4 z-10 rounded-full bg-[#515A60]"></div> -->
              <div class=" absolute z-10 font-medium text-[2.2rem] -mt-[7.5rem]">
                {getGear($Vehicle && $Vehicle.speed)}
              </div>
              <div class=" absolute z-10 font-medium text-[5rem] -mt-4">
                {$Vehicle && $Vehicle.speed}
              </div>
              <div class="absolute z-10 font-medium text-[1,5rem] mt-[5.5rem]">
                MPH
              </div>
              <i class="fas fa-gas-pump fa-sm absolute mt-[11rem]"></i>
              <div class="absolute w-[7rem] h-[0.54rem] border-2 border-primary bg-secondary mt-[16rem] rounded-full">
                  <div class="h-full bg-[#00D1FF] rounded-full" style="width: {($Vehicle ? $Vehicle.fuel : 0)}%;"></div>
              </div>
          </div>
      </div>
  
  </div>
  
  <style>
      .needle {
        transform-origin: bottom;
      }
  </style>