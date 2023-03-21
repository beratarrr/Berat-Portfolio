<template>
    <nav class="flex h-12 bg-nocta-5 w-full rounded-lg justify-around items-center font-semibold"> 
        <NuxtLink :class="homeRoute() ? 'activeLink' : 'inactiveLink'" class="" to="/">Home</NuxtLink>
        <NuxtLink :class="skillsRoute() ? 'activeLink' : 'inactiveLink'" to="skills">Skills</NuxtLink>
        <NuxtLink :class="experienceRoute() ? 'activeLink' : 'inactiveLink'" to="experience">Experience</NuxtLink>
        <NuxtLink :class="projectsRoute() ? 'activeLink' : 'inactiveLink'" to="projects">Projects</NuxtLink>
        <NuxtLink :class="contactRoute() ? 'activeLink' : 'inactiveLink'" to="contact">Contact</NuxtLink>
    </nav>
</template>

<script lang="ts">
export default {
    setup () {
        const route = useRoute()
        return {
        route
        }
    },
    methods: {
        homeRoute(){
            if (this.route.name == "index") {
                return true
            } else {
                return false
            }
        },
        skillsRoute(){
            if (this.route.name == "skills") {
                return true
            } else {
                return false
            }
        },
        experienceRoute(){
            if (this.route.name == "experience") {
                return true
            } else {
                return false
            } 
        },
        projectsRoute(){
            if (this.route.name == "projects") {
                return true
            } else {
                return false
            }
        },
        contactRoute(){
            if (this.route.name == "contact") {
                return true
            } else {
                return false
            }
        }
    }
}
</script>