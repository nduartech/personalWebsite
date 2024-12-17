<script lang="ts">
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		onShortcutClick = () => {},
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
        onShortcutClick?: () => void
    } = $props();
</script>

<span
	class={cn("text-muted-foreground ml-auto text-xs tracking-widest cursor-pointer", className)}
	on:click|stopPropagation={onShortcutClick}
	{...restProps}
	bind:this={ref}
>
	{@render children?.()}
</span>