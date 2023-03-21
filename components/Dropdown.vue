<template>
    <div
      class="flex flex-col transform transitiones mx-2"
      :class="{ '-translate-y-full mt-7': extended, '': !extended }"
    >
      <div
      class="flex justify-between bg-nocta-5 border-r-2 border-l-2 border-nocta-4 p-5 pb-7"
      >
      <a href="https://github.com/beratarrr" target="_blank">
        <img src="github.svg" class="w-12" />
      </a>
      <a href="https://linkedin.com/in/berat-aras/" target="_blank">
        <img src="linkedin.svg" class="w-12" />
      </a>
    </div>
    <div>
      <div
        class="flex items-center justify-around text-center bg-nocta-4 border-2 rounded-b-xl border-nocta-4 border-b-0 cursor-pointer"
        @click="extended = !extended"
      >
        <img
          src="arrow-up.svg"
          class="w-6 transitiones transform"
          :class="{ 'rotate-180': extended, '': !extended }"
        />
        <p class="text-lg tracking-widest text-nocta-7 font-bold">LINKS</p>
        <img
          src="arrow-up.svg"
          class="w-6 transitiones transform"
          :class="{ '-rotate-180': extended, '': !extended }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      extended: true,
    };
  },
  methods: {
    bringUp() {
      this.extended == !this.extended;
    },
  },
};
</script>
