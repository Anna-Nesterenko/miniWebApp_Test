export const SET_RATES = "set/rates";
export const SET_SELECTED_RATE = "selected/rate";

export function setAllRates(payload) {
  return {
    type: SET_RATES,
    payload,
  };
}

export function setSelectedRate(payload) {
  return {
    type: SET_SELECTED_RATE,
    payload,
  };
}
