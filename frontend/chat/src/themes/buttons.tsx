import { ReactNode } from 'react'

export function ButtonForm({
  children,
  type = 'submit',
}: {
  children: ReactNode | string
  type?: 'submit' | 'button'
}) {
  return (
    <button
      className="d-block text-white py-4 mx-auto button-form w-full"
      type={type}
    >
      {children}
    </button>
  )
}
