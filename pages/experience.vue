
import { PageTitle } from '#build/components';
<template>
    <div class="bg-berry-1 flex flex-col rounded-xl p-5 gap-y-10">
        <PageTitle class="flex flex-col items-center">
            <p>Experience</p>
            <p class="md:text-xl text-base font-normal text-berry-4">This page contains my Academic and Professional experience.</p>
        </PageTitle>
        <div class="flex flex-col gap-y-16">
            <XpAcademic></XpAcademic>
            <XpProfessional></XpProfessional>
        </div>
    </div>
</template>