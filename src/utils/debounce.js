/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * have elapsed since the last time the debounced function was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {boolean} immediate - Whether to invoke the function immediately
 * @returns {Function} - The debounced function
 */
export function debounce(func, wait = 100, immediate = false) {
  let timeout;
  
  return function executedFunction(...args) {
    const context = this;
    
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    clearTimeout(timeout);
    
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * 
 * @param {Function} func - The function to throttle
 * @param {number} wait - The number of milliseconds to throttle invocations to
 * @returns {Function} - The throttled function
 */
export function throttle(func, wait = 100) {
  let timeout = null;
  let lastArgs = null;
  let lastThis = null;
  let lastCallTime = 0;
  
  return function throttled(...args) {
    const now = Date.now();
    const context = this;
    
    if (now - lastCallTime >= wait) {
      func.apply(context, args);
      lastCallTime = now;
    } else {
      lastArgs = args;
      lastThis = context;
      
      if (!timeout) {
        timeout = setTimeout(() => {
          const invokeTime = Date.now();
          timeout = null;
          lastCallTime = invokeTime;
          func.apply(lastThis, lastArgs);
        }, wait - (now - lastCallTime));
      }
    }
  };
}
