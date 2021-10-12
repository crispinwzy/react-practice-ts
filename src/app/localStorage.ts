export function getLocalState(key: string) {
  let preloadedState;
  preloadedState = localStorage.getItem(key);
  if (preloadedState) {
    preloadedState = JSON.parse(preloadedState);
  }
  return preloadedState;
}

export function setLocalState(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function clearLocalState() {
  localStorage.clear();
}
