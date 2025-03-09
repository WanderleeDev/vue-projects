import type { ProfileType } from '../schemas/Profile.schema'

export const NullProfile: ProfileType = Object.freeze({
  firstName: 'unknown',
  lastName: 'unknown',
  email: 'unknown@unknown.com',
  username: 'unknown',
  image:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgPGNsaXBQYXRoIGlkPSJjaXJjbGVWaWV3Ij4KICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0NDQ0NDQyIvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMTUiIHI9IjciIGZpbGw9IiNGRkZGRkYiIGNsaXAtcGF0aD0idXJsKCNjaXJjbGVWaWV3KSIvPgogIDxwYXRoIGQ9Ik0yMCAyMiBDMTIgMjUsIDggMzAsIDggMzggTDMyIDM4IEMzMiAzMCwgMjggMjUsIDIwIDIyIiBmaWxsPSIjRkZGRkZGIiBjbGlwLXBhdGg9InVybCgjY2lyY2xlVmlldykiLz4KPC9zdmc+',
  about: 'No description',
})
