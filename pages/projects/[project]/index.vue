<template>
  <div class="bg-berry-1 flex flex-col rounded-xl p-8 gap-y-10">
    <div class="flex">
      <Backknopje to="/projects" />
      <PageTitle class="flex items-center m-auto">
        <p class="md:text-3xl text-2xl">{{ project.title }}</p>
      </PageTitle>
    </div>
    <section class="md:grid md:grid-cols-12 flex flex-col gap-4">
      <div class="col-span-5">
        <img :src="project.img" class="rounded-lg"/>
      </div>
      <ProjectProjectcard class="col-span-7 rounded-lg">
        <div
          class="flex justify-between font-medium bg-berry-2 text-pink-300 py-1 px-4"
        >
          <p class="md:text-2xl text-lg">About</p>
        </div>
        <div
          class="md:text-lg text-base px-2 md:pl-5 md:py-7 py-3 md:pr-32 text-nocta-6"
        >
          <p>
            {{ project.descr }}
          </p>
        </div>
      </ProjectProjectcard>
      <ProjectProjectcard class="flex flex-col rounded-lg col-span-6">
        <div class="flex font-medium bg-berry-2 text-pink-300 py-1 px-4">
          <p class="md:text-2xl text-lg">Features</p>
        </div>
        <div class="flex flex-wrap gap-y-3 gap-x-3 items-center py-3 px-4">
          <Pill v-for="feature in project.features" :key="feature">{{
            feature
          }}</Pill>
        </div>
      </ProjectProjectcard>
      <ProjectProjectcard class="flex flex-col rounded-lg col-span-6">
        <div class="flex font-medium bg-berry-2 text-pink-300 py-1 px-4">
          <p class="md:text-2xl text-lg">Links</p>
        </div>
        <div class="flex flex-wrap gap-y-3 gap-x-3 items-center py-3 px-4">
          <Linkbutton
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
          >
            <p>{{link.name }}</p>
            <img src="/link.svg" class="w-7" />
        </Linkbutton>
        </div>
      </ProjectProjectcard>
    </section>
  </div>
</template>

<script setup>
import { completedProjects } from "../../../static/projects.js";
const route = useRoute();
const project = ref("");
watchEffect(() => {
  const projectName = route.params.project;
  const foundProject = completedProjects.find(
    (p) => p.route === `/projects/${projectName}`
  );
  if (foundProject) {
    project.value = foundProject;
  }
});
</script>
