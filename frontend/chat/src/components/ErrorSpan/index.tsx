export function ErrorSpan({ message }: { message: string }) {
  return (
    <span className="w-full text-red-500 mx-auto text-xs h-3 mt-1 pl-2 span-error">
      {message}
    </span>
  )
}
