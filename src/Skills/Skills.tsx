import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="section__container">
        <h1>Skills</h1>
        <h2>Skills & Attributes</h2>
        <p>
          다양한 프로그래밍 언어 및 프레임워크에 대한 광범위한 학습 경험을 보유하고 있습니다. <br />
          HTML, CSS, JavaScript를 비롯한 프론트엔드 기술과 React 프레임워크에 대한 프로젝트를 경험했습니다. <br />
          또한, 디자인 및 개발 작업에 사용되는 현업 툴들에 대한 숙련도를 갖추어 효과적으로 프로젝트를 수행할 자신있습니다. <br />
        </p>
        <div className="skillset">
          <div className="skillset__left">
            <h3 className="skillset__title"><b>Skills</b></h3>

            <Skill name="HTML" percentage={80} />
            <Skill name="CSS" percentage={80} />
            <Skill name="JavaScript" percentage={70} />
            <Skill name="React" percentage={60} />
            <Skill name="TypeScript" percentage={50} />
            <Skill name="Node.js" percentage={40} />
            <Skill name="Firebase" percentage={40} />
          </div>
          <div className="skillset__right">
            <div className="tools">
              <h3 className="skillset__title"><b>Tools</b></h3>
              <ul className="tools__list">
                <li><span>Visual Studio Code</span></li>
                <li><span>Adobe Photoshop</span></li>
                <li><span>Adobe Illustrator</span></li>
                <li><span>Github</span></li>
                <li><span>Figma</span></li>
                <li><span>Notion</span></li>
                <li><span>Slack</span></li>
              </ul>
            </div>
            <div className="etc">
              <h3 className="skillset__title"><b>Etc</b></h3>
              <ul className="etc__list">
                <li><span>아이디어 제안/기획</span></li>
                <li><span>협업 및 커뮤니케이션</span></li>
                <li><span>지속적인 학습</span></li>
                <li><span>반응형 웹 디자인에 대한 이해와 경험</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillProps {
  name: string;
  percentage: number;
}

const Skill: React.FC<SkillProps> = ({ name, percentage }) => {
  return (
    <div className="skill">
      <div className="skill__description">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__value" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Skills;