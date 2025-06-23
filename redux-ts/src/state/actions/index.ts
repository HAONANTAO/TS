interface SearchRepositoriesAction {
  type: 'search_repositories';
}
interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}


enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}
