<template>
    <div class="bg-berry-1 flex flex-col rounded-xl p-8 gap-y-3">
        <div class="flex">
            <backknopje to="/projects" />
            <page-title class="flex items-center m-auto">
                <p class="md:text-3xl text-2xl">Projects / DataVis</p>
            </page-title>
        </div>
        <section class="md:grid md:grid-cols-12 flex flex-col gap-4">
            <div class="col-span-5">
                <img src="/datavispic.png" />
            </div>
            <projectcard class="col-span-7 rounded-lg">
                <div class="flex justify-between font-medium bg-berry-2 text-pink-300 py-1 px-4 rounded-lg">
                    <p class="md:text-2xl text-lg">About</p>
                </div>
                <div class="md:text-lg text-base pl-5 md:py-7 py-3 md:pr-32 text-nocta-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos ad quidem alias? Iure alias minus eius quod incidunt aperiam laudantium. Quis voluptatem a esse autem libero, nemo asperiores fugiat, accusamus temporibus, natus optio culpa aliquam adipisci quas hic ipsam.
                    </p>
                </div>
            </projectcard>
            <projectcard class="flex flex-col rounded-lg col-span-6">
                <div class="flex font-medium bg-berry-2 text-pink-300 py-1 px-4 rounded-lg">
                    <p class="md:text-2xl text-lg">Features</p>
                </div>
                <div class="flex flex-wrap gap-y-3 gap-x-6 items-center py-3 px-4">
                    <pill>Display data about the 2022 Qatar world cup</pill>
                    <pill>User is able to adjust charts to liking and remove subjects</pill>
                    <pill>Live, up to date, data</pill>
                </div>
            </projectcard>
            <projectcard class="col-span-6 rounded-lg">
                <div class="flex font-medium bg-berry-2 text-pink-300 py-1 px-4 rounded-lg">
                    <p class="md:text-2xl text-lg">Links</p>
                </div>
                <div class="flex items-center py-3 px-4 gap-x-5">
                    <linkbutton href="https://www.google.com" target="_blank">
                        <p>SOURCE</p>
                        <img src="/link.svg" class="w-7" />
                    </linkbutton>
                </div>
            </projectcard>
        </section>    
    </div>
</template>


<script lang="ts">
import backknopje from '~~/components/backknopje.vue'
import Linkbutton from '~~/components/linkbutton.vue'

export default {
  components: { backknopje, Linkbutton },
  data () {
      return {
      projectsTitle: "Projects",
      projectsDescr: "This page contains projects that I have worked on.",
      projects: [
            {
                title: "DataVis, a dashboard for the 2022 Worldcup",
                description: "Collected data about the 2022 Worldcup and visualized it with ChartJs in a Vue3 web app.",
                stack: ["Vue3", "Pinia", "ChartJs", "TailwindCSS",]
            },]
      }
  }
}


</script>