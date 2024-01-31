export function helper() {
    return "Helper Function!"
  }

export function getCurrentTime() {
    const currentDate = new Date();

    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
  
  
    const formattedTime = currentDate.toLocaleTimeString('en-US', options);
  
    const milliseconds = currentDate.getMilliseconds();

    return (formattedTime+" millisecond-"+milliseconds);
}