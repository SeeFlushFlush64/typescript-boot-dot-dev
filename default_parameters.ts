export function estimateResponseTime(promptLength = 100, modelType = "text") {
  // ?
  const responseTime: Record<string, number> = {
    text: 2 + (0.01 * promptLength),
    image: 5 + (0.02 * promptLength),
    code: 3 + (0.05 * promptLength)
  }

  return responseTime[modelType] ? Math.round(responseTime[modelType]) : 0;
}
