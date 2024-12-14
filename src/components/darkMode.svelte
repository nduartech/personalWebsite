<script lang="ts">
import Moon from '~icons/line-md/moon-filled?raw'
import Sun from '~icons/line-md/sunny-filled?raw'

import { buttonVariants } from '$lib/components/ui/button/index.js'
import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
import { resetMode, setMode } from 'mode-watcher'
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
    <DropdownMenu.Item onclick={() => setMode("light")}>Light</DropdownMenu.Item
    >
    <DropdownMenu.Item onclick={() => setMode("dark")}>Dark</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>