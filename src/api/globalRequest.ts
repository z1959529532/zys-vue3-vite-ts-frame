import request from "@/api/request";
import {HttpUrl} from "@/api/httpUrl";

/**
 * 获取用户
 * @param params
 * @returns {*}
 */
export const getUsers = (params: any) => {
    return request({
        url: HttpUrl.GET_USER,
        params,
    });
}
