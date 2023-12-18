/**
 * url静态类装饰器
 *
 * @author zys
 * @since 2021/11/8 9:53
 */
import request from '@/api/request';

export function UrlPrefix(prefix?: string[]) {
    return <T extends object>(target: T) => new Proxy<T>(target, {
        get(t, k) {
            let prefixStr = '';
            if (prefix && prefix?.length > 0) {
                prefixStr += (prefix.join('/') + '/');
            }
            // @ts-ignore
            if (t[k]?.indexOf('ws://') >= 0) {
                // @ts-ignore
                return t[k].replace('ws://', request.defaults.baseURL.replace('http', 'ws'));
            }

            // @ts-ignore
            // return request.defaults.baseURL + prefixStr + t[k];
            return prefixStr + t[k];
        }
    });
}
