/** * @param {string} param * @return {param is ('apple' | 'orange')} * @satisfies {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  console.log({ param });
  return param === "apple" || param === "orange";
}
