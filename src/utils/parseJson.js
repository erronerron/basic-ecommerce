export const parseJson = (value) => {
  let parsed

  try {
    parsed = JSON.parse(value)
  } catch (error) {
    console.error(error)
  }

  return parsed
}
