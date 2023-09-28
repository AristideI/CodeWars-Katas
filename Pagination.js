class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = [];

    // Partition collection into pages
    for (let i = 0; i < collection.length; i += itemsPerPage) {
      this.pages.push(collection.slice(i, i + itemsPerPage));
    }
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return this.pages.length;
  }

  pageItemCount(pageIndex) {
    if (pageIndex >= 0 && pageIndex < this.pages.length) {
      return this.pages[pageIndex].length;
    }
    return -1;
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
