<template>
  <div class="flex space-x-2 items-center text-4xl md:text-base">
    <!-- <div class="text-gray-500 text-xs" v-if="showNextModelLabel">
      Change to {{ nextMode }}
    </div> -->
    <button
      @click="toggleMode"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500"
    >
      <!-- Moon Icon -->
      <template v-if="colorMode.value === 'light'">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
        >
          <path
            fill="currentColor"
            d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
          ></path>
        </svg>
      </template>

      <!-- Sun Icon -->
      <template v-else>
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
        >
          <path
            fill="currentColor"
            d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
          ></path>
        </svg>
      </template>
    </button>
  </div>
</template>

<script setup>
// const showNextModelLabel = ref(false);
const colorMode = useColorMode();
const modes = [
//   "system", // 0
  "light", // 1
  "dark", // 2
]; 

// const nextModeIcons = {
//   system: "🌓",
//   light: "🌕",
//   dark: "🌑",
// };

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;
  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }
  return modes[nextModeIndex];
});

// const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

function toggleMode() {
  console.log(colorMode);
  colorMode.preference = nextMode.value;
}
</script>
