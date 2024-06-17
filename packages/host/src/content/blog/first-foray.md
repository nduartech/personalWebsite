---
title: "A First Foray Back Into Front-End Dev"
pubDate: 2024-06-16 09:00:00
description: "Why I Built This Site"
tags:
  [
    "Astro",
    "Qwik",
    "Solid",
    "Svelte",
    "Tailwind",
    "single-spa",
    "mitosis",
    "vite",
  ]
---

I began my career working as an unpaid intern at a startup in NYC when I was 17. It was the summer of 2015. Notably, my programming knowledge till that point came from building static sites painstakingly slowly from barebones HTML and CSS (I didn't really even know JS at the time) and learning some very basic Python and Java. The most I had accomplished in a personal project was using Bootstrap effectively.
<br></br>
It was enlightening then to be introduced to the world of Rails in that first job. I absolutely fell in love with the framework, where there was always a correct way to do something, almost everything you needed was either built-in or could be added easily, and was ridiculously readable and understandable. It was from Rails that I learned about MVC architecture. Later that year, when the Rails 5 beta was released, it was because of Rails that I learned a bit more JavaScript, when the Rails team first added Action Cable. It was also at that time that I created my first personal website using Jekyll, a Ruby based static site generator.
<br></br>
At the time, I was admittedly not a big fan of JS frameworks. In some ways, Rails left me a bit spoiled. Compared to the Rails ecosystem, there were just too many options in JS, and the DX was not one I particularly enjoyed. I found it messy, confusing, and at times very overwhelming.
<br></br>
Thus, over the past 9 years, I spent some time away from the front-end. I studied data science, AI, and NLP at college. My first paid internship was a data science position, building dashboards with Tableau. My second was a data engineering role, building Spark pipelines for Hadoop clusters. Both were at BNY Mellon, where I now work full time as a Full Stack SE. While I have written the occasional Angular component or directive, my responsibilities these days lie mainly on the back-end, writing Spring Boot-based microservices/APIs.
<br></br>
Recently, however, I got the chance to work on a different project at the office, building a UI for one of the AI Hub teams. Although still using Angular, I was introduced to a new technology as part of this effort: micro-frontends, via the [single-spa framework](https://single-spa.js.org/), which allowed various teams to independently develop their own pages and functionalities, while delivering one unified UX.
<br></br>
_(It's important to note that by 'new' I'm not referring to the existence of micro-frontends, which have been around for quite some time now, nor single-spa—it's releases on Github go back to 2016. Indeed, their adoption at a large bank is only proof of their age, but they were still novel to me.)_
<br></br>
This led to the realization that it had been nearly a decade since I read up on modern UI development. And so I set out to build this, my personal website. Specifically, I sought to utilize the latest in web development tools, in order to educate myself as I progressed.
<br></br>
As part of my reading, I came across an [excellent Medium post by Sergio A. Arevalo Soria](https://medium.com/@sergio.a.soria/setting-up-micro-frontends-with-astro-and-ecma-script-modules-137340d2c520). Inspired by that article, I [first](https://github.com/nduartech/monorepo-v1) wrote this website using Astro and SolidJS. While I enjoyed the experience, I did also want to try to utilize single-spa, so I then [rewrote the site in that instead](https://github.com/nduartech/nduartech.github.io/tree/single-spa). As part of this rewrite, I created [single-spa-solid](https://github.com/nduartech/single-spa-solid), a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for use with SolidJS.
<br></br>
However, after comparing the two, I ultimately chose [to return to Astro](https://github.com/nduartech/nduartech.github.io/tree/master), this time utilizing the Qwik integration. The DX was better, I didn't have to grapple as badly with FOUC issues, nor did I have to rethink the wheel when implementing modern practices. As a result, this site utilizes 4 frameworks, Astro + Qwik as a base, 2 SolidJS micro-frontends imported via an import-map, and a Svelte component. These frameworks were chosen for their respective innovations:
<br></br>

<ul class="space-y-2">
<li class="list-disc">SolidJS made Signals popular, a feature which eventually was picked up by many more widely-utilized frameworks <i>(Vue, Angular, Svelte, React, Qwik all have Signals in some form)</i>. And its direct manipulation of the DOM, rather than a VDOM implementation, makes it unique among web frameworks. Also, it's created and developed by Ryan Carniato, who continues to push web frameworks forward.</li>
<li class="list-disc">Qwik has a unique concept called resumability, and was created by Miško Hevery, who created the Angular framework as well. <i>(Interestingly, Angular announced they will be partnering with the Wiz framework team—which also uses resumability)</i>.</li>
<li class="list-disc">Astro is the base of the site, and its integrations power much of what I was able to do. It's very useful.</li>
<li class="list-disc">Lastly, I included Svelte because I'm excited for everything Svelte 5 (now in release candidate phase) is adding, including Runes (Signals for Svelte), though I still used the latest Svelte 4 release for this project.</li>
</ul>
<br></br>
Now, what happened to the guy who was avoiding JS? I'll admit I became a convert once I started learning, and really understanding how each of these frameworks worked. More importantly, I was fascinated by the (at least partially) convergent evolution of these separate frameworks.
<br></br>
The vast majority of frameworks have shown a willingness to adopt newer ideas based on community feedback, often by building their own, slightly different version of these ideas. This back-and-forth borrowing has led to a world where many frameworks share features that are quite similar, if implemented slightly differently in each case.
<br></br>
As a former Rails enthusiast, I love this! I think this is as close as we are going to get to Rails' 'convention over configuration' mantra in the JS world. If we can agree that a certain set of functionalities is ideal, and those features are now widespread enough that they can be found in most major frameworks, it creates a natural baseline for developers when thinking about application design, which at the same time is still able to leave a lot of flexibility of choice to a development team. Despite even more options existing now than before, the language and feature-sets shared by these frameworks make them each more fundamentally accessible, as the learning curve is significantly less than when they were disparate solutions.
<br></br>
And switching between them becomes less strenuous—as this site demonstrates, you can fully adopt different frameworks in each micro-frontend, meaning that finding the right tool to revitalize corporate infrastructure can be done via POCs that cause minimal disruption to the client experience. Furthermore, utilities like MitosisJS, which I played around a bit with while developing these pages, will only hasten this process, as converting components between frameworks becomes easier. Others, like TailwindCSS—which I used for most of the styling across this site—as well as Vite/Nitro, also aid in both speed of development and packaging/deployment.
<br></br>
Needless to say, I'm pretty psyched to see the future of web development and am grateful to all the amazing developers who didn't back down from JS, but instead brought it to where it is today. I didn't cover every framework—that would be too much—but I was able to get some valuable insight into the state of modern UI software engineering practices by exploring these 4.
