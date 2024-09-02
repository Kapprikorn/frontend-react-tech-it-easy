export default function getIconTags(television) {
  let returnString = '';

  if (!television.options) return returnString;

  for (const option of television.options) {
    if (option.applicable) {
      returnString += `[check-icon] ${option.name} `;
    }
    else {
      returnString += `[not-icon] ${option.name} `;
    }
  }

  return returnString;
}