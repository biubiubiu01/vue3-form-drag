/*
 * @Author: lzy
 * @Date: 2023-05-22 16:49:59
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-22 16:53:14
 * @FilePath: \vue3-form-drag\src\hooks\useNanoid.ts
 *
 */
import { customAlphabet } from "nanoid/non-secure";

export const useNanoid = () => {
    const nanoid = customAlphabet("1234567890abcdef", 10);

    return nanoid();
};
