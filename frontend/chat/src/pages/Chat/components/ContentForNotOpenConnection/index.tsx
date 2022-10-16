import { X } from 'phosphor-react'
import { Loading } from '../../../../components/Loading'

export function ContentForNotOpenConnection({
  connectionStatus,
}: {
  connectionStatus: string
}) {
  return connectionStatus === 'Connecting' ? (
    <Loading />
  ) : (
    <div className="grow flex flex-col items-center justify-center text-red-500">
      <div className="flex flex-col items-center text-center">
        <X weight="bold" className="w-12 h-12" />
        <strong>
          Não foi possível fazer
          <br /> a conexão
        </strong>
      </div>
    </div>
  )
}
