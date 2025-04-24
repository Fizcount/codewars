function likes(names) {
  const a = names.length;
  if (a == 1) {
    return `${names} likes this`;
  }
  if (a == 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (a == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (a >= 3) {
    return `${names[0]}, ${names[1]} and ${a - 2} others like this`;
  }
  return "no one likes this";
}
