export default function setFromArray(array) {
  const set1 = new Set();
  array.forEach((element) => {
    set1.add(element);
  });
  return set1;
}
