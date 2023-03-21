<template>
    <card>
        <div class="grid grid-cols-6 gap-5">
            <skillcard :key="skill.title" v-for="skill in skills" :href="skill.link" target="_blank">
                <img class="p-8" :src="skill.image" />
                <div class=" text-nocta-4 text-3xl font-medium py-2">
                    {{ skill.title }}
                </div>
            </skillcard>
        </div>
    </card>
</template>

<script lang="ts">
    export default {
    data () {
        return {
        skills: [
            {
                image: "codingskills/python.svg",
                title: "Python",
                link: "https://www.python.org/"
            },
            {
                image: "codingskills/ts.svg",
                title: "Typescript",
                link: "https://www.typescriptlang.org/"
            },
            {
                image: "codingskills/js.svg",
                title: "Javascript",
                link: "https://www.javascript.com"
            },
            {
                image: "codingskills/csshtml.svg",
                title: "CSS/ HTML",
                link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                image: "codingskills/nuxt.svg",
                title: "Nuxt",
                link: "https://www.nuxt.com/"
            },
            {
                image: "codingskills/vue.svg",
                title: "Vue",
                link: "https://www.vuejs.org/"
            },
            {
                image: "codingskills/pinia.svg",
                title: "Pinia",
                link: "https://pinia.vuejs.org/"
            },
            {
                image: "codingskills/figmalogo.svg",
                title: "Figma",
                link: "https://www.figma.com/"
            },
            {
                image: "codingskills/mysql.svg",
                title: "MySql",
                link: "https://www.mysql.com/"
            },
            {
                image: "codingskills/r.svg",
                title: "R",
                link: "https://www.r-project.org/"
            },
            {
                image: "codingskills/d3.svg",
                title: "D3",
                link: "https://d3js.org/"
            },
            {
                image: "codingskills/chartjs.svg",
                title: "Chart.js",
                link: "https://www.chartjs.org/"
            },
            {
                image: "codingskills/githublogo.svg",
                title: "Github",
                link: "https://www.github.com/"
            },]
        }
    }
    }

    
</script>