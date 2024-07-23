export default function getIconTags(Television) {
  let returnString = '';

  for (const option of Television.options) {
    if (option.applicable) {
      returnString += `[check-icon] ${option.name} `;
    }
    else {
      returnString += `[not-icon] ${option.name} `;
    }
  }

  return returnString;
}