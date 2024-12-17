<script lang="ts">
import Command from '$lib/components/landing/landingCommand.svelte'
let {articles} = $props();
</script>
<main class="w-full h-full flex flex-col justify-center items-center">
    <div class="flex flex-col h-full w-full justify-start items-center space-y-8 mt-[5vh]">
        <h1 class="lg:text-6xl text-black dark:text-white">Hello, I'm Nathan</h1>
        <h3>Software Engineer</h3>
        <div class="flex flex-row w-full px-20">
            <Command articles={articles}/>
        </div>
        <slot />
    </div>
</main>
