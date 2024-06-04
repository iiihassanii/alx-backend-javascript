export default function hasValuesFromArray(set, array) {
  let value = true;
  for (const element of array) {
    if (!set.has(element)) {
      value = false;
      break;
    }
  }
  return value;
}
