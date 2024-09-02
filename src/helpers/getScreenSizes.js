export default function getScreenSizes(television) {
  let returnString = '';

  if (!television.availableSizes) return returnString;

  for (const [index, size] of television.availableSizes.entries()) {
    if (index !== 0) returnString += ' | ';
    returnString += `${size} inch (${Math.round(size * 2.54)} cm)`;
  }

  return returnString;
}