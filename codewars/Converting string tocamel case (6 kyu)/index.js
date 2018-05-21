export const toCamelCase = str =>
  str
    .split(/_|-/)
    .map((val, idx) => (!idx ? val : val[0].toUpperCase() + val.slice(1)))
    .join('');

/*
  Other solutions

  const toCamelCase = (str) => {
    const regExp=/[-_]\w/ig;
    return str.replace(regExp, (match) => match.charAt(1).toUpperCase());
  } 


  const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
*/
