import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowSize() {
  const width = ref(window.innerWidth)

  const updateSize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    updateSize()
    window.addEventListener('resize', updateSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
  })

  return { width }
}
