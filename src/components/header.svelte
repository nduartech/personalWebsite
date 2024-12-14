<script lang="ts">
import me from '$lib/assets/me.png?url'
import ModeToggle from '$lib/components/darkMode.svelte'
import * as Avatar from '$lib/components/ui/avatar/index.js'
</script>

<div class="flex flex-row w-full justify-between p-10">
    <Avatar.Root>
      <Avatar.Image src={me} alt="@me" />
      <Avatar.Fallback>ND</Avatar.Fallback>
    </Avatar.Root>
    <ModeToggle />
</div>