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
