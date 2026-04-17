export const delay = async () => {
  const time = Math.random() * 600 + 200
  return new Promise((res) => setTimeout(res, time))
}