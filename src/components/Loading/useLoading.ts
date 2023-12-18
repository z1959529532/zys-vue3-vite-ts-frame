import {createLoading} from "@/components/Loading/createLoading";

export function useLoading(opt: object) {
    let props: object;
    let target: HTMLElement = document.body;
    if (Reflect.has(opt, 'target') || Reflect.has(opt, 'props')) {
        const options: any = opt;
        props = options.props || {};
        target = options.target || document.body;
    } else {
        props = opt;
    }

    const instance = createLoading(props, undefined, true);

    const open = () => {
        const t = unref(target);
        if (!t) return;
        instance.open(t);
    }

    const close = () => {
        instance.close();
    }

    const setTip = () => {

    }

    return [open, close, setTip];
}