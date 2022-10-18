import { formatDate } from '../../../../code/utils/date'

export function DateInfo({ dateObj }: { dateObj: Date }) {
  return (
    <div className="rounded-2xl bg-gray-200 text-gray-500 mx-auto text-sm py-1 px-4 my-4">
      {formatDate(dateObj)}
    </div>
  )
}
