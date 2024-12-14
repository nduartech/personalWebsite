<script lang="ts">
import Header from '$lib/components/header.svelte'
import Command from '$lib/components/landing/landingCommand.svelte'
let {articles} = $props();
</script>

<div id="landing" class="h-full w-full bg-white dark:bg-black">
    <Header />
    <main>
        <div class="w-full h-full flex justify-center items-center">
          <div class="flex flex-col w-full place-items-center space-y-8">
            <h1 class="lg:text-6xl text-black dark:text-white">Hello, I'm Nathan</h1>
            <h3>Software Engineer</h3>
            <div class="flex w-full px-20">
                <Command articles={articles} />
            </div>
          </div>
        </div>
    </main>
</div>
