<template>
    <div class="flex flex-col gap-y-5">
        <div class="rounded-xl bg-berry-2">
            <p class="md:text-3xl text-2xl font-semibold text-nocta-4 px-4 py-1">Academic</p>
        </div>
        <div class="flex flex-col pl-6 gap-y-5 border-l-8 border-nocta-4">
            <XpCard :key="xp.title" v-for="xp in experiences">
                <div class="flex md:flex-row flex-col justify-between font-medium bg-berry-2 text-pink-300 py-1 px-4 rounded-lg">
                    <p class="md:text-2xl text-lg">{{ xp.title }}</p>
                    <p class="md:text-base self-end md:pt-0 pt-3"> {{ xp.date }}</p>
                </div>
                <div class="md:text-lg text-base pl-5 md:py-7 py-3 md:pr-32 text-nocta-6" v-show="xp.description">
                    <div class="flex flex-col gap-y-2">
                        <p class="italic">
                            {{ xp.study }}
                        </p>
                        <p>
                            {{ xp.description }}
                        </p>
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
                title: "Artificial Intelligence Student - Vrije Universiteit Amsterdam",
                date: "From 2021",
                study: "Bachelor of Science in Artificial Intelligence",
                description: "Specialisation in Intelligent Systems. Relevant Coursework: Machine Learning, Statistical Methods for AI, Multi-agent/Intelligent System, Data Wrangling, Automata and complexity, Programming in Python/R/Matlab, Information Management, Databases.",
            },
            {
                title: "Pre-University Education - Dalton Den Haag",
                date: "09.2019 -06.2021",
            },
            {
                title: "School of higher general secondary education (HAVO) - Dalton Den Haag",
                date: "09.2014 - 09.2019",
            },],
        }
    }
    }

    
</script>