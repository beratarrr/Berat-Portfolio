<template>
  <div class="bg-berry-1 flex flex-col rounded-xl p-8 gap-y-10">
    <page-title class="flex flex-col items-center text-center">
      <h1 class="">{{ projectsTitle }}</h1>
      <p class="md:text-xl text-base font-normal text-berry-4 mt-2">
        {{ projectsDescr }} You can click on the project titles to see more! (For completed projects at least! 😄)
      </p>
    </page-title>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-16 px-4 md:px-10">
      <div class="flex flex-col gap-y-5 text-center">
        <h2 class="text-2xl md:text-3xl bg-berry-4 rounded-lg p-1 text-berry-1 font-semibold">
          Ideas 💡
        </h2>
        <div class="bg-berry-2 text-lg text-berry-4 p-4 flex flex-col gap-y-3 rounded-lg border-berry-4 border-2 text-left">
          <p v-for="idea in projectIdeas" :key="idea.title">{{ idea.title }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-y-5 text-center">
        <h2 class="text-2xl md:text-3xl bg-berry-4 rounded-lg p-1 text-berry-1 font-semibold">
          Working on... 👨‍💻
        </h2>
        <div class="bg-berry-2 text-lg text-berry-4 p-4 flex flex-col gap-y-3 rounded-lg border-berry-4 border-2 text-left">
          <p v-for="progress in inprogressProjects" :key="progress.title">
            {{ progress.title }}
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-y-5 text-center">
        <h2 class="text-2xl md:text-3xl bg-berry-4 rounded-lg p-1 text-berry-1 font-semibold">
          Completed projects ✅
        </h2>
        <div class="bg-berry-2 text-lg text-berry-4 p-4 flex flex-col gap-y-3 rounded-lg border-berry-4 border-2 text-left">
          <NuxtLink v-for="project in completedProjects" :key="project.title" :to="project.route" class="hover:text-nocta-4 transitiones">
            {{ project.title }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- <section class="flex flex-col">
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
      </section>     -->
  </div>
</template>

<script>
import {
  completedProjects,
  projectIdeas,
  inprogressProjects,
} from "../../static/projects.js";


export default {
  data() {
    return {
      projectsTitle: "Projects",
      projectsDescr:
        "This page contains my upcoming, in-progress, and completed projects.",
      completedProjects: [...completedProjects],
      projectIdeas: [...projectIdeas],
      inprogressProjects: [...inprogressProjects],
    };
  },
};

</script>
