<script lang="ts">
    import me from '$lib/assets/me.png?url'
    import ModeToggle from '$lib/components/darkMode.svelte'
    import * as Avatar from '$lib/components/ui/avatar/index.js'
    import Github from '~icons/line-md/github-twotone?raw';
    import {buttonVariants} from '$lib/components/ui/button/index.js'
    import NavCrumbs from '$lib/components/nav/navCrumbs.svelte'

    let {pathname} = $props();
</script>

<div class="w-full h-fit flex flex-col items-center justify-center">
    <div class="flex flex-row w-full min-h-[8.33vh] justify-between pt-8 px-5">
        <div class="flex flex-row w-3/12 justify-start pr-10">
            <Avatar.Root>
                <Avatar.Image src={me} alt="@me"/>
                <Avatar.Fallback>ND</Avatar.Fallback>
            </Avatar.Root>
        </div>
        <div class="flex flex-row min-w-5/12 max-w-9/12 space-x-2 items-center">
            <a href="https://github.com/nduartech" aria-label="Github Profile" class={buttonVariants({ variant: "outline", size: "icon" })}
               target="_blank" rel="noopener noreferrer"><span>{@html Github}</span></a>
            <ModeToggle/>
        </div>
    </div>
    <NavCrumbs pathname={pathname}/>
</div>
