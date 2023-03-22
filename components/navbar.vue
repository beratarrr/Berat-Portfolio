<template>
    <div>
        <div class="hidden md:block">
            <nav class="flex h-12 bg-nocta-5 w-full rounded-lg justify-around items-center font-semibold"> 
                <NuxtLink :class="homeRoute() ? 'activeLink' : 'inactiveLink'" class="pb-1" to="/">Home</NuxtLink>
                <NuxtLink :class="skillsRoute() ? 'activeLink' : 'inactiveLink'" class="pb-1" to="skills">Skills</NuxtLink>
                <NuxtLink :class="experienceRoute() ? 'activeLink' : 'inactiveLink'" class="pb-1" to="experience">Experience</NuxtLink>
                <NuxtLink :class="projectsRoute() ? 'activeLink' : 'inactiveLink'" class="pb-1" to="projects">Projects</NuxtLink>
                <NuxtLink :class="contactRoute() ? 'activeLink' : 'inactiveLink'" class="pb-1" to="contact">Contact</NuxtLink>
            </nav>
        </div>
        
        <div class="md:hidden block top-0">
            <div class="h-14 bg-nocta-7">
                <div class="flex items-center justify-end py-4 pr-4">
                    <button
                    class="justify-center cursor-pointer h-6 flex lg:hidden flex-col"
                    @click="hamburgerOpen = !hamburgerOpen">
                        <span
                        class="absolute block w-8 h-1 bg-nocta-4 rounded transform transition ease-in-out duration-500 "
                        :class="{'rotate-45 bg-red-600':hamburgerOpen, '-translate-y-2.5 bg-nocta-4': !hamburgerOpen }"/>
                        <span
                        class="block w-8 h-1 rounded transform transition ease-in-out duration-500 bg-nocta-4"
                        :class="{'opacity-0 ':hamburgerOpen}"/>
                        <span
                        class="absolute block w-8 h-1 bg-nocta-4 rounded transform transition ease-in-out duration-500 "
                        :class="{'-rotate-45 bg-red-600':hamburgerOpen, 'translate-y-2.5 bg-nocta-4': !hamburgerOpen }"/>
                    </button>
                </div>
            </div>
            <nav class="flex flex-col bg-nocta-5 items-center font-semibold transitiones h-full gap-y-3 py-3"
                :class="{'':hamburgerOpen, 'hidden': !hamburgerOpen }"> 
                <NuxtLink :class="homeRoute() ? 'activeLink' : 'inactiveLink'" @click="hamburgerOpen = !hamburgerOpen" class="pb-1" to="/">Home</NuxtLink>
                <NuxtLink :class="skillsRoute() ? 'activeLink' : 'inactiveLink'" @click="hamburgerOpen = !hamburgerOpen" class="pb-1" to="skills">Skills</NuxtLink>
                <NuxtLink :class="experienceRoute() ? 'activeLink' : 'inactiveLink'" @click="hamburgerOpen = !hamburgerOpen" class="pb-1" to="experience">Experience</NuxtLink>
                <NuxtLink :class="projectsRoute() ? 'activeLink' : 'inactiveLink'" @click="hamburgerOpen = !hamburgerOpen" class="pb-1" to="projects">Projects</NuxtLink>
                <NuxtLink :class="contactRoute() ? 'activeLink' : 'inactiveLink'" @click="hamburgerOpen = !hamburgerOpen" class="pb-1" to="contact">Contact</NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data(){
        return{
            hamburgerOpen: false
        }
    },
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