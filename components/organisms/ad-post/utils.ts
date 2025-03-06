export const formatPrice = (value: string | undefined): string => {
  if (!value) return ''

  const numericValue = value.replace(/\D/g, '')
  if (!numericValue) return ''

  return '$ ' + Number(numericValue).toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}

export const restrictNonDigits = (event: KeyboardEvent) => {
  if (event.ctrlKey || event.altKey || event.key.length > 1) return

  if (!/[0-9]/.test(event.key)) {
    event.preventDefault()
  }
}

export const handleInputPrice = (
  event: Event,
  maxLength: number = 11
) => {
  const input = event.target as HTMLInputElement
  let rawValue = input.value.replace(/\D/g, '')

  if (rawValue.length > maxLength) {
    rawValue = rawValue.slice(0, maxLength)
  }

  rawValue = formatPrice(rawValue)
}

export const formatOnBlurPrice = (price: string) => {
  console.log(price)
  price = formatPrice(price)
}


export const handleInputArea = (
  event: Event
) => {
  const input = event.target as HTMLInputElement

  
  return input + ' ²'


}

export const formatArea = (value: string | number | undefined): string => {
  if (!value && value !== 0) return ''

  const stringValue = String(value)
  const numericValue = stringValue.replace(/\D/g, '')
  if (numericValue === '') return ''
  return `${numericValue}²`
}