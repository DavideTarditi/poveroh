import { FieldType } from '../types/fields'

export function getDefaultValue(fieldType: FieldType): number | string | boolean {
  switch (fieldType) {
    case FieldType.NUMBER:
      return 0
    case FieldType.BOOLEAN:
      return false
    default:
      return ''
  }
}

export function getPlaceholder(fieldType: FieldType): string {
  switch (fieldType) {
    case FieldType.EMAIL:
      return 'example@email.com'
    case FieldType.PASSWORD:
      return `${String.fromCharCode(8226).repeat(4)}`
    case FieldType.PHONE:
      return '+01 000 000 0000'
    default:
      return ''
  }
}

export function getDefaultErrorMessage(error: string): string {
  const defaultMessages: { [key: string]: string } = {
    required: 'Questo campo è obbligatorio',
    email: 'Inserisci un indirizzo email valido',
    minlength: 'L&apos;input è troppo corto',
    maxlength: 'L&apos;input è troppo lungo',
    pattern: 'Formato non valido'
  }
  return defaultMessages[error] || 'Invalid input'
}
