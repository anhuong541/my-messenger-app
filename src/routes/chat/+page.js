// @ts-ignore
import ChatFeeds from "./chatFeeds.svelte";

// @ts-ignore
export const load = async (loadEvent) => {
  console.log("it run!!!!");
  const notification = "End of season sales";
  const { data } = loadEvent;
  return {
    ...data,
    Component: ChatFeeds,
    notification,
  };
};

export const ssr = true;
export const csr = true;
