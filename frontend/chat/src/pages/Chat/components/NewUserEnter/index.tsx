export function NewUserEnter({ username }: { username: string }) {
  return (
    <div className="rounded-2xl bg-gray-200 text-gray-500 mx-auto text-sm py-1 px-4 my-4">
      {username} entrou no chat
    </div>
  )
}
