<template>
    <div class="bg-nocta-5 flex flex-col rounded-xl p-8 gap-y-10">
        <page-title class="flex flex-col items-center">
            <p>Projects</p>
            <p class="text-xl font-normal">This page contains a selection of my projects.</p>
        </page-title>
        <section class="flex flex-col">
          <NuxtLink to="projects/datavis" class="flex flex-col mt-6 pl-6 gap-y-5 border-l-8 border-nocta-4 transitiones">
              <XpCard class="hover:border-nocta-4" :key="proj.title" v-for="proj in projects">
                  <div class="flex font-medium bg-nocta-7 rounded-t-lg text-nocta-6 py-1 px-4">
                      <p class="text-2xl">{{ proj.title }}</p>
                  </div>
                  <div class="flex justify-between">
                    <div class="flex flex-col justify-between text-lg pl-5 py-7 pr-32 text-nocta-6">
                        <p>
                            {{ proj.description }}
                        </p>
                        <div class="flex gap-x-5 text-lg pt-7">
                            <Pill :key="skill" v-for="skill in proj.stack">
                                {{  skill }}
                            </Pill>
                        </div>
                    </div>
                      <img class="w-60 m-5 border-2 border-nocta-7 rounded-xl shadow-xl" src="DATAVIS.svg"/>
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