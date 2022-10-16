export const formatDate = (dateObj: Date) =>
  `${dateObj.getDate().toString().padStart(2, '0')}/${dateObj
    .getMonth()
    .toString()
    .padStart(2, '0')}`
