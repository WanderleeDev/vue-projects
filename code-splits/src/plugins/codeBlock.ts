import { createVCodeBlock } from '@wdns/vue-code-block'

export const VCodeBlockInstance = createVCodeBlock({
  lang: 'typescript',
  theme: 'tokyo-night-dark',
  copyButton: true,
  browserWindow: true,
  highlightjs: true,
  persistentCopyButton: true,
})
