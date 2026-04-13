export function interpolateComment(
  id: number,
  comment: string,
  comments: (string | number)[],
) {
  for (const element of comments) {
    if (element === id) {
        comments[comments.indexOf(element)] = comment;
        break;
    }
  }
}