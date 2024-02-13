import React, { useEffect, useState } from 'react';

const Work: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>('*');

  useEffect(() => {
    const workBtnContainer = document.querySelector('.work__categories');
    const projects = document.querySelectorAll('.project');

    const handleFilterClick: EventListener = (e) => {
      const target = e.target as HTMLElement;
      const filter = target.dataset.filter || (target.parentNode as HTMLElement)?.dataset.filter;
      if (filter == null) return;

      setSelectedFilter(filter);
      filterProjects(filter);
    };

    const filterProjects = (filter: string) => {
      projects.forEach((project) => {
        if (filter === '*' || filter === (project as HTMLElement).dataset.type) {
          project.classList.remove('invisible');
        } else {
          project.classList.add('invisible');
        }
      });
    };

    workBtnContainer?.addEventListener('click', handleFilterClick);

    return () => {
      workBtnContainer?.removeEventListener('click', handleFilterClick);
    };
  }, []);

  return (
    <div className="work">
      {/* Work 컴포넌트의 JSX 내용 */}
    </div>
  );
};

export default Work;
