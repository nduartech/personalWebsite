<script lang="ts">
import * as Command from '$lib/components/ui/command';
import LineMdCoffeeHalfEmptyFilledLoop from '~icons/line-md/coffee-half-empty-filled-loop?raw';
import LineMdBriefcaseTwotone from '~icons/line-md/briefcase-twotone?raw';
let open = $state(false)
let selectedValue = $state('')
let searchContent = $state('')
let searchBox = $state(null);

let {articles} = $props();
let articleMap = $state(new Map());

$effect(() => {
  if(articles){
    articles.forEach((article: any) => {
      articleMap.set(article.title,[article.title, article.published, article.slug]);
    });
  }
});

function openCommandMenu() {
  searchBox.focus();
  open = true;
}

function closeCommandMenu() {
  open = false;
  searchContent = '';
  selectedValue = '';
  document.activeElement.blur();
}

function useSelectedValue() {
  console.log('Clicked value', selectedValue);
  navigateToPage(selectedValue);
  setTimeout(() => {
    closeCommandMenu();
  }, 200);
}

function navigateToPage(id: string|undefined) {
  let url = null;
  if (id === 'experience work projects') {
    console.log('Navigate to experience page');
    url = '/experience';
  } else if (id === 'technical blog writing thoughts opinions') {
    console.log('Navigate to technical blog page');
    url = '/blog';
  } else if (id) {
    console.log('Navigating to article',articleMap.get(id));
    url = `/blog/${articleMap.get(id)[2]}`;
  }
  if (url) {
      let a = document.createElement('a');
      a.href = url;
      a.click();
  }
}

</script>

<svelte:window onkeydown={(e: KeyboardEvent) => {
 if (e.key === "Escape") {setTimeout(closeCommandMenu, 200);return;}
 if (e.key === "k" && (e.metaKey||e.ctrlKey)) {
  e.preventDefault();
  openCommandMenu();
  return
 }
 if (e.key === "p" && (e.metaKey||e.ctrlKey)) {
  e.preventDefault();
  console.log("Open projects");
  navigateToPage('experience work projects');
  return;
 }
 if (e.key === "b" && (e.metaKey||e.ctrlKey)) {
  e.preventDefault();
  console.log("Open blog");
  navigateToPage('technical blog writing thoughts opinions');
  return;
 }
 if (e.key === "Enter" && open && !selectedValue) {
    console.log("Enter pressed without selection",searchContent);
    setTimeout(closeCommandMenu, 200);
 }
}}/>

<div class="flex w-full py-5" role="navigation"
     onmouseleave={()=>{
         if (document.activeElement === searchBox) return;
         setTimeout(closeCommandMenu, 200);
     }}>
    <Command.Root id="command-root" bind:value={selectedValue}>
        <div class="flex flex-row w-full justify-between items-center" onkeydown={(e)=>{
            if (e.key==="Enter"&&document.activeElement!==searchBox) {
                e.preventDefault();
                e.stopPropagation();
                openCommandMenu();
            }
        }} onmouseenter={()=>{openCommandMenu()}}
             onmousedown={()=>{openCommandMenu()}}
             onclick={()=>{openCommandMenu()}} role="combobox" tabindex="0" aria-controls="command-root" aria-expanded="false"
             aria-label="Search work, projects, and articles">
            <Command.Input bind:value={searchContent} bind:ref={searchBox} bind:open={open} onClose={closeCommandMenu} class="w-full" placeholder=""/>
        </div>
        <Command.List class={open?"no-scrollbar":"hidden"} onclick={useSelectedValue}>
            <Command.Empty>No results found</Command.Empty>
            <Command.Group heading="Pages">
                <Command.Item value="experience work projects">
                    <span class="flex flex-row"><span class="inline-block pr-2">{@html LineMdBriefcaseTwotone}</span>Experience</span>
                    <Command.Shortcut>⌘P</Command.Shortcut>
                </Command.Item>
                <Command.Item value="technical blog writing thoughts opinions">
                    <span class="flex flex-row"><span class="inline-block pr-2">{@html LineMdCoffeeHalfEmptyFilledLoop}</span>Technical Blog</span>
                    <Command.Shortcut>⌘B</Command.Shortcut>
                </Command.Item>
            </Command.Group>
            <Command.Separator/>
            <Command.Group heading="Articles">
                <!-- TODO: Add links to articles -->
                {#each articles as article}
                    <Command.Item value={article.title}>
                        <span class="flex flex-row">{article.title}</span>
                    </Command.Item>
                {/each}
            </Command.Group>
        </Command.List>
    </Command.Root>
</div>
