<script lang="ts">
import Moon from '~icons/line-md/moon-filled?raw'
import Sun from '~icons/line-md/sunny-filled?raw'

import { buttonVariants } from '$lib/components/ui/button/index.js'
import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
import { resetMode, setMode, mode } from 'mode-watcher'
import { onMount } from 'svelte'
onMount(() => {
  if ($mode === "light") {
    document.documentElement.setAttribute("data-theme", "github-light")
  } else {
    document.documentElement.setAttribute("data-theme", "tokyo-night")
  }
})
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={buttonVariants({ variant: "outline", size: "icon" })}
  >
	  <span class="block dark:hidden">{@html Sun}</span>
	  <span class="hidden dark:block">{@html Moon}</span>
    <span class="sr-only">Toggle theme</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onclick={() => {setMode("light");document.documentElement.setAttribute("data-theme","github-light");}}>Light</DropdownMenu.Item
    >
    <DropdownMenu.Item onclick={() => {setMode("dark");document.documentElement.setAttribute("data-theme","tokyo-night");}}>Dark</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => {resetMode();
      if ($mode === "light") {document.documentElement.setAttribute("data-theme","github-light");}else {document.documentElement.setAttribute("data-theme","tokyo-night");}}}>System</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>