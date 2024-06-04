export default function cleanSet(set, startString) {
  if (startString === '') return ('');
  let string = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      const reelement = element.replace(startString, '');
      if (reelement !== '') string += `${reelement}-`;
    }
  }
  if (string !== '') {
    string = string.slice(0, -1);
  }
  return string;
}
