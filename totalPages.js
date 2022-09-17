const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems == undefined) return undefined;
  return rowsPerPage == null || rowsPerPage == 0 ? 1 : Math.ceil(arrayItems.length/rowsPerPage);
}
module.exports = totalPages
