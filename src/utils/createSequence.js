export const createSequence = () => {
  let start = 0;

  return {
    next() {
      return String(start++);
    },
  };
};
export default createSequence;
