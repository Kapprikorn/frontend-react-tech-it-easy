export default function getScreenSizes(Television) {
  let returnString = '';

  for (const [index, size] of Television.availableSizes.entries()) {
    if (index !== 0) returnString += ' | ';
    returnString += `${size} inch (${Math.round(size * 2.54)} cm)`;
  }

  return returnString;
}