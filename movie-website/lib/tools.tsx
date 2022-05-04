export const makeSlugFromId = (item) => {
  return item.id.substring(item.lastIndexOf('/') + 1);
};
