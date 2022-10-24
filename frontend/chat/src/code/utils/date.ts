export const formatDate = (dateObj: Date) =>
  `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`
