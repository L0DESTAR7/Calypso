

function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function getDayInitials(date: Date): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayIndex = date.getDay();
  return days[dayIndex];
}

export default function getDayDescription(stringDate: string): string {
  const date: Date = new Date(Date.parse(stringDate));
  if (isToday(date)) {
    return 'Today';
  } else {
    return getDayInitials(date);
  }
}

