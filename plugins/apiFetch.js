import Cookies from 'js-cookie';

export default defineNuxtPlugin(NuxtApp => {
  const runtimeConfig = useRuntimeConfig();

  NuxtApp.provide(
    'apiFetch',
    $fetch.create({
      baseURL: runtimeConfig.public.apiBase,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
    }),
  )
})
