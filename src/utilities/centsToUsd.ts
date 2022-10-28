const centsToUsd = (cents: number) => {
  if (cents >= 5) {
    let convert = cents
      .toString()
      .split('')
      .slice(0, -2)
      .join('')

    return Number(convert)
  }
}

export default centsToUsd