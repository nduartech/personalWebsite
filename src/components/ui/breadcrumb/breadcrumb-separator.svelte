<script lang="ts">
	import ChevronRight from '~icons/line-md/chevron-right?raw';
	import type { WithElementRef } from "bits-ui";
	import type { HTMLLiAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLLiAttributes> = $props();
</script>

<li
	role="presentation"
	aria-hidden="true"
	class={cn("[&>svg]:size-3.5", className)}
	bind:this={ref}
	{...restProps}
>
	{#if children}
		{@render children?.()}
	{:else}
		<span>{@html ChevronRight}</span>
	{/if}
</li>
