export function averageScore(ratings: number[]) {
  if (ratings.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const rating of ratings) {
    sum += rating;
  }
  return sum / ratings.length;
}