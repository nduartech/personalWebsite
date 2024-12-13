<script lang="ts">
 import * as Command from "$lib/components/ui/command/index.js";

 let open = $state(false);
</script>

<div class="flex w-full py-5" onmouseleave={()=>open=false}>
<Command.Root>
 <Command.Input placeholder="Type a command or search..." onclick={()=>open=true} />
 <Command.List class={open?"":"hidden"}>
  <Command.Empty>No results found.</Command.Empty>
  <Command.Group heading="Suggestions">
   <Command.Item>Calendar</Command.Item>
   <Command.Item>Search Emoji</Command.Item>
   <Command.Item>Calculator</Command.Item>
  </Command.Group>
  <Command.Separator />
  <Command.Group heading="Settings">
   <Command.Item>Profile</Command.Item>
   <Command.Item>Billing</Command.Item>
   <Command.Item>Settings</Command.Item>
  </Command.Group>
 </Command.List>
</Command.Root>
</div>