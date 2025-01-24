<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import DocDownload from '~icons/line-md/file-download-filled?raw';
    import Linkedin from '~icons/line-md/linkedin?raw';
    import {type CarouselAPI} from "$lib/components/ui/carousel/context.js";
    import {Label} from "$lib/components/ui/label/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import {badgeVariants} from "$lib/components/ui/badge/index.js";

    let techs = [['css',], ['js',], ['ts',], ['java',], ['python','https://www.python.org/'], ['golang','https://go.dev/'], ['sql',], ['single-spa','https://single-spa.js.org/'], ['angular','https://angular.io/'], ['spring-boot','https://spring.io/projects/spring-boot'], ['spring-integration','https://spring.io/projects/spring-integration'], ['spring-cloud','https://spring.io/projects/spring-cloud'], ['spring-security','https://spring.io/projects/spring-security'], ['kafka','https://kafka.apache.org/'], ['mongo','https://www.mongodb.com/'], ['hazelcast','https://hazelcast.com/'], ['yavi','https://yavi.ik.am/']];

    interface xp {
        context: string;
        skillList: string[];
        title: string | undefined;
        blob: string | undefined;
    }

    let contents: xp[] = [
        {
            context: "Main Page",
            skillList: [],
            title: "As a Full Stack Software Engineer, I've had the opportunity to tackle some unique problems. Here I examine the methodologies and skills I've employed over the course of my career and personal projects."
        },
        {
            context: "While consulting for a client...",
            skillList: ["golang"],
            title: "FIX API",
            blob: "Developed a comprehensive API wrapper leveraging the QuickFixGo library, employed to interface with the IBM FIX Gateway, facilitating seamless execution of requests."
        },
        {
            context: "While working as a Full Stack Software Engineer at BNY Mellon as part of the SETUP Program...",
            skillList: ["css", "js", "ts", "java", "angular", "spring-boot", "kafka"],
            title: "Account Validation Services",
            blob: "During my initial tenure at the bank, I spearheaded the development of the backend infrastructure for a novel application facilitating ASV, AOA, and AOV requests to Early Warning Systems via an internal service. Under the mentorship of my manager and colleagues, I engineered the Spring Boot API from inception, while contributing to the Angular frontend as required. Our efforts culminated in the successful testing and deployment of the application within 7 months, swiftly garnering client adoption."
        },
        {
            context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
            skillList: ["css", "js", "ts", "java", "angular", "spring-boot", "spring-cloud", "mongo", "hazelcast"],
            title: "Treasury Services Online Banking: Early Days",
            blob: "Following the completion of AVS, I transitioned to a newly established team where I assumed responsibility for architecting the initial framework and structure of our APIs, including the establishment of our API gateway and implementation of auth mechanisms. Additionally, I played a pivotal role in formulating a substantial portion of the enduring business logic. Leveraging the foundational knowledge acquired from prior projects, I predominantly focused on backend development during this phase, albeit occasionally addressing frontend requirements as needed."
        },
        {
            context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
            skillList: ["java", "spring-boot"],
            title: "Treasury Services Online Banking: Challenges",
            blob: "As the product continued to mature, my role evolved to include more responsibility. During this phase, my tasks predominantly entailed resolving complex, often uncharted issues that demanded innovative solutions. One such challenge involved integrating RSA SecurId prompts for specific actions based on entitlements. Despite initial complexities, adept coordination with the RSA Service team facilitated access to a new REST API, streamlining subsequent implementation through the utilization of interceptors and thread-scoped classes."
        },
        {
            context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
            skillList: ["java", "spring-boot", "hazelcast"],
            title: "Treasury Services Online Banking: Challenges (cont.)",
            blob: `While the integration of RSA SecurId presented its own set of challenges, it merely scratched the surface of the complexities we encountered. Subsequently, I led the development of a demo API environment mirroring application functionalities, while remaining entirely detached from client data repositories. Collaborating with assigned interns, we expedited the development process, leveraging Hazelcast cache as a surrogate database for non-retrieval operations, thereby facilitating comprehensive product modeling for both existing and prospective clients.`
        },
        {
            context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
            skillList: ["java", "spring-boot", "spring-integration", "yavi", "mongo", "hazelcast"],
            title: "Treasury Services Online Banking: Challenges (cont.)",
            blob: "Among the array of challenges faced, the creation of a file import service emerged as notably difficult. This service required efficient processing of large data files containing complex payment information in diverse formats inherited from the legacy system. To tackle this challenge, I carefully designed a solution using the Spring Integration framework alongside the YAVI validation framework. This strategy entailed detailed, asynchronous validation of each line in the file, covering both formatting and business logic, before aggregating the outcomes. Importantly, this service plays a crucial role in facilitating the transition of clients from the old platform to TS Online Banking."
        },
        {
            context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
            skillList: ["java", "sql", "spring-boot", "spring-integration", "mongo", "hazelcast"],
            title: "Treasury Services Online Banking: Challenges (cont.)",
            blob: "If not for imports, implementing migration would have been easily my most troublesome task. Initially, our process relied on the periodic provision of client data extracts by the legacy system management and development team, and subsequent manual import of said files into our Mongo database. With that in mind, we leveraged the pre-existing imports service for our initial implementation. However, the focus subsequently shifted to autonomously obtaining these extracts, requiring direct connections to the legacy MSSQL and DB2 databases. This transition at first involved the creation and manipulation of intermediary files before the actual ingestion to our Mongo instance, an evidently inefficient approach. Therefore, I undertook a redevelopment initiative to bypass file generation entirely. Despite encountering obstacles, we successfully accomplished the task, once again easing client transition from the legacy platform to TS Online Banking."
        },
        {
            context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
            skillList: ["css", "js", "ts", "java", "angular", "spring-boot", "mongo", "hazelcast"],
            title: "Treasury Services Online Banking: Challenges (cont.)",
            blob: "Although not a direct personal challenge, our team faced the task of entirely revamping our application website to align with specifications devised by a newly established, specialized design team. To facilitate this transition, I made key contributions to our new search page, ensuring seamless functionality from end to end, encompassing both UI and API development. Subsequently, several features I pioneered were integrated as components within the framework of the new design system."
        },
        {
            context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
            skillList: ["css", "js", "ts", "angular"],
            title: "AI Hub",
            blob: "While concurrently contributing to Treasury Services, also assisted the AI Hub team with the development of a client-facing micro-frontend site using Angular and the single-spa library."
        },
    ];
    let index = $state(0);
    let api = $state<CarouselAPI>();
    $effect(() => {
        if (api) {
            index = api.selectedScrollSnap() + 1;
            api.on("select", () => {
                index = api!.selectedScrollSnap() + 1;
            });
            console.log(index);
        }
    });
</script>

<div class="flex flex-col w-full h-full justify-center items-center flow-root">
    <div class="flex flex-col w-full h-5/6 justify-center items-center">
        <div class="flex flex-col w-4/6 flow-root py-10">
            <Carousel.Root setApi={(emblaApi) => (api = emblaApi)}>
                <Carousel.Content>
                    {#each contents as content}
                        <Carousel.Item>
                            <Card.Root class="w-[95%] landscape:h-64 portrait:h-96 lg:landscape:h-96 mx-auto overflow-y-scroll no-scrollbar">
                                <Card.Header>
                                    <Card.Title>{content.title}</Card.Title>
                                    <Card.Description>{content.context}</Card.Description>
                                </Card.Header>
                                <Card.Content>
                                    {#if content.blob}
                                        <small>{content.blob}</small>
                                    {:else}
                                        <div class="w-full h-full flex flex-row md:flex-col justify-center items-center md:items-end top space-x-5 md:space-x-0 min-h-fit">
                                            <a href="https://www.linkedin.com/in/nathanduarte" target="_blank" rel="noopener noreferrer"
                                               class="cursor-pointer">
                                                <div class="flex flex-row justify-center items-center">
                                                    <span id="linkedin" class="p-1">{@html Linkedin}</span>
                                                    <Label for="linkedin" class="text-xs lg:text-sm font-medium">
                                                        LinkedIn</Label>
                                                </div>
                                            </a>
                                            <div class="flex flex-row justify-center items-center cursor-pointer"
                                                 on:click={() => fetch('https://raw.githubusercontent.com/nduartech/personalWebsite/refs/heads/pro/src/assets/resume.pdf').then(resp => resp.blob()).then(blob => {
                                                     const url = URL.createObjectURL(blob);
                                                     const a = document.createElement("a");
                                                     a.style.display = "none";
                                                     a.href = url;
                                                     a.download = "NathanDuarteResume.pdf";
                                                     document.body.appendChild(a);
                                                     a.click();
                                                     URL.revokeObjectURL(url);
                                                   }).catch(() => alert("Download failed"))}>
                                                <span id="resume" class="p-1">{@html DocDownload}</span>
                                                <Label for="resume" class="text-xs lg:text-sm font-medium">
                                                    Resume PDF</Label>
                                            </div>
                                        </div>
                                    {/if}
                                </Card.Content>
                            </Card.Root>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous/>
                <Carousel.Next/>
            </Carousel.Root>
        </div>
    </div>
    <div class="w-full h-1/6 bg-black dark:bg-white justify-center items-center py-3">
        <div class="flex flex-row w-11/12 mx-auto min-h-8 flex-wrap space-x-2 space-y-0 overflow-y-scroll no-scrollbar justify-center items-center">
            {#if (index > 1)}
                {#each techs as tech}
                    {#if contents[index-1].skillList.includes(tech[0])}
                        <a href={tech[1]?tech[1]:null} target="_blank" rel="noopener noreferrer"
                           class={badgeVariants({ variant: "secondary" })+" my-1"}>{tech[0]}</a>
                    {:else}
                    {/if}
                {/each}
            {/if}
        </div>

    </div>
</div>

