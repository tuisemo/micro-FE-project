/**
 * 获取当前路由对应的顶部菜单path
 * @param route route
 */
export const getRouteBelongTopMenu = (route) => {
  if (route.belongTopMenu) {
    return route.belongTopMenu;
  }
  return route.parentPath ? (route.parentPath[0] || `/${route.path.split('/')[1]}`) : `/${route.path.split('/')[1]}`;
};
/**
 * 根据 hidden 判断是否有数据子集
 * @param children RoutesDataItem[]
 */
export const hasChildRoute = (children) => {
  const showChildren = children.filter((item) => {
    if (item.hidden) {
      return false;
    }
    return true;
  });
  if (showChildren.length > 0) {
    return true;
  }
  return false;
};
