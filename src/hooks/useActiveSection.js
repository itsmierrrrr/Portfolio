import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds?.[0] ?? 'home')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight * 0.4

      const closestSection = sections
        .map((section) => {
          const rect = section.getBoundingClientRect()
          return {
            id: section.id,
            distance: Math.abs(rect.top - viewportCenter),
          }
        })
        .sort((a, b) => a.distance - b.distance)[0]

      if (closestSection?.id) {
        setActiveSection(closestSection.id)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
          return
        }

        updateActiveSection()
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    updateActiveSection()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionIds])

  return activeSection
}
