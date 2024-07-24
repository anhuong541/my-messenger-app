

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CgNdXpev.js","_app/immutable/chunks/scheduler.CC9PlWuQ.js","_app/immutable/chunks/index.BRIbHbnF.js","_app/immutable/chunks/Icon.wyHZoVaf.js","_app/immutable/chunks/firebase.CnE4wrMq.js","_app/immutable/chunks/index.DJAQfKpo.js","_app/immutable/chunks/entry.DKSIAX38.js"];
export const stylesheets = ["_app/immutable/assets/3.r4fqqqOH.css"];
export const fonts = [];
