import { ref } from 'vue'

async function useFetch<T>(service: Function) {
  const data = ref<T>()
  const isError = ref(false)
  const isLoading = ref(false)

  async function fetchData() {
    isLoading.value = true
    
    try {
      const resp = await service()
      data.value = resp
      isError.value = false
    } catch (error) {
      data.value = undefined
      isError.value = true
    }
    isLoading.value = false
  }
  fetchData()

  return { data, isLoading, isError }
}

export { useFetch }
