import { useEffect } from 'react'

/**
 * Observe elements on scroll and toggle a class when they intersect
 * @param className - The class name of the elements to observe
 * @param toggleClass - The class to add/remove when the element is in view
 */
export const useIntersectionObserver = (
  className: string,
  toggleClass: string
): void => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(toggleClass)
        } else {
          entry.target.classList.remove(toggleClass)
        }
      })
    })

    const elements = document.querySelectorAll(
      `.${className}`
    ) as NodeListOf<HTMLElement>

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el)) // Cleanup
    }
  }, [className, toggleClass]) // Effect depends on className and toggleClass
}
