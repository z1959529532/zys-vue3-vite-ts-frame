// uno.config.ts
import {defineConfig, presetAttributify, presetUno} from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    shortcuts: [
        ['wh-full', 'w-full h-full'],
        ['zys-flex', 'flex'],
        ['zys-flex-column', 'flex flex-col'],
        ['zys-flex-between', 'flex justify-between'],
        ['zys-flex-center-v', 'flex flex-items-center'],
        ['zys-flex-center-h', 'flex flex-justify-center'],
        ['zys-flex-center', 'flex flex-justify-center'],
        ['zys-flex-end', 'flex flex-justify-end'],
        // h-[calc(100%-55px)]
    ],
    presets: [presetUno(), presetAttributify()]
})