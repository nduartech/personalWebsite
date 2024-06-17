import { For, Show } from "solid-js";
import SkillButton from "./SkillButton";

function SkillBar(props: any) {
  return (
    <div class="rounded-t-none w-[60vw] min-h-[5rem] h-fit bg-gradient-to-br from-[rgba(_0,_163,_255,_0.6)] to-[rgba(_0,_102,_179,_0.9)] backdrop-filter backdrop-blur rounded-[10px] dark:from-[rgba(_15,_23,_42,_0.9)] dark:to-[rgba(_15,_23,_42,_1)]
        hidden md:hidden lg:flex xl:flex 2xl:flex flex-row justify-start items-center px-0 md:px-5 lg:px-10">
      <div class="flex flex-row flex-wrap w-12/12 h-11/12  py-2 justify-center items-center"
        // no-scrollbar scroll-smooth
        // " onWheel={(event)=> {
        //   event.preventDefault();
        //   event.currentTarget.scroll(scrollPosition + event.deltaX > 0 ? event.deltaX : event.deltaY, 0);
        // }}
      >
        <For each={props.skills}>
          {(item, index) => (
            <SkillButton label={item.label} skill={item.skill} category={item.category}
                         link={item.link}></SkillButton>
          )}
        </For>
      </div>
    </div>
  );
}

export default SkillBar;
