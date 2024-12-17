<script lang="ts">
    import { Label } from "$lib/components/ui/label";
    import hljs from 'highlight.js/lib/core';
    import { onMount } from 'svelte';
    import { Button } from "$lib/components/ui/button/index.js";
    import LineMdClipboardArrowTwotone from '~icons/line-md/clipboard-arrow-twotone?raw';
    import LineMdClipboardCheckTwotone from '~icons/line-md/clipboard-check-twotone?raw';

    const languages = {
        javascript: () => import('highlight.js/lib/languages/javascript'),
        typescript: () => import('highlight.js/lib/languages/typescript'),
        go: () => import('highlight.js/lib/languages/go'),
        python: () => import('highlight.js/lib/languages/python'),
        java: () => import('highlight.js/lib/languages/java'),
        rust: () => import('highlight.js/lib/languages/rust'),
        shell: () => import('highlight.js/lib/languages/shell'),
        css: () => import('highlight.js/lib/languages/css'),
        html: () => import('highlight.js/lib/languages/xml')
    } as const;

    type SupportedLanguage = keyof typeof languages;

    interface Props {
        type: SupportedLanguage;
        label?: string;
        value: string;
        copy?: boolean;
        /** Optional text to copy instead of the displayed value */
        copyText?: string;
    }

    let { type, label, value, copy = true, copyText } = $props<Props>();

    let copied = $state(false);
    let timeoutId: ReturnType<typeof setTimeout>;
    const cid = Math.random().toString();

    async function initializeHighlighting() {
        if (!languages[type]) {
            console.warn(`Language '${type}' is not supported`);
            return;
        }

        const language = (await languages[type]()).default;
        hljs.registerLanguage(type, language);

        const codeElement = document.getElementById(`code${cid}`);
        if (codeElement) {
            hljs.highlightElement(codeElement);
        }
    }

    function copyCode() {
        const textToCopy = (copyText ?? value).trim();
        navigator.clipboard.writeText(textToCopy);
        copied = true;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            copied = false;
        }, 3000);
    }

    onMount(() => {
        initializeHighlighting();

        return () => {
            clearTimeout(timeoutId);
        };
    });
</script>

<div class="group w-full h-full flex flex-col items-center">
    <div class="relative w-fit max-w-10/12 dark:bg-gray-800 rounded h-fit px-5">
        {#if copy}
            <Button
                class="text-xs absolute top-0 right-0 opacity-0 group-hover:opacity-100
                           transition-opacity duration-200"
                onclick={copyCode}
                variant="secondary"
                aria-label="Copy code">
                {#if copied}
                    <span class="mr-2 h-4 w-4">{@html LineMdClipboardCheckTwotone}</span>
                    Copied!
                {:else}
                    <span class="w-5 h-5">{@html LineMdClipboardArrowTwotone}</span>
                    Copy
                {/if}
            </Button>
        {/if}
        {#if label}
            <Label for={`code${cid}`} class="text-xs muted">{label}</Label>
        {/if}
        <pre><code id={`code${cid}`}>{value}</code></pre>
    </div>
</div>