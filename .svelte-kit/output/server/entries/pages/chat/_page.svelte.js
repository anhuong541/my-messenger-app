import { c as create_ssr_component, a as subscribe, v as validate_component, h as add_attribute } from "../../../chunks/ssr.js";
import { t as tabMobileView, S as SignedOut, a as SignedIn } from "../../../chunks/functions.js";
import "dayjs";
import "firebase/auth";
import { u as user } from "../../../chunks/firebase.js";
import "../../../chunks/client.js";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $$unsubscribe_tabMobileView;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_tabMobileView = subscribe(tabMobileView, (value) => value);
  $$unsubscribe_user();
  $$unsubscribe_tabMobileView();
  return `${validate_component(SignedOut, "SignedOut").$$render($$result, {}, {}, {
    default: () => {
      return `you are signing out!!!`;
    }
  })} ${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
    default: () => {
      return `<main${add_attribute(
        "class",
        `h-screen w-screen grid grid-cols-12 gap-2 ${""}`,
        0
      )}>${`${`<div></div>`}`}</main>`;
    }
  })}`;
});
export {
  Page as default
};
