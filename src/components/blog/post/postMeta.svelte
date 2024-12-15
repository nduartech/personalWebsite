<script lang="ts">
    import {Badge} from "$lib/components/ui/badge/index.js";
    import {Label} from "$lib/components/ui/label/index.js";

    let {id, description, published, tags, series} = $props();
</script>

<div class="w-10/12 flex flex-col justify-start">
    <div class="flex flex-row w-full justify-center"><h4>{description}</h4></div>
    <p class="text-xs mb-2 text-gray-400">Published: {published.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })}</p>
    <div class="flex flex-row">
        <Label for={id} class="pt-1 pr-2 text-xs">tags:</Label>
        <div id={id} class="flex flex-row flex-wrap space-x-1">
            {#each tags as tag}
                <span class="mb-0.5"><Badge variant="primary">{tag}</Badge></span>
            {/each}
        </div>
    </div>
    {#if (series)}
        <div class="mt-2 flex flex-row">
            <Label for={series.id} class="pr-2 text-xs">series:</Label>
            <Badge id={series.id} variant="secondary">{series.id}</Badge>
        </div>
    {/if}
</div>