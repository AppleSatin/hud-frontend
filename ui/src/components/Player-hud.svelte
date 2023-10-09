<script>
 import { isVehicle, Player } from "@store/stores";
</script>

<div class="mb-[4.5rem] transition-all {$isVehicle ? "ml-[40vh]" : "ml-[5.6vh]"}">
    <div class="flex -ml-8 -mb-2">
        <!-- Voice -->
        <div class="w-[4rem] h-[4rem] flex items-center justify-center">
            <i class="fas fa-wifi fa-rotate-90 fa-sm z-10 {$Player && $Player.talking ? "text-[#faeb63]" : "text-gray-300"}"></i>
            <svg class="fixed w-[4rem]" width={200} height={200} viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"fill="#1f2b49"stroke="#0f1831"stroke-width=1/><clipPath id="c-cut-out-hexwhole"><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"/></clipPath></g></svg>
        </div>
        <!-- Hunger -->
        <div class="w-[4rem] h-[4rem] flex items-center justify-center">
            <i class="fas fa-burger fa-sm z-10 text-[#dbdbdb]"></i>
            <svg class="fixed w-[4rem]" width="200" height="200" viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" fill="#2c3e50c0" stroke="#0f1831" stroke-width="1" /><clipPath id="c-cut-out-hexwhole"><rect x="0" y="0" width="100%" height="30%" /></clipPath>
                <rect x="0" y="calc(100% - {$Player ? $Player.hunger : 0}%)" width="100%" height="{$Player ? $Player.hunger : 0}%" fill="#1f2b49" clip-path="url(#c-cut-out-hexwhole)" />
            </svg>
        </div>
        <!-- Thirst -->
        <div class="w-[4rem] h-[4rem] flex items-center justify-center">
            <i class="fas fa-glass-water fa-sm z-10 text-[#dbdbdb]"></i>
            <svg class="fixed w-[4rem]" width="200" height="200" viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" fill="#2c3e50c0" stroke="#0f1831" stroke-width="1" /><clipPath id="c-cut-out-hexwhole"><rect x="0" y="0" width="100%" height="30%" /></clipPath>
                <rect x="0" y="calc(100% - {$Player ? $Player.thirst : 0}%)" width="100%" height="{$Player ? $Player.thirst : 0}%" fill="#1f2b49" clip-path="url(#c-cut-out-hexwhole)" />
            </svg>
        </div>
        <!-- Stress -->
        <div class="w-[4rem] h-[4rem] flex items-center justify-center">
            <i class="fas fa-brain fa-sm z-10 text-[#dbdbdb]"></i>
            <svg class="fixed w-[4rem]" width="200" height="200" viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" fill="#2c3e50c0" stroke="#0f1831" stroke-width="1" /><clipPath id="c-cut-out-hexwhole"><rect x="0" y="0" width="100%" height="30%" /></clipPath>
                <rect x="0" y="calc(100% - {$Player ? $Player.stress : 0}%)" width="100%" height="{$Player ? $Player.stress : 0}%" fill="#1f2b49" clip-path="url(#c-cut-out-hexwhole)" />
            </svg>
        </div>
    </div>
    <div>
        <!-- Health -->
        <div class="flex items-center">
            <!-- Hexagon + Icon -->
            <div class="w-[4rem] h-[4rem] flex items-center justify-center">
                <svg class="z-10" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-3 -3 30 30" fill="none"><path d="M19.5 12.6H15.838L14.007 9L10.8 15L9.429 12.6H5.5" stroke="#1c6e27" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <svg class="fixed w-[4rem]" width={200} height={200} viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"fill="#1f2b49"stroke="#0f1831"stroke-width=1/><clipPath id="c-cut-out-hexwhole"><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"/></clipPath></g></svg>
            </div>
            <!-- Progress Bar  -->
            <div class="w-[15rem] h-[0.9rem] -ml-2 flex rounded-r-full border-2 border-primary bg-secondary">
                <div class="h-full rounded-r-full bg-[#1c6e27]" style="width: {$Player && $Player.PlayerDead ? "0": ($Player ? $Player.health : 0)}%;"></div>
            </div>
        </div>
        <!-- Shield -->
        <div class="flex items-center ml-8 -mt-4">
            <!-- Hexagon + Icon -->
            <div class="w-[4rem] h-[4rem] flex items-center justify-center">
                <i class="fas fa-shield z-10 text-[#003d77]"></i>
                <svg class="fixed w-[4rem]" width={200} height={200} viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"fill="#1f2b49"stroke="#0f1831"stroke-width=1/><clipPath id="c-cut-out-hexwhole"><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"/></clipPath></g></svg>
            </div>
            <!-- Progress Bar  -->
            <div class="w-[15rem] h-[0.9rem] -ml-2 flex rounded-r-full border-2 border-primary bg-secondary">
                <div class="h-full rounded-r-full bg-[#003d77]"  style="width: {$Player ? $Player.armour : 0}%;"></div>
            </div>
        </div>
    </div>
</div>
<style>

</style>