export function truncateText(maxChars = 100) {
  if (this.length <= maxChars) {
    return this;
  }
  const subString = this.substr(0, maxChars - 1);
  return subString.substr(0, subString.lastIndexOf(" ")) + "...";
}
