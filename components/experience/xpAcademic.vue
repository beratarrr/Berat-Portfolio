<template>
    <div class="flex flex-col gap-y-5">
        <div class="bg-nocta-7 rounded-xl">
            <p class="text-3xl font-semibold text-nocta-6 px-4 py-1">Academic</p>
        </div>
        <div class="flex flex-col pl-6 gap-y-5 border-l-8 border-nocta-4">
            <XpCard :key="xp.title" v-for="xp in experiences">
                <div class="flex justify-between font-medium bg-nocta-7 text-nocta-6 py-1 px-4  rounded-t-lg">
                    <p class="text-2xl">{{ xp.title }}</p>
                    <p class="text-base"> {{ xp.date }}</p>
                </div>
                <div class="text-lg pl-5 py-7 pr-32 text-nocta-6" v-show="xp.description">
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
                title: "Artificial Intelligence Student - Vrije Universiteit Amsterdam",
                date: "From 2021",
                description: "Specialisation in Intelligent Systems",
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