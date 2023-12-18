// @ts-ignore
import {v4 as uuidv4} from 'uuid';

const _regEp = new RegExp('-', 'g');

/**
 * id工具类
 *
 * @author zys
 * @since 2021/4/29 8:38
 */
export class IdUtil {

    /**
     * 获取32位uuid
     * @example xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    static randomUUID () {
        return uuidv4();
    }

    /**
     * 获取32位uuid
     * @example xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     */
    static simpleUUID () {
        return IdUtil.randomUUID().replace(_regEp, 0);
    }
}

