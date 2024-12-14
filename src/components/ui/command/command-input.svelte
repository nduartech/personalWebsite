<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import Shortcut from "./command-shortcut.svelte";
	import Search from '~icons/line-md/search-twotone?raw';
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		value = $bindable(""),
		open = $bindable(false),
		...restProps
	}: CommandPrimitive.InputProps = $props();
</script>

<div class="flex items-center border w-full px-3" data-command-input-wrapper="">
	<span class="mr-2 shrink-0 opacity-50">{@html Search}</span>
	<CommandPrimitive.Input
		class={cn(
			"placeholder:text-muted-foreground flex h-10 rounded-md bg-transparent py-3 lg:text-base text-xs outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			className
		)}
		bind:ref
		bind:value
		{...restProps}
	/>
	<Shortcut>{open ? 'Esc' : '⌘K'}</Shortcut>
</div>
