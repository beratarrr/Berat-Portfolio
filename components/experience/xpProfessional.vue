<template>
    <div class="flex flex-col gap-y-5">
        <div class="bg-nocta-7 rounded-xl">
            <p class="text-3xl font-semibold text-nocta-6 px-4 py-1">Professional</p>
        </div>
        <div class="flex flex-col pl-6 gap-y-5 border-l-8 border-nocta-4">
            <XpCard :key="xp.title" v-for="xp in experiences">
                <div class="flex justify-between font-medium bg-nocta-7 text-nocta-6 py-1 px-4 rounded-t-lg">
                    <p class="text-2xl">{{ xp.title }}</p>
                    <p class="text-base"> {{ xp.date }}</p>
                </div>
                <div class="text-lg pl-5 py-7 pr-32 text-nocta-6">
                    <p>
                        {{ xp.description }}
                    </p>
                    <div class="flex gap-x-5 text-lg pt-7">
                        <Pill :key="skill" v-for="skill in xp.stack">
                            {{  skill }}
                        </Pill>
                    </div>
                </div>
            </XpCard>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    data () {
        return {
        experiences: [
            {
                title: "Data Analyst -   Deloitte",
                date: "From 03.2023",
                description: "Active as a Data Analyst within a Scrum team in the Tax & Legal Department of Deloitte Netherlands.   ",
                stack: ["SQL", "Python", "Scraping", "Machine Learning", "Databricks", "Elastic Search", "Artificial Intelligence"]
            },
            {
                title: "Software Developer - Deloitte",
                date: "From 01.2022",
                description: "Active as a Front-End Developer within a Scrum team in the Tax & Legal Department of Deloitte Netherlands. Worked on design and the implementation of said design and features.",
                stack: ["Vue.js", "Asp.net CORE", "Typescript", "TailwindCSS", "Figma"]
            },
            {
                title: "Dutch Audio Transcriber and Quality Control - ISoftStone",
                date: "11.2021 - 03.2022",
                description: "Transcribed Dutch audio files into machine-readable text as a Transcriber with the help of Natural Language Processing Techniques. Managed and controlled transcribed audio files of the Dutch department as Quality Controller.",
                stack: ["Machine Learning", "NLP", "SQL"]
            },]
        }
    }
    }

    
</script>