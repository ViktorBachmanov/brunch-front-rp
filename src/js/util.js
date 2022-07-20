import { ref } from "vue";

export function fetchData(url) {
  const loading = ref(false);
  const data = ref(null);
  const error = ref(null);

  loading.value = true;
  data.value = error.value = null;

  fetch(import.meta.env.VITE_API_HOST + "/" + url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
    .finally(() => {
      loading.value = false;
    });

  return { loading, data, error };
}
