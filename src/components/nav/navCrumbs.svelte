<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js"
    let {pathname} = $props();
    let pathElements = pathname.split('/').slice(1, -2);
    pathElements = pathElements.map((pathElement, j)=>{
        let path = "";
        for(let i = 0; i <= j; i++){
            path += "/"+pathElements[i];
        }
        if (pathElement === "blog") return ["Technical Blog",path];
        return [pathElement,path];
    });
    let lastElement = pathname.split('/').pop();
</script>

<div class="flex flex-row w-full flex-wrap mt-8 px-5">
    {#if pathname !== '/'}
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    {#if pathElements.length > 0}
                        {#each pathElements as pathElement}
                            <Breadcrumb.Separator/>
                            <Breadcrumb.Item>
                                <Breadcrumb.Link href={pathElement[1]}>{pathElement[0]}</Breadcrumb.Link>
                            </Breadcrumb.Item>
                        {/each}
                    {/if}
                    <Breadcrumb.Separator/>
                    <Breadcrumb.Item>
                        <Breadcrumb.Page>{document.title}</Breadcrumb.Page>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        {/if}
</div>