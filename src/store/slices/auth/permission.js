// action types
const PERMISSION_ADMIN = 'permission/administrator';
const PERMISSION_MEMBER = 'permission/member';

// action creators
export const setAdministrator = (authUser) => ({
  type: PERMISSION_ADMIN,
  payload: authUser.uid,
});

export const setMember = (authUser) => ({
  type: PERMISSION_MEMBER,
  payload: authUser.uid,
});

// inital state
const initialState = 'member';

// reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case PERMISSION_ADMIN:
      return 'administrator';
    case PERMISSION_MEMBER:
    default:
      return initialState;
  }
}
