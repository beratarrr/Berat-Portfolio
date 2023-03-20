<template>
    <div class="flex h-screen w-screen">
        <div>
            <slot />
        </div>
    </div>
</template>
<style>
body{
  /*Radial Gradient*/
  background-image: radial-gradient(#4D774E 5.66%, #004E7C 94.35%);
  /*Linear Gradient*/
  background-image: linear-gradient(45.34deg, #4D774E 5.66%, #004E7C 94.35%);
}</style>