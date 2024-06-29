export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month: string = monthNames[date.getMonth()];
  const day: number = date.getDate();
  const year: number = date.getFullYear();

  let hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const isPM: boolean = hours >= 12;
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : minutes.toString();
  hours = hours % 12 || 12; // Convert to 12-hour format

  const formattedTime: string = `${hours}.${formattedMinutes}${isPM ? 'pm' : 'am'}`;

  return `${month} ${day}, ${year} ${formattedTime}`;
};

