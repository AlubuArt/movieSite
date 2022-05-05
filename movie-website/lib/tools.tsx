export const makeSlugFromId = (item) => {
  return item.id.substring(item.id.lastIndexOf('/') + 1);
};
