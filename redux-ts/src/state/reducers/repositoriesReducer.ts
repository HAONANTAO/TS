interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action,
): RepositoriesState => {
  // if (action.type === 'search_repositories_success') {
  //   action.payload
  // }

  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
