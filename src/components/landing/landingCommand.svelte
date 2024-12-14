<script lang="ts">
    import * as Command from "../ui/command";
    let open = $state(false);
    let selectedValue = $state("");
    let searchContent = $state("");
    let searchBox = null;

    function onSelect() {
        console.log("Clicked value", selectedValue);
        setTimeout(()=>{open=false;searchContent = "";selectedValue = "";document.activeElement.blur()},200);
    }
</script>

<svelte:window onkeydown={(e: KeyboardEvent) => {
 if (e.key === "Escape") {setTimeout(()=>{open=false;searchContent = "";selectedValue = "";document.activeElement.blur()},200);return;}
 if (e.key === "k" && (e.metaKey||e.ctrlKey)) {
  e.preventDefault();
  searchBox.focus();
  open = true;
  return
 }
 if (e.key === "p" && (e.metaKey||e.ctrlKey)) {
  e.preventDefault();
  console.log("Open projects");
  return;
 }
 if (e.key === "b" && (e.metaKey||e.ctrlKey)) {
  e.preventDefault();
  console.log("Open blog");
  return;
 }
 if (e.key === "Enter" && open && !selectedValue) {
    console.log("Enter pressed without selection",searchContent);
    setTimeout(()=>{open=false;searchContent = "";selectedValue = "";document.activeElement.blur()},200);
 }
}}/>

<div class="flex w-full py-5"
     onmouseleave={()=>{
         if (document.activeElement === searchBox) return;
         setTimeout(()=>{open=false;searchContent = "";selectedValue = "";document.activeElement.blur()},200);
     }}>
    <Command.Root id="command-root" bind:value={selectedValue}>
        <div class="flex flex-row w-full justify-between items-center" onmouseenter={()=>{open=true}}
             onmousedown={()=>{open=true}}
             onclick={()=>{open=true}} role="combobox" tabindex="0" aria-controls="command-root" aria-expanded="false"
             aria-label="Search work, projects, and articles">
            <Command.Input bind:value={searchContent} bind:ref={searchBox} bind:open={open} class="w-full" placeholder="Type a command or search..."/>
        </div>
        <Command.List class={open?"":"hidden"} onclick={onSelect}>
            <Command.Empty>No results found</Command.Empty>
            <Command.Group heading="Pages">
                <Command.Item value="experience work projects">
                    <span>Experience</span>
                    <Command.Shortcut>⌘P</Command.Shortcut>
                </Command.Item>
                <Command.Item value="technical blog writing thoughts opinions">
                    <span>Technical Blog</span>
                    <Command.Shortcut>⌘B</Command.Shortcut>
                </Command.Item>
            </Command.Group>
            <Command.Separator/>
            <Command.Group heading="Articles">
                <!-- TODO: Add links to articles -->
                <Command.Item value="articles">Link to each article</Command.Item>
            </Command.Group>
        </Command.List>
    </Command.Root>
</div>