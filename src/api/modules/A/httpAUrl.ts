/**
 * HttpUrl常量
 *
 * @author zys
 * @since 2021/11/8 10:10
 */
import {UrlPrefix} from '@/api/url-prefix.decorator';

// @ts-ignore
@UrlPrefix(['a'])
export class HttpAUrl {

    /** 登录 */
    static readonly LOGIN = 'login';
    /** 获取用户 */
    static readonly GET_USER = 'getUsers';

}
