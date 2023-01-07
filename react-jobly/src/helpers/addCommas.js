export default function addCommas(number) {
  const numArray = Array.from(number.toString());
  const decimalIdx = numArray.indexOf(".");

  const [intArray, decimalStr] = ((idx) => {
    if (idx !== -1) {
      return [
        numArray.slice(0, decimalIdx),
        numArray.slice(decimalIdx).join(""),
      ];
    }
    return [numArray, ""];
  })(decimalIdx);

  const result = [];
  let iter = 0;
  let comma = false;

  for (let i = intArray.length - 1; i >= 0; i--) {
    if (/\d/.test(intArray[i])) {
      iter++;
    }
    if (iter >= 3 && i > 0) {
      comma = true;
      iter = 0;
    }
    if (comma) {
      result.unshift(",", intArray[i]);
      comma = false;
    } else result.unshift(intArray[i]);
  }

  return result.join("") + decimalStr;
}
