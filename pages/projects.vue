<template>
    <div class="bg-berry-1 flex flex-col rounded-xl p-8 gap-y-10">
        <page-title class="flex flex-col items-center">
            <p>Projects</p>
            <p class="md:text-xl text-base font-normal text-berry-4">This page contains a selection of my projects.</p>
        </page-title>
        <section class="flex flex-col">
          <NuxtLink to="datavis" class="flex flex-col mt-6 pl-6 gap-y-5 border-l-8 border-nocta-4 transitiones">
              <XpCard class="hover:border-nocta-4" :key="proj.title" v-for="proj in projects">
                  <div class="flex font-medium bg-berry-2 rounded-lg text-pink-300 py-1 px-4">
                      <p class="md:text-2xl text-lg">{{ proj.title }}</p>
                  </div>
                  <div class="flex md:flex-row flex-col justify-between">
                    <div class="flex flex-col md:text-lg text-base p-5 md:py-7 py-9 md:pr-32 text-nocta-6" v-show="proj.description">
                        <p>
                            {{ proj.description }}
                        </p>
                        <div class="flex flex-wrap gap-3 text-lg pt-7">
                            <Pill :key="skill" v-for="skill in proj.stack">
                                {{  skill }}
                            </Pill>
                        </div>
                    </div>
                    <img class="md:-order-none order-first w-60 m-5 shadow-xl" src="/DATAVIS.svg"/>
                  </div>
              </XpCard>
          </NuxtLink>
      </section>    
    </div>
</template>


<script lang="ts">

export default {
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