// Easing function for smooth scrolling
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

const smoothScroll = (
  startPosition: number,
  distance: number,
  duration: number,
  scrollFunction: (position: number) => void
) => {
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    // Calculate the timeProgress as a value between 0 and 1 based on the elapsed time and the scroll duration.
    const timeProgress = Math.min(elapsedTime / duration, 1);
    // Pass the timeProgress to the easeOutCubic function to get the eased progress value.
    const easedProgress = easeOutCubic(timeProgress);
    // Calculate the current scroll position based on the start position, distance, and the eased progress value.
    const scrollPosition = startPosition + distance * easedProgress;

    scrollFunction(scrollPosition);

    if (elapsedTime < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
};

export const smoothScrollTo = (scrollToPosition: number) => {
  /**
   * We calculate the necessary values for the smooth scrolling animation:
   * startPosition: The initial scroll position.
   * distance: The distance to scroll from the start position to the target position.
   */
  const startPosition = window.scrollY || document.documentElement.scrollTop;
  const distance = scrollToPosition - startPosition;

  smoothScroll(startPosition, distance, 800, (position) => {
    window.scrollTo(0, position);
  });
};

export const smoothScrollToElement = (element: HTMLElement, scrollToPosition: number) => {
  const startPosition = element.scrollTop;
  const distance = scrollToPosition - startPosition;

  smoothScroll(startPosition, distance, 800, (position) => {
    element.scrollTop = position;
  });
};