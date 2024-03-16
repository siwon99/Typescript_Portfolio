import React, { useEffect, useState, useMemo, useCallback } from 'react';

const YourComponent: React.FC = () => {
  const [selectedNavIndex, setSelectedNavIndex] = useState<number>(0);
  const [selectedNavItem, setSelectedNavItem] = useState<Element | null>(null);

  const sectionIds: string[] = useMemo(() => ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'], []);
  const sections: (Element | null)[] = sectionIds.map((id) => document.querySelector(id));
  const navItems: (Element | null)[] = sectionIds.map((id) => document.querySelector(`[data-link="${id}"]`));

  const selectNavItem = useCallback((selected: Element | null) => {
    if (selectedNavItem) {
      selectedNavItem.classList.remove('active');
    }
    if (selected) {
      selected.classList.add('active');
    }
    setSelectedNavItem(selected);
  }, [selectedNavItem]);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const index = sectionIds.indexOf(`#${entry.target.id}`);
          if (entry.boundingClientRect.y < 0) {
            setSelectedNavIndex(index + 1);
          } else {
            setSelectedNavIndex(index - 1);
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    const handleWheel = () => {
      if (window.scrollY === 0) {
        setSelectedNavIndex(0);
      } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
        setSelectedNavIndex(navItems.length - 1);
      }
      selectNavItem(navItems[selectedNavIndex]);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      observer.disconnect();
    };
  }, [navItems, sections, sectionIds, selectedNavIndex, selectNavItem]);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default YourComponent;
