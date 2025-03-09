export function fakeApi<T>(data: T): Promise<T> {
  const random = Math.ceil(Math.random() * 2)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random % 2 === 0) {
        reject(new Error('Fake error to fake API'))
      }

      resolve(data)
    }, 3000)
  })
}
