import { c as create_ssr_component, o as onDestroy, b as spread, d as escape_object, f as createEventDispatcher, h as add_attribute, v as validate_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { c as checkIconState, g as generateIcon, u as userAccessState, S as SignedOut, a as SignedIn } from "../../chunks/functions.js";
import "firebase/auth";
import Layout from "./_layout.svelte.js";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { u as user } from "../../chunks/firebase.js";
import { g as goto } from "../../chunks/client.js";
const heroLoginImg = "/_app/immutable/assets/login-hero.9c9QU9ND.webp";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { auth } = $$props;
  let email = "";
  let password = "";
  if ($$props.auth === void 0 && $$bindings.auth && auth !== void 0) $$bindings.auth(auth);
  return `<div class="grid lg:grid-cols-2 grid-cols-1 lg:w-[80vw] lg:h-[80vh] h-full w-full lg:rounded-[20px] sm:py-8 sm:px-16 px-8 gap-16 bg-gray-100"><div class="my-auto lg:max-w-[500px]"><h1 class="font-semibold text-4xl mb-8" data-svelte-h="svelte-16560wh">Welcome back</h1> <form action="" class="flex flex-col gap-6"><div class="flex flex-col gap-3"><label class="relative flex" for="username"><input type="text" class="p-3 rounded-md text-sm w-full" placeholder="Username" id="username"${add_attribute("value", email, 0)}> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "solar:user-linear",
      width: "18",
      height: "18",
      style: "color: black",
      class: "absolute right-3 top-[50%] -translate-y-1/2"
    },
    {},
    {}
  )}</label> <label class="relative flex" for="myPassword"><input type="text" id="myPassword" class="p-3 rounded-md text-sm w-full" placeholder="Password"${add_attribute("value", password, 0)}> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fluent-mdl2:password-field",
      width: "18",
      height: "18",
      style: "color: black",
      class: "absolute right-3 top-[50%] -translate-y-1/2"
    },
    {},
    {}
  )} </label> <div class="flex justify-between"><label for="remember-me" class="text-xs flex gap-2 items-center text-gray-500" data-svelte-h="svelte-aei0qq"><input type="checkbox" name="rememberme" id="remember-me" class="w-4 h-4 accent-primaryColor-500">
            Remember Me</label>  <div class="hover:underline text-primaryColor-500 text-sm" data-svelte-h="svelte-l1ys5f">Don&#39;t have an account?</div></div></div> <button type="submit" class="border rounded-md bg-primaryColor-500 text-white px-4 py-2" data-svelte-h="svelte-1hudp5k">Sign in</button></form></div> <div class="w-full h-full relative overflow-hidden lg:flex hidden" data-svelte-h="svelte-18d69tr"> <img${add_attribute("src", heroLoginImg, 0)}${add_attribute("srcset", heroLoginImg, 0)} alt="Hero Login Image" class="object-contain rounded-2xl my-auto"></div> </div>`;
});
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { auth } = $$props;
  let email = "";
  let password = "";
  let confirmPassword = "";
  if ($$props.auth === void 0 && $$bindings.auth && auth !== void 0) $$bindings.auth(auth);
  return `<div class="grid lg:grid-cols-2 grid-cols-1 lg:w-[80vw] lg:h-[80vh] h-full w-full lg:rounded-[20px] sm:py-8 sm:px-16 px-8 gap-16 bg-gray-100"><div class="my-auto lg:max-w-[500px]"><h1 class="font-semibold text-4xl mb-8" data-svelte-h="svelte-in3wun">Register</h1> <form action="" class="flex flex-col gap-6"><div class="flex flex-col gap-3"><label class="relative flex" for="email"><input type="email" class="p-3 rounded-md text-sm w-full" placeholder="Email" id="email"${add_attribute("value", email, 0)}> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "solar:user-outline",
      width: "18",
      height: "18",
      style: "color: black;",
      class: "absolute right-3 top-[50%] -translate-y-1/2"
    },
    {},
    {}
  )}</label> <label class="relative flex" for="myPassword"><input type="text" id="myPassword" class="p-3 rounded-md text-sm w-full" placeholder="Password"${add_attribute("value", password, 0)}> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:password-outline",
      width: "18",
      height: "18",
      style: "color: black",
      class: "absolute right-3 top-[50%] -translate-y-1/2"
    },
    {},
    {}
  )} </label> <label class="relative flex" for="confirmPassword"><input type="text" id="confirmPassword" class="p-3 rounded-md text-sm w-full" placeholder="Confirm Your Password"${add_attribute("value", confirmPassword, 0)}> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fluent-mdl2:password-field",
      width: "18",
      height: "18",
      style: "color: black",
      class: "absolute right-3 top-[50%] -translate-y-1/2"
    },
    {},
    {}
  )} </label> <div class="flex justify-end"><button class="hover:underline text-primaryColor-500 text-sm" data-svelte-h="svelte-1avnuto">You already have an account?</button></div></div> <button type="submit" class="border rounded-md bg-primaryColor-500 text-white px-4 py-2" data-svelte-h="svelte-11lo12i">Sign up</button></form></div> <div class="w-full h-full relative overflow-hidden lg:flex hidden" data-svelte-h="svelte-18d69tr"> <img${add_attribute("src", heroLoginImg, 0)}${add_attribute("srcset", heroLoginImg, 0)} alt="Hero Login Image" class="object-contain rounded-2xl my-auto"></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $userAccessState, $$unsubscribe_userAccessState;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_userAccessState = subscribe(userAccessState, (value) => $userAccessState = value);
  {
    {
      if ($user?.uid) {
        goto();
      }
    }
  }
  $$unsubscribe_user();
  $$unsubscribe_userAccessState();
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="container w-screen h-screen m-auto flex justify-center items-center">${validate_component(SignedOut, "SignedOut").$$render($$result, {}, {}, {
        default: ({ auth }) => {
          return `${$userAccessState === "login" ? `${validate_component(Login, "Login").$$render($$result, { auth }, {}, {})}` : `${validate_component(Register, "Register").$$render($$result, { auth }, {}, {})}`}`;
        }
      })} ${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
        default: ({ auth }) => {
          return `it sign in ${escape(" ")} <button data-svelte-h="svelte-y0w5ad">Sign Out</button>`;
        }
      })}</main>`;
    }
  })}`;
});
export {
  Page as default
};
