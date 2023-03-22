<template>
   <div class="flex flex-col p-8 gap-y-11">
        <section class="" >
            <page-title class="flex flex-wrap">
                    <p class="">Hi</p>
                    <div class="">
                        <h2 class="flex font-bold md:text-6xl text-4xl text-nocta-4" >{{name}}</h2>  
                        <div class="flex gap-5 items-center justify-center h-full">
                            <span class="animate-pulse block md:w-64 md:h-4 h-3 w-28 bg-nocta-4 rounded-2xl" v-show="!name"> </span>
                            <span class="animate-pulse block md:w-36 md:h-4 h-3 w-32 bg-yellow-600 rounded-2xl" v-show="!name"> </span>
                        </div>
                    </div>
                    <h2 class="flex font-bold md:text-6xl text-4xl text-nocta-6" >,cup of coffee?</h2>  
            </page-title>
        </section>
        <section class="">
                <div class="flex flex-col md:gap-y-5 gap-y-7" >
                    <div class="">
                        <span class="uppercase text-lg text-white font-bold">Full Name / Company Name</span>
                        <input class="border-2 border-nocta-2 w-full bg-nocta-5 text-nocta-6 mt-2 p-3 rounded-lg" v-model="name"
                        type="text" placeholder="">
                    </div>
                    <div class="flex md:flex-row flex-col gap-x-36 gap-y-7">
                        <div class=" flex-grow">
                            <span class="uppercase text-lg text-white font-bold">subject</span>
                            <input class="border-2 border-nocta-2 w-full bg-nocta-5 text-nocta-6 mt-2 p-3 rounded-lg" v-model="subject"
                            type="text">
                        </div>
                        <div class=" flex-grow">
                            <span class="uppercase text-lg text-white font-bold">email</span>
                            <input class="border-2 border-nocta-2 w-full bg-nocta-5 text-nocta-6 mt-2 p-3 rounded-lg" v-model="email"
                            type="text">
                        </div>
                    </div>
                    <div class="">
                        <span class="uppercase text-lg text-white font-bold">Message</span>
                        <textarea class="border-2 border-nocta-2 w-full h-32 bg-nocta-5 text-nocta-6 mt-2 p-3 rounded-lg" v-model="message">
                        </textarea>
                    </div>
                    <div class="flex justify-center">
                        <a href="mailto:b.p.aras@hotmail.com?subject=Contact" class="flex justify-center uppercase text-xl font-bold tracking-wide bg-nocta-4 text-nocta-7 p-2 rounded-lg w-72 hover:bg-yellow-600 transitiones">
                            Send it through!
                        </a>
                    </div>
                </div>
        </section>
  </div> 
</template>

<script lang="ts">

export default {
  data () {
      return {
        contactTitle: "Contact",
        contactDescr: "Feel free to contact me by filling in this contact form.",
        name: '',
        subject: '',
        message: '',
        email: '',
      }
  }
}


</script>