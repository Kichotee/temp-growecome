<template>
    <!-- navbar configuration -->
    <div class="  margin  bg-white fixed w-[100vw] z-50 shadow-md text-white ">
        <div class="container  flex py-4 justify-between  font-sans  text-lg items-center w-full mx-auto">

            <LazyLogo />
            <div class="md:flex hidden  gap-5 basis-1/3 text-text-sub ">
                <div v-for="item in links" :key="item.name">
                    <NuxtLink active-class="font-bold text-text-blue" class="flex duration-200 hover:text-[#9333EA]" :to="item.link">
                        <div class="flex gap-2">
                            <i v-html="item.icon"></i>
                            {{ item.name }}
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="md:flex hidden border-2 border-brand-secondary  gap-4  justify-between rounded-md">
                <a href="http://app.growecom.io/">

                    <Button :level="1"
                        class="flex   gap-2  px-4 py-2 items-center rounded-md text-brand-secondary">
                        <p>
    
                            Sign in
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12.7101 17.7102L17.7101 12.7102C17.8011 12.6151 17.8725 12.5029 17.9201 12.3802C18.0201 12.1367 18.0201 11.8636 17.9201 11.6202C17.8725 11.4974 17.8011 11.3853 17.7101 11.2902L12.7101 6.29019C12.6169 6.19695 12.5062 6.12299 12.3844 6.07253C12.2625 6.02207 12.132 5.99609 12.0001 5.99609C11.7338 5.99609 11.4784 6.10188 11.2901 6.29019C11.1018 6.47849 10.996 6.73388 10.996 7.00019C10.996 7.26649 11.1018 7.52188 11.2901 7.71019L14.5901 11.0002H7.0001C6.73489 11.0002 6.48053 11.1055 6.293 11.2931C6.10546 11.4806 6.0001 11.735 6.0001 12.0002C6.0001 12.2654 6.10546 12.5198 6.293 12.7073C6.48053 12.8948 6.73489 13.0002 7.0001 13.0002H14.5901L11.2901 16.2902C11.1964 16.3831 11.122 16.4937 11.0712 16.6156C11.0204 16.7375 10.9943 16.8682 10.9943 17.0002C10.9943 17.1322 11.0204 17.2629 11.0712 17.3848C11.122 17.5066 11.1964 17.6172 11.2901 17.7102C11.3831 17.8039 11.4937 17.8783 11.6155 17.9291C11.7374 17.9798 11.8681 18.006 12.0001 18.006C12.1321 18.006 12.2628 17.9798 12.3847 17.9291C12.5065 17.8783 12.6171 17.8039 12.7101 17.7102Z"
                                    fill="#9333EA" />
                            </svg>
                        </p>
    
                    </Button>
                </a>
                <!-- <-->
            </div>
            <div ref="nav" @click="handleNavClick" class="navTrigger block md:hidden">
                <i></i><i></i><i></i>
            </div>
        </div>
    </div>
     <Transition>

         <div v-show="navState===true" class="flex flex-col gap-12 top-[5rem] rounded-[0_0_2.5rem_2.5rem] py-4 fixed w-full bg-white z-40 px-8 items-center md:hidden ">
             <div v-for="item in links" :key="item.name" class="">
                 <NuxtLink active-class="font-bold text-text-blue" class="flex hover:opacity-25"  :to="item.link">
                     <div class="grid grid-cols-2 gap-3 py-2 w-[6rem] ">
                         <i class="basis-1/3" v-html="item.icon"></i>
                        <p class="basis-2/4">
     
                            {{ item.name }}
                        </p> 
                     </div>
                 </NuxtLink>
             </div>
             <Button :level="1"
                         class="flex border   gap-2  px-4 py-2 items-center rounded-md border-brand-primary text-brand-secondary">
                         <p>
     
                             Sign in
                         </p>
                         <p>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path
                                     d="M12.7101 17.7102L17.7101 12.7102C17.8011 12.6151 17.8725 12.5029 17.9201 12.3802C18.0201 12.1367 18.0201 11.8636 17.9201 11.6202C17.8725 11.4974 17.8011 11.3853 17.7101 11.2902L12.7101 6.29019C12.6169 6.19695 12.5062 6.12299 12.3844 6.07253C12.2625 6.02207 12.132 5.99609 12.0001 5.99609C11.7338 5.99609 11.4784 6.10188 11.2901 6.29019C11.1018 6.47849 10.996 6.73388 10.996 7.00019C10.996 7.26649 11.1018 7.52188 11.2901 7.71019L14.5901 11.0002H7.0001C6.73489 11.0002 6.48053 11.1055 6.293 11.2931C6.10546 11.4806 6.0001 11.735 6.0001 12.0002C6.0001 12.2654 6.10546 12.5198 6.293 12.7073C6.48053 12.8948 6.73489 13.0002 7.0001 13.0002H14.5901L11.2901 16.2902C11.1964 16.3831 11.122 16.4937 11.0712 16.6156C11.0204 16.7375 10.9943 16.8682 10.9943 17.0002C10.9943 17.1322 11.0204 17.2629 11.0712 17.3848C11.122 17.5066 11.1964 17.6172 11.2901 17.7102C11.3831 17.8039 11.4937 17.8783 11.6155 17.9291C11.7374 17.9798 11.8681 18.006 12.0001 18.006C12.1321 18.006 12.2628 17.9798 12.3847 17.9291C12.5065 17.8783 12.6171 17.8039 12.7101 17.7102Z"
                                     fill="#9333EA" />
                             </svg>
                         </p>
     
                     </Button>
         </div>
     </Transition>
</template>

<script setup lang="ts">
const path = ref("")
const nav = ref<null | HTMLElement>(null)
onMounted(() => {
  
    path.value = window.location.href
})
const navState = ref(false)
const handleNavClick = () => {
    // toggle animation
    nav.value?.classList.contains("active") ?
        nav.value?.classList.remove("active") :
        nav.value?.classList.add("active")
// toggle nav
    navState.value = (!navState.value)
}
const links = [
    {
        name: "Homepage",
        link: "/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6405 3.6384C14.9218 3.35719 15.3033 3.19922 15.701 3.19922C16.0988 3.19922 16.4802 3.35719 16.7615 3.6384L27.2617 14.1385C27.4714 14.3483 27.6142 14.6156 27.672 14.9065C27.7299 15.1974 27.7002 15.499 27.5867 15.773C27.4732 16.0471 27.281 16.2813 27.0343 16.4462C26.7877 16.611 26.4978 16.699 26.2012 16.6991H24.7011V25.6992C24.7011 26.097 24.5431 26.4786 24.2618 
                26.7599C23.9805 27.0412 23.5989 27.1992 23.2011 27.1992H20.2011C19.8032 27.1992 19.4217 27.0412 19.1404 26.7599C18.8591 26.4786 18.7011 26.097 18.7011 25.6992V21.1991C18.7011 20.8013 18.543 20.4198 18.2617 20.1385C17.9804 19.8572 17.5989 19.6991 17.201 19.6991H14.201C13.8032 19.6991 13.4216 19.8572 13.1403 20.1385C12.859 20.4198 12.701 20.8013 12.701 21.1991V25.6992C12.701 26.097 12.5429 26.4786 12.2616 26.7599C11.9803 27.0412 11.5988 27.1992 11.201 27.1992H8.20091C7.80308 27.1992 7.42155 27.0412 7.14024 26.7599C6.85893 26.4786 6.70089 26.097 6.70089 25.6992V16.6991H5.20087C4.90424 16.699 4.61429 16.611 4.36767 16.4462C4.12106 16.2813 3.92884 16.0471 3.81534 15.773C3.70183 15.499 3.67213 15.1974 3.72998 14.9065C3.78783 14.6156 3.93064 14.3483 4.14036 14.1385L14.6405 3.6384Z" fill="#2E2067"/>
                </svg>
                `
    },
    {
        name: "Features",
        link: "/features"
        ,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M28.1775 9.4285C28.1405 9.30424 28.0723 9.19155 27.9793 9.1012C27.8864 9.01086 27.7718 8.94588 27.6465 8.9125C27.5211 8.87838 27.389 8.87788 27.2634 8.91106C27.1378 8.94424 27.0232 9.00992 26.931 9.1015L23.007 12.937L20.136 12.3625L19.5645 9.502L23.532 5.6245C23.6249 5.53394 23.6927 5.42083 23.7288 5.29623C23.7649 5.17162 23.7681 5.03978 23.738 4.91357C23.708 4.78737 23.6457 4.67113 23.5572 4.57621C23.4688 4.48129 23.3573 4.41092 23.2335 4.372C22.5124 4.13468 21.7591 4.00923 21 4C16.8645 4 13.5 7.3645 13.5 11.5C13.5 11.9845 13.557 12.475 13.677 13.015C12.834 13.7095 12.033 14.308 11.1255 14.986C9.828 15.955 8.358 17.0515 6.3525 18.745C5.77593 19.2418 5.31233 19.8562 4.99281 20.547C4.6733 21.2378 4.50527 21.9889 4.5 22.75C4.5 25.645 6.855 28 9.75 28C10.512 27.9976 11.2643 27.8285 11.9541 27.5046C12.6439 27.1807 13.2544 26.7098 13.743 26.125C15.0709 24.5656 16.3436 22.9601 17.559 21.3115C18.222 20.425 18.807 19.645 19.4835 18.8215C20.0235 18.943 20.5155 19 21 19C25.1355 19 28.5 15.6355 28.5 11.5C28.4931 10.7976 28.3844 10.0998 28.1775 9.4285ZM9.75 24.25C9.35218 24.25 8.97064 24.092 8.68934 23.8107C8.40804 23.5294 8.25 23.1478 8.25 22.75C8.25 22.3522 8.40804 21.9706 8.68934 21.6893C8.97064 21.408 9.35218 21.25 9.75 21.25C10.1478 21.25 10.5294 21.408 10.8107 21.6893C11.092 21.9706 11.25 22.3522 11.25 22.75C11.25 23.1478 11.092 23.5294 10.8107 23.8107C10.5294 24.092 10.1478 24.25 9.75 24.25Z" fill="#2E2067"/>
</svg>
`
    },
    {
        name: "Solution",
        link: "/solution"
        ,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M16.5 17.4348C17.941 17.4348 19.2454 16.8504 20.1897 15.9061C21.133 14.9628 21.7174 13.6584 21.7174 12.2174C21.7174 10.7763 21.133 9.472 20.1897 8.5287C19.2454 7.58435 17.941 7 16.5 7C15.059 7 13.7546 7.58435 12.8103 8.5287C11.867 9.472 11.2826 10.7763 11.2826 12.2174C11.2826 13.6584 11.867 14.9628 12.8103 15.9061C13.2942 16.3914 13.8694 16.7763 14.5026 17.0387C15.1358 17.301 15.8146 17.4356 16.5 17.4348ZM24.8478 18.4783C25.1906 18.4789 25.5301 18.4119 25.8469 18.2811C26.1638 18.1502 26.4516 17.9581 26.694 17.7157C26.9364 17.4733 27.1285 17.1855 27.2593 16.8687C27.3902 16.5519 27.4572 16.2123 27.4565 15.8696C27.4565 15.1496 27.1654 14.4974 26.6927 14.0247C26.4507 13.7821 26.1631 13.5897 25.8465 13.4586C25.5299 13.3276 25.1905 13.2603 24.8478 13.2609C24.5051 13.2602 24.1655 13.3272 23.8487 13.458C23.5319 13.5889 23.244 13.781 23.0017 14.0234C22.7593 14.2658 22.5672 14.5536 22.4363 14.8704C22.3054 15.1873 22.2384 15.5268 22.2391 15.8696C22.2386 16.2123 22.3057 16.5518 22.4366 16.8685C22.5675 17.1853 22.7596 17.4731 23.002 17.7154C23.2443 17.9578 23.5321 18.1499 23.8489 18.2808C24.1656 18.4117 24.5051 18.4788 24.8478 18.4783ZM24.8478 19.0939C23.459 19.0939 22.4144 19.5176 21.804 20.104C20.6405 19.1471 18.8009 18.4783 16.5 18.4783C14.1355 18.4783 12.3313 19.1544 11.1866 20.1103C10.5647 19.5207 9.5087 19.0939 8.15217 19.0939C5.86904 19.0939 4.5 20.2313 4.5 21.3708C4.5 21.9395 5.86904 22.5103 8.15217 22.5103C8.78243 22.5103 9.348 22.457 9.84574 22.3715L9.804 22.6532C9.804 23.6967 12.3146 24.7402 16.5 24.7402C20.4256 24.7402 23.196 23.6967 23.196 22.6532L23.1751 22.3871C23.6583 22.4633 24.2134 22.5103 24.8478 22.5103C26.988 22.5103 28.5 21.9395 28.5 21.3708C28.5 20.2313 27.0673 19.0939 24.8478 19.0939ZM8.15217 18.4783C8.87217 18.4783 9.52435 18.1871 9.99704 17.7144C10.2396 17.4724 10.432 17.1848 10.5631 16.8682C10.6942 16.5516 10.7614 16.2122 10.7609 15.8696C10.7616 15.5268 10.6946 15.1873 10.5637 14.8704C10.4328 14.5536 10.2407 14.2658 9.99833 14.0234C9.75596 13.781 9.4681 13.5889 9.15129 13.458C8.83448 13.3272 8.49495 13.2602 8.15217 13.2609C7.80944 13.2603 7.46997 13.3274 7.15322 13.4583C6.83647 13.5892 6.54867 13.7814 6.30632 14.0237C6.06397 14.2661 5.87184 14.5539 5.74093 14.8706C5.61003 15.1874 5.54293 15.5268 5.54348 15.8696C5.54279 16.2123 5.6098 16.5519 5.74065 16.8687C5.87151 17.1855 6.06364 17.4733 6.30601 17.7157C6.54839 17.9581 6.83624 18.1502 7.15306 18.2811C7.46987 18.4119 7.8094 18.4789 8.15217 18.4783Z" fill="#2E2067"/>
</svg>`

    },
//     {
//         name: "Pricing",
//         link: ""
//         ,
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
//   <path d="M8.7 10C8.22261 10 7.76477 9.81036 7.42721 9.47279C7.08964 9.13523 6.9 8.67739 6.9 8.2C6.9 7.72261 7.08964 7.26477 7.42721 6.92721C7.76477 6.58964 8.22261 6.4 8.7 6.4C9.17739 6.4 9.63523 6.58964 9.97279 6.92721C10.3104 7.26477 10.5 7.72261 10.5 8.2C10.5 8.67739 10.3104 9.13523 9.97279 9.47279C9.63523 9.81036 9.17739 10 8.7 10ZM27.792 15.496L16.992 4.696C16.56 4.264 15.96 4 15.3 4H6.9C5.568 4 4.5 5.068 4.5 6.4V14.8C4.5 15.46 4.764 16.06 5.208 16.492L15.996 27.292C16.44 27.724 17.04 28 17.7 28C18.36 28 18.96 27.724 19.392 27.292L27.792 18.892C28.236 18.46 28.5 17.86 28.5 17.2C28.5 16.528 28.224 15.928 27.792 15.496Z" fill="#2E2067"/>
// </svg> `
//     },
    {
        name: "Blog",
        link: "/blog"
        ,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <rect x="0.5" width="24" height="24" rx="5" fill="#2E2067"/>
  <path d="M6.5 5.4375C6.5 5.18886 6.59877 4.9504 6.77459 4.77459C6.9504 4.59877 7.18886 4.5 7.4375 4.5H18.6875C18.9361 4.5 19.1746 4.59877 19.3504 4.77459C19.5262 4.9504 19.625 5.18886 19.625 5.4375V7.3125C19.625 7.56114 19.5262 7.7996 19.3504 7.97541C19.1746 8.15123 18.9361 8.25 18.6875 8.25C18.4389 8.25 18.2004 8.15123 18.0246 7.97541C17.8488 7.7996 17.75 7.56114 17.75 7.3125V6.375H14V17.625H15.5625C15.8111 17.625 16.0496 17.7238 16.2254 17.8996C16.4012 18.0754 16.5 18.3139 16.5 18.5625C16.5 18.8111 16.4012 19.0496 16.2254 19.2254C16.0496 19.4012 15.8111 19.5 15.5625 19.5H10.5625C10.3139 19.5 10.0754 19.4012 9.89959 19.2254C9.72377 19.0496 9.625 18.8111 9.625 18.5625C9.625 18.3139 9.72377 18.0754 9.89959 17.8996C10.0754 17.7238 10.3139 17.625 10.5625 17.625H12.125V6.375H8.375V7.3125C8.375 7.56114 8.27623 7.7996 8.10041 7.97541C7.9246 8.15123 7.68614 8.25 7.4375 8.25C7.18886 8.25 6.9504 8.15123 6.77459 7.97541C6.59877 7.7996 6.5 7.56114 6.5 7.3125V5.4375Z" fill="white"/>
</svg>
 `
    },
]



</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.navTrigger {
    cursor: pointer;
    width: 30px;
    height: 25px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}


.navTrigger.active i:nth-child(1) {
    -webkit-animation: inT 0.8s forwards;
    animation: inT 0.8s forwards;
}

.navTrigger.active i:nth-child(2) {
    -webkit-animation: inM 0.8s forwards;
    animation: inM 0.8s forwards;
}

.navTrigger.active i:nth-child(3) {
    -webkit-animation: inBtm 0.8s forwards;
    animation: inBtm 0.8s forwards;
}

.navTrigger i {
    background-color: #ddd;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
}

i:nth-child(1) {
    -webkit-animation: outT 0.8s backwards;
    animation: outT 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

i:nth-child(2) {
    margin: 5px 0;
    -webkit-animation: outM 0.8s backwards;
    animation: outM 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

i:nth-child(3) {
    -webkit-animation: outBtm 0.8s backwards;
    animation: outBtm 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}






@-webkit-keyframes inM {
    50% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(45deg);
    }
}

@keyframes inM {
    50% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(45deg);
    }
}

@-webkit-keyframes outM {
    50% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(45deg);
    }
}

@keyframes outM {
    50% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(45deg);
    }
}

@-webkit-keyframes inT {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }

    50% {
        -webkit-transform: translateY(9px) rotate(0deg);
    }

    100% {
        -webkit-transform: translateY(9px) rotate(135deg);
    }
}

@keyframes inT {
    0% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(9px) rotate(0deg);
    }

    100% {
        transform: translateY(9px) rotate(135deg);
    }
}

@-webkit-keyframes outT {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }

    50% {
        -webkit-transform: translateY(9px) rotate(0deg);
    }

    100% {
        -webkit-transform: translateY(9px) rotate(135deg);
    }
}

@keyframes outT {
    0% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(9px) rotate(0deg);
    }

    100% {
        transform: translateY(9px) rotate(135deg);
    }
}

@-webkit-keyframes inBtm {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }

    50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
    }

    100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
    }
}

@keyframes inBtm {
    0% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-9px) rotate(0deg);
    }

    100% {
        transform: translateY(-9px) rotate(135deg);
    }
}

@-webkit-keyframes outBtm {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }

    50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
    }

    100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
    }
}

@keyframes outBtm {
    0% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-9px) rotate(0deg);
    }

    100% {
        transform: translateY(-9px) rotate(135deg);
    }
}
</style>