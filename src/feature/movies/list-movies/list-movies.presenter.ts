export class ListMoviesPresenter {
  isValidSearchResult(title: string, query: string): boolean {
    if (title === undefined || query === undefined || query === null) {
      return true;
    } else {
      return title
        .toLowerCase()
        .trim()
        .includes(query.trim().toLowerCase() ?? '');
    }
  }
}
