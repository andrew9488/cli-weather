export const getArgs = (args) => {
  return args.slice(2).reduce((acc, el, index, array) => {
    const nextEl = array[index + 1];
    const flag = el.substring(1);
    if (el.charAt(0) === "-") {
      if (index === array.length - 1) {
        acc[flag] = true;
      } else if (nextEl.charAt(0) !== "-") {
        acc[flag] = nextEl;
      } else {
        acc[flag] = true;
      }
    }
    return acc;
  }, {});
};
