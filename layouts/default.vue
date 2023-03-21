<template>
    <div class="grid grid-cols-12 grid-rows-6 h-screen w-full fixed bg-gradient-to-tr from-nocta-1 to-nocta-7">
        <div class="col-span-10 col-start-2 row-span-1 mt-20">
            <navbar class=""></navbar>
        </div>
        <div class="bg-nocta-5 col-span-10 col-start-2 row-span-4 relative rounded-xl overflow-y-auto scrollbar-hide z-50">
            <slot class="" />
        </div>
        <div class="col-span-2 col-start-6">
            <Dropdown class=""></Dropdown>
        </div>
    </div>
</template>
<style>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
/* .scrollbar-hide::-webkit-scrollbar {
    display: none;
} */

/* For IE, Edge and Firefox */
/* .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
} */
/* width */
::-webkit-scrollbar {
  width: 7px;
  border-radius: 0px 25px 25px 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #004E7C; 
  border-radius: 0px 25px 25px 0px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 0px 25px 25px 0px;
  background: #fba92c; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  border-radius: 0px 25px 25px 0px;

  background: #d68918; 
}
</style>