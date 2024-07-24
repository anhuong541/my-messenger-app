import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "firebase/auth";
import "firebase/firestore";
import { s as setFirebaseContext, a as auth, f as firestore } from "../../chunks/firebase.js";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
const FirebaseApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firestore: firestore2 = void 0 } = $$props;
  let { rtdb = void 0 } = $$props;
  let { auth: auth2 = void 0 } = $$props;
  let { storage = void 0 } = $$props;
  let { analytics = void 0 } = $$props;
  setFirebaseContext({
    firestore: firestore2,
    rtdb,
    auth: auth2,
    storage,
    analytics
  });
  if ($$props.firestore === void 0 && $$bindings.firestore && firestore2 !== void 0) $$bindings.firestore(firestore2);
  if ($$props.rtdb === void 0 && $$bindings.rtdb && rtdb !== void 0) $$bindings.rtdb(rtdb);
  if ($$props.auth === void 0 && $$bindings.auth && auth2 !== void 0) $$bindings.auth(auth2);
  if ($$props.storage === void 0 && $$bindings.storage && storage !== void 0) $$bindings.storage(storage);
  if ($$props.analytics === void 0 && $$bindings.analytics && analytics !== void 0) $$bindings.analytics(analytics);
  return `${slots.default ? slots.default({}) : ``}`;
});
const css = {
  code: "html{background-color:#007070}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import \\"$lib/styles/app.css\\";\\n  import { FirebaseApp } from \\"sveltefire\\";\\n  import { auth, firestore } from \\"$lib/utils/firebase\\";\\n<\/script>\\n\\n<FirebaseApp {auth} {firestore}>\\n  <slot />\\n</FirebaseApp>\\n\\n<style>\\n  :global(html) {\\n    background-color: #007070;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAWU,IAAM,CACZ,gBAAgB,CAAE,OACpB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(FirebaseApp, "FirebaseApp").$$render($$result, { auth, firestore }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
