interface FormState {
  description: string | undefined
  location: string | undefined
  price: string
  area: string
  rooms: string
  baths: string
  parking: string
  utiliyRooms: string
  phone: string
}

export const formatPrice = (value: string | undefined): string => {
  if (!value) return ''

  const numericValue = value.replace(/\D/g, '')
  if (!numericValue) return ''

  return Number(numericValue).toLocaleString('es-CO', {
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


export const handleInput = (
  event: Event,
  state: string,
  maxLength: number = 11
) => {
  const input = event.target as HTMLInputElement
  let rawValue = input.value.replace(/\D/g, '')

  if (rawValue.length > maxLength) {
    rawValue = rawValue.slice(0, maxLength)
  }

  state = formatPrice(rawValue)
}