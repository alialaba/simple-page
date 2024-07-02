function getCurrentDayOfWeek() {
    const currentDate = new Date();
    const dayOfWeekNumber = currentDate.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[dayOfWeekNumber];
  }
  
  
  const currentDay = document.querySelector(".current-day");
  currentDay.textContent = getCurrentDayOfWeek()
  

  function getCurrentUTCTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes();
    const seconds = currentDate.getUTCSeconds();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  

  const currentTimeUTC = document.querySelector(".current-time");
  currentTimeUTC.textContent = getCurrentUTCTime();
  