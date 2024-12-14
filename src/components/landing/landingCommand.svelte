<script lang="ts">
 import * as Command from "../ui/command";

 let open = $state(false);
</script>

<svelte:window onkeydown|preventDefault={(e: KeyboardEvent) => {
 if (e.key === "Escape") open = false;
 if (e.key === "k" && (e.metaKey||e.ctrlKey)) {
  e.preventDefault();
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
}} />
<div class="flex w-full py-5" onmouseleave={()=>open=false} onpointerleave={()=>open=false} onmouseenter={()=>open=true} onmousedown={()=>open=true} onpointerenter={()=>open=true} onpointerdown={()=>open=true}>
<Command.Root>
 <div class="flex flex-row w-full justify-between items-center"><Command.Input placeholder="Type a command or search..."/><Command.Shortcut>{open?'Esc':'⌘K'}</Command.Shortcut></div>
 <Command.List class={open?"":"hidden"}>
  <Command.Empty>No results found.</Command.Empty>
  <Command.Group heading="Pages">
   <Command.Item>
    <span>Work & Projects</span>
    <Command.Shortcut>⌘P</Command.Shortcut>
   </Command.Item>
   <Command.Item>
    <span>Technical Blog</span>
    <Command.Shortcut>⌘B</Command.Shortcut>
   </Command.Item>
  </Command.Group>
  <Command.Separator />
  <Command.Group heading="Articles">
   <!-- TODO: Add links to articles -->
   <Command.Item>Link to each article</Command.Item>
  </Command.Group>
 </Command.List>
</Command.Root>
</div>