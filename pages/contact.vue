<template>
   <div class="flex flex-col p-5 gap-y-8 bg-berry-1">
        <section class="" >
            <PageTitle class="flex flex-wrap">
                    <p class="">Hi</p>
                    <div class="">
                        <h2 class="flex font-bold md:text-5xl text-4xl text-nocta-4" >{{name}}</h2>  
                        <div class="flex gap-5 items-center justify-center h-full">
                            <span class="animate-pulse block md:w-64 md:h-4 h-3 w-28 bg-nocta-4 rounded-2xl" v-show="!name"> </span>
                            <span class="animate-pulse block md:w-36 md:h-4 h-3 w-32 bg-yellow-600 rounded-2xl" v-show="!name"> </span>
                        </div>
                    </div>
                    <h2 class="flex font-bold md:text-5xl text-4xl text-berry-4" >,cup of coffee?</h2>  
            </PageTitle>
        </section>
        <form class="" data-netlify="true" netlify name="contact">
                <div class="flex flex-col md:gap-y-2 gap-y-7" >
                    <div class="">
                        <span class="uppercase text-base text-white font-bold">Full Name / Company Name</span>
                        <input class="border-2 border-berry-3 w-full bg-berry-1 text-nocta-6 mt-2 p-3 rounded-lg" v-model="name" name="name"
                        type="text" placeholder="">
                    </div>
                    <div class="flex md:flex-row flex-col gap-x-36 gap-y-7">
                        <div class=" flex-grow">
                            <span class="uppercase text-base text-white font-bold">subject</span>
                            <input class="border-2 border-berry-3 w-full bg-berry-1 text-nocta-6 mt-2 p-3 rounded-lg" name="subject" v-model="subject"
                            type="text">
                        </div>
                        <div class=" flex-grow">
                            <span class="uppercase text-base text-white font-bold">email</span>
                            <input class="border-2 border-berry-3 w-full bg-berry-1 text-nocta-6 mt-2 p-3 rounded-lg" name="email" v-model="email"
                            type="text">
                        </div>
                    </div>
                    <div class="">
                        <span class="uppercase text-base text-white font-bold">Message</span>
                        <textarea class="border-2 border-berry-3 w-full h-32 bg-berry-1 text-nocta-6 mt-2 p-3 rounded-lg" name="message" v-model="message">
                        </textarea>
                    </div>
                    <Knopje class="self-center">
                        <button type="submit">
                            Send it through!
                        </button>                    
                    </Knopje>
                    <p class="text-nocta-4">
                        You're also free to send an email to <a class="text-berry-4" href="mailto:b.p.aras@hotmail.com"> my mail</a>.
                    </p>
                </div>
            </form>
  </div> 
</template>

<script lang="ts">

export default {
    data() {
        return {
            contactTitle: "Contact",
            contactDescr: "Feel free to contact me by filling in this contact form.",
            name: '',
            subject: '',
            message: '',
            email: '',
        };
    },
}


</script>