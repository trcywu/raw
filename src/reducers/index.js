import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { selectedUsersPage, usersByPage } from './users';
import { selectedReposPage, reposByPage } from './repos';
import auth from './auth';
import alerts from './alerts';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    auth,
    alerts,
    selectedUsersPage,
    usersByPage,
    selectedReposPage,
    reposByPage,
});
