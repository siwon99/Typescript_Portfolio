import React, { useEffect } from 'react';

const Work: React.FC = () => {
  useEffect(() => {
    const workBtnContainer = document.querySelector('.work__categories') as HTMLElement;
    const projectContainer = document.querySelector('.work__projects') as HTMLElement;
    const projects = document.querySelectorAll('.project');

    const handleFilterClick: EventListener = (e) => {
      const target = e.target as HTMLElement;
      const filter = target.dataset.filter || (target.parentNode as HTMLElement)?.dataset.filter;
      if (filter == null) return;

      const active = document.querySelector('.category__btn.selected');
      if (active) active.classList.remove('selected');
      target.classList.add('selected');

      if (!projectContainer) return;

      projectContainer.classList.add('anim-out');
      setTimeout(() => {
        projects.forEach((project) => {
          if (filter === '*' || filter === (project as HTMLElement).dataset.type) {
            project.classList.remove('invisible');
          } else {
            project.classList.add('invisible');
          }
        });
        projectContainer.classList.remove('anim-out');
      }, 300);
    };

    workBtnContainer?.addEventListener('click', handleFilterClick);

    return () => {
      workBtnContainer?.removeEventListener('click', handleFilterClick);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="work">
      {/* Work 컴포넌트의 JSX 내용 */}
    </div>
  );
};

export default Work;