export function formatLabels(...labels: string[]) {
  // ?
  if (labels.length === 0) {
    return "No Labels";
  }
  else if (labels.length === 1) {
    return `Label: ${labels[0]}`;
  }
  else if (labels.length > 1) {
    return `Labels: ${labels.join(', ')}`
  }
}
