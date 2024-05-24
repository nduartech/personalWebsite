<script lang="ts">
  import './app.css';

  const navigateTo = (url: string, transition: string) => {
    setTimeout(function () {
      let link = document.createElement('a');
      link.href = "";
      link.onclick = () => {
          dispatchEvent(new CustomEvent('navigate', { detail: url }));
      }
      link.classList.add("hidden");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },1000);
      let hello = document.getElementById("hello");
      hello && hello.classList.add("animated","bounceOutDown");
      if(transition === "hinge") {
        let buttons = document.getElementsByClassName("navBtn");
        if (buttons && buttons.length > 0) {
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("animated", "hinge");
          }
        }
        let buttonsAlt = document.getElementsByClassName("altNavBtn");
        if (buttonsAlt && buttonsAlt.length > 0) {
          for (let i = 0; i < buttonsAlt.length; i++) {
            buttonsAlt[i].classList.add("alt-animated", "altHinge");
          }
        }
      }
  }
</script>

<div
  class="w-full min-h-fit lg:max-h-screen flex flex-col justify-center items-center">
  <div class="flex flex-col justify-start md:mt-20 lg:mt-32 sm:portrait:h-screen sm:landscape:h-fit md:landscape:h-screen w-full items-center">
    <div class="w-full px-5 flex flex-row justify-center items-center" >
      <div class="flex flex-col md:flex-row lg:flex-col w-full justify-center items-center space-x-5 my-5 lg:space-x-0 lg:space-y-2 text-center mt-20 md:mt-0" id="hello">
        <div class="image-container w-2/12 min-w-36 max-w-36 h-2/12 flex justify-center items-center">
          <img class="rounded-full object-fill p-2 shrink" id="me" src="https://nduartech.tiiny.site/dist/me.png" alt="Nathan" />
        </div>
        <p class="text-3xl md:text-4xl dark:text-regal-blue-100 text-regal-blue-50 my-2 text-center">Hi, I'm Nathan.</p>
      </div>
    </div>
    <div class="w-10/12 flex flex-row justify-center items-center py-5 bg-[rgba(_35,_188,_255,_0.1)] backdrop-filter backdrop-blur rounded-[10px] dark:bg-[rgba(_1,_45,_80,_0.8)] mb-5" >
      <div class="space-y-4 lg:space-y-0 lg:space-x-10 w-11/12 flex flex-col lg:flex-row justify-center items-center">
        <button on:click={()=>navigateTo("/software-engineer","hinge")} type="button"
                class="navBtn softwareEng bg-regal-blue-200
                hover:bg-yellow-600
                dark:bg-regal-blue-700
                dark:hover:bg-purple-900
                w-full py-2 px-2 text-sm font-medium text-regal-blue-700 hover:text-regal-blue-50 dark:text-regal-blue-50 border-[none] rounded-[45px] [box-shadow:0px_8px_15px_rgba(0,_0,_0,_0.2)] [transition:all_0.3s_ease-out_0.1s] cursor-pointer outline-[none] hover:[box-shadow:0px_4px_7px_rgba(202,_138,_4,_0.4)] dark:hover:[box-shadow:0px_4px_7px_rgba(88,_28,_135,_0.4)] hover:-translate-y-[-4px]">
          Full Stack Software Engineer
        </button>
        <button
          class="altNavBtn bg-regal-blue-200
                hover:bg-amber-600
                dark:bg-regal-blue-700
                dark:hover:bg-indigo-900
                w-full py-2 px-2 text-sm font-medium text-regal-blue-700 hover:text-regal-blue-50 dark:text-regal-blue-50 border-[none] rounded-[45px] [box-shadow:0px_8px_15px_rgba(0,_0,_0,_0.2)] [transition:all_0.3s_ease-out_0.1s] cursor-pointer outline-[none] hover:[box-shadow:0px_4px_7px_rgba(217,_119,_6,_0.4)] dark:hover:[box-shadow:0px_4px_7px_rgba(49,_46,_129,_0.4)] hover:-translate-y-[-4px]">
          Hobbies and Interests
        </button>
        <button
          class="navBtn bg-regal-blue-200
                hover:bg-orange-600
                dark:bg-regal-blue-700
                dark:hover:bg-fuchsia-900
                w-full py-2 px-2 text-sm font-medium text-regal-blue-700 hover:text-regal-blue-50 dark:text-regal-blue-50 border-[none] rounded-[45px] [box-shadow:0px_8px_15px_rgba(0,_0,_0,_0.2)] [transition:all_0.3s_ease-out_0.1s] cursor-pointer outline-[none] hover:[box-shadow:0px_4px_7px_rgba(234,_88,_12,_0.4)] dark:hover:[box-shadow:0px_4px_7px_rgba(112,_26,_117,_0.4)] hover:-translate-y-[-4px]">
          Contact Me
        </button>
      </div>
    </div>
  </div>
</div>