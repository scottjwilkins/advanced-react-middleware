import {
  FETCH_USERS
} from './types';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      {name: 'Dan'},
      {name: 'Fred'},
      {name: 'Rita'},
    ]
  }
}
