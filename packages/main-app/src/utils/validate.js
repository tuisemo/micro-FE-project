/**
 * 判断是否是外链
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path) => /^(https?:|mailto:|tel:)/.test(path);

export default {
  isExternal,
};
