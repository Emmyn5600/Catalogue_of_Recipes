import { CHANGE_FILTER } from '../actions';

const filter = (filter = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return filter;
  }
};

export default filter;
