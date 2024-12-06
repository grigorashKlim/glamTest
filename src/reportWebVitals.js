const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export const saveEventToLocalStorage = (eventName, data) => {
  const events = JSON.parse(localStorage.getItem('analytics')) || [];
  events.push({ eventName, ...data });
  localStorage.setItem('analytics', JSON.stringify(events));
};


export const reportEvent = (eventName, data) => {
  saveEventToLocalStorage(eventName, data); // replace with some real analytics e.g., GA
  console.log(`Event: ${eventName}`, data);
};


export default reportWebVitals;
