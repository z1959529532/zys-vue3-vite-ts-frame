import {createLoading} from "@/components/Loading/createLoading";

/**
 * loading指令
 *
 * author zys
 */
const loadingDirective = {
    mounted(el, binding) {
        el.style.position = 'relative';
        const tip = el.getAttribute('loadingTip');
        const background = el.getAttribute('loadingBackground');
        const instance = createLoading(
            {
                tip,
                background,
                loading: !!binding.value,
                absolute: true,
            },
            el
        );
        el.instance = instance;
    },
    updated(el, binding) {
        const instance = el.instance;
        if (!instance) return;
        if (binding.oldValue !== binding.value) {
            instance.setLoading?.(binding.value && !instance.loading);
        }
    },
    unmounted(el) {
        el?.instance?.close();
    }
}

export default loadingDirective