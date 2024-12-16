<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import {onMount} from "svelte";
    import {Badge} from "$lib/components/ui/badge/index.js";
    import {Label} from "$lib/components/ui/label/index.js";

    let {posts} = $props();
    let sortedPosts = $state(posts.sort((a, b) => {
        return new Date(b.data.published) - new Date(a.data.published);
    }));
    let sortPublished = $state(false); // false = newest first, true = oldest first
</script>

<main class="w-10/12 container pt-10 pb-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each sortedPosts as post}
        <div class="block">
        <a class="block" href={"/blog/"+post.data.slug}>
        <Card.Root>
            <Card.Header>
                <Card.Title>{post.data.title}</Card.Title>
                <Card.Description>{post.data.description}
                    <p class="text-xs text-gray-400">Published on: {post.data.published.toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                    })}</p></Card.Description>
            </Card.Header>
            <Card.Content class="py-2 flex flex-row items-start w-full overflow-x-wrap">
                <Label for={post.data.id} class="pt-1 pr-2 text-xs">tags:</Label>
                <div id={post.data.id} class="flex flex-row flex-wrap space-x-1">
                    {#each post.data.tags as tag}
                        <span class="mb-0.5"><Badge variant="primary">{tag}</Badge></span>
                    {/each}
                </div>
            </Card.Content>
            <Card.Footer>
                {#if (post.data.series)}
                    <Label for={post.data.series.id} class="pr-2 text-xs">series:</Label>
                    <Badge id={post.data.series.id} variant="secondary">{post.data.series.id}</Badge>
                {/if}
            </Card.Footer>
        </Card.Root>
        </a>
        </div>
    {/each}
    </div>
</main>