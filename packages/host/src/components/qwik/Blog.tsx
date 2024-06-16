import { component$ } from "@builder.io/qwik";
export const Blog = component$(()=>{
    return (
        <div id="bgBlog" class="h-screen w-screen dark:bg-[url('/blog.svg')] bg-[url('/blog-light.svg')] bg-cover bg-bottom min-h-screen min-w-screen overflow-y-hidden">
            <div class="h-full w-full flex flex-col justify-center items-center"><div class="flex flex-col justify-center items-center bg-[rgba(_35,_188,_255,_0.1)] backdrop-filter backdrop-blur rounded-[10px] dark:bg-[rgba(_1,_45,_80,_0.8)] p-5 w-[80vw] h-[85vh] lg:h-[85vh] min-h-fit transition"></div>
            </div>
        </div>
    );
});
