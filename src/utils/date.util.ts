import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  format,
} from 'date-fns'

const getDifferentTime = function (firstDate: Date, secondDate: Date) {
  const hours = -differenceInHours(firstDate, secondDate)
  const minutes = -differenceInMinutes(firstDate, secondDate)
  const seconds = -differenceInSeconds(firstDate, secondDate)
  const days = -differenceInDays(firstDate, secondDate)
  const months = -differenceInMonths(firstDate, secondDate)

  const postAtStr =
    (seconds === 0 && 'now') ||
    (seconds > 60 && minutes <= 60 && `${minutes} minutes`) ||
    (minutes > 60 && hours <= 24 && `${hours} hours`) ||
    (hours > 24 && days <= 30 && `${days} days`) ||
    (days > 30 && months <= 12 && `${months} months`) ||
    (months > 12 && format(firstDate, 'MM/dd/yyyy'))

  return postAtStr
}

export default { getDifferentTime }
