<template>
    <div class="flex flex-col gap-y-5">
        <div class="bg-berry-2 rounded-xl">
            <p class="md:text-3xl text-2xl font-semibold text-nocta-4 px-4 py-1">Professional</p>
        </div>
        <div class="flex flex-col pl-6 gap-y-5 border-l-8 border-nocta-4">
            <XpCard :key="xp.title" v-for="xp in experiences">
                <div class="flex md:flex-row flex-col justify-between font-medium bg-berry-2 text-pink-300 py-1 px-4 rounded-lg">
                    <p class="md:text-2xl text-lg">{{ xp.title }}</p>
                    <p class="md:text-base self-end md:pt-0 pt-3"> {{ xp.date }}</p>
                </div>
                <div class="md:text-lg text-base p-5 md:py-7 py-3 md:pr-32 text-nocta-6" v-show="xp.description">
                    <p>
                        {{ xp.description }}
                    </p>
                    <div class="flex flex-wrap gap-3 text-lg pt-7">
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
                date: "From 01.2023",
                description: "Active as a Data Analyst within a Scrum team in the Tax & Legal Department of Deloitte Netherlands.   ",
                stack: ["SQL", "Python", "Pytorch", "Databricks", "Scraping","Machine Learning", "Artificial Intelligence"]
            },
            {
                title: "Web Developer - Deloitte",
                date: "1.2022 - 01.2023",
                description: "Active as a Front-End Developer within a Scrum team in the Tax & Legal Department of Deloitte Netherlands. Worked on design and the implementation of said design and features.",
                stack: ["Vue.js", "Typescript", "TailwindCSS", "Azure", "Figma"]
            },
            // {
            //     title: "Dutch Audio Transcriber and Quality Control - ISoftStone",
            //     date: "11.2021 - 03.2022",
            //     description: "Transcribed Dutch audio files into machine-readable text as a Transcriber with the help of Natural Language Processing Techniques. Managed and controlled transcribed audio files of the Dutch department as Quality Controller.",
            //     stack: ["Machine Learning", "NLP", "SQL"]
            // },
        
        ]
        }
    }
    }

    
</script>