function compareTrue(boolean1, boolean2) {
  if (boolean1 === boolean2 && boolean2 === boolean1) {
    return true;   
}   
  return false;
};

compareTrue(true, false)