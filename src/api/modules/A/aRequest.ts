import request from '@/api/request';
import {HttpAUrl} from '@/api/modules/A/httpAUrl'

interface Reply {
    code: number;
    success: boolean;
    data: any;
}

/**********************************************XX模块**********************************************/

/**
 * 登录验证
 * @param params
 */
export const userLogin = (params: any) => {
    return request({
        url: HttpAUrl.LOGIN,
        method: 'POST',
        data: params,
    });
};

/**
 * 获取用户
 * @param params
 * @returns {*}
 */
export const getUsers = (params: any) => {
    return request({
        url: HttpAUrl.GET_USER,
        params,
    });
}

export default {
    userLogin,
    getUsers,
}
