export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8 = new Int8Array(buffer);
  if (position < 0 || position >= int8.length) {
    throw new Error('Position outside range');
  }
  int8[position] = value;
  return buffer;
}
