/* eslint no-underscore-dangle: ["error", { "allow": ["_loadAPI"] }] */

import Types from './actionTypes';
import api from '../helpers/helpers';

export function _loadAPI(apiData) {
  return { type: Types.LOAD_API, apiData };
}

export function loadAPI() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return dispatch =>
    new Promise((resolve) => {
      resolve(api.loadAPI());
    })
      .then((result) => {
        dispatch(_loadAPI(result));
      })
      .catch((error) => {
        throw error;
      });
}

export function updateLocation(location) {
  console.log(location);
  return {
    type: Types.UPDATE_LOCATION,
    location,
  };
}
