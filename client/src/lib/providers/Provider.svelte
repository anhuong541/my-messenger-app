<script>
  import { auth, firestore } from "$lib/utils/firebase";
  import { FirebaseApp } from "sveltefire";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import { browser } from "$app/environment";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<QueryClientProvider client={queryClient}>
  <FirebaseApp {auth} {firestore}>
    <slot />
  </FirebaseApp>
</QueryClientProvider>
