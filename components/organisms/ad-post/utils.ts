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
  if (event.ctrlKey || event.altKey || event.key.length > 1) return ''

  if (!/[0-9]/.test(event.key)) {
    event.preventDefault()
  }
}


export const formatPhoneNumber = (value: string | undefined): string => {
  if (!value) return '' 

  if (value.length > 10) return value || '' 
  value = value.replace(/\D/g, '')
  let formattedValue = value

  if (value.length > 6) {
    formattedValue = `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6)}`
  } else if (value.length > 3) {
    formattedValue = `${value.slice(0, 3)} ${value.slice(3)}`
  }
  return formattedValue
}