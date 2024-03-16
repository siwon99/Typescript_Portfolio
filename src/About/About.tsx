import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section section__container">
      <h1>About me</h1>
      <p>
        공학 대학에 입학하여 로봇공학을 주전공으로 선택하여 C, Python, C++, C# 등 다양한 컴퓨터 언어를 습득했습니다.
        <br />
        로봇제어, 딥러닝, 기계학습, 전자회로, 역학, 비전, 운영체제, 임베디드 시스템, 인공지능 등의 교과목을 이수하여 풍부한 전공 지식을 쌓았습니다.
        <br />
        현재 프론트엔드 개발자를 목표로 HTML, CSS, JavaScript를 기반으로 React와 TypeScript, node.js, AWS 등 꾸준히 학습하고 있습니다.
        <br />
        개발자로서 필요한 역량과 협업을 위한 팀 프로젝트도 진행하고 있으며 개발 분야에서의 폭넓은 지식과 현업에서의 실무 경험을 함께 갖추어 전문적인 개발자로 성장하기 위해 노력하고 있습니다.
      </p>
      <div className="about__majors">

        {/* 전공1 */}
        <div className="major1">
          <div className="major__icon">
            <i className="fa-solid fa-robot"></i>
          </div>
          <h2 className="major__title">Major</h2>
          <div className="major__description">
            Human Intelligence
            <br /> & Robot Engineering
          </div>
        </div>

        {/* 전공2 */}
        <div className="major">
          <div className="major__icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <h2 className="major__title">Skill</h2>
          <div className="major__description">
            <div className="front-end">
              <h2>Front-end</h2>
              HTML, CSS, JavaScript,
              <br />
              React, TypeScript
            </div>
            <br />
            <div className="back-end">
              <h2>Back-end</h2>
              Node.js, Firebase, AWS, <br />
              Python, C, C++, Java, Matlab
            </div>
          </div>
        </div>

        {/* 전공3 */}
        <div className="major">
          <div className="major__icon">
            <i className="fa-solid fa-gear"></i>
          </div>
          <h2 className="major__title">Tool</h2>
          <div className="major__description">
            Git, VSCode, Pigma,<br /> Slack, Notion
          </div>
        </div>
      </div>

      <div className="about__school">
        <div className="school">
          <img width="55px" height="55px" src="./school/school_logo.png" alt="상명대학교" className="school__logo1" />
          <div className="school__description">
            <p className="school__name">상명대학교 공과대학 휴먼지능로봇공학과 졸업</p>
            <p className="school__period">2018.03 - 2022.02</p>
          </div>
        </div>
      </div>
      
      <div className="school">
        <img width="55px" height="55px" src="./school/english.png" alt="영어학원" className="school__logo2" />
        <div className="school__description">
          <p className="school__name">영어학원에서 학생을 대상으로 학습 자료 제작 및 배포</p>
          <p className="school__period">2022.01 - 2022.12</p>
        </div>
      </div>

      <div className="school">
        <img width="55px" height="55px" src="./school/sbs.png" alt="학원" className="school__logo3"/>
        <div className="school__description">
          <p className="school__name">SBS 아카데미 컴퓨터아트 학원_웹사이트 제작, 디자인 및 언어 수강</p>
          <p className="school__period">2022.12 - 2023.02</p>
        </div>
      </div>

      <div className="school">
        <img width="55px" height="55px" src="./school/calendar.png" alt="일정 관리 프로젝트" className="school__logo4" />
        <div className="school__description">
          <p className="school__name">일정 관리 프로젝트 [팀프로젝트]</p>
          <p className="school__period">2023.09 - 2023.11</p>
        </div>
      </div>

      <div className="school">
        <img width="55px" height="55px" src="./school/album.png" alt="인생네컷 프로젝트" className="school__logo5" />
        <div className="school__description">
          <p className="school__name">인생네컷 앨범 프로젝트 [팀프로젝트]</p>
          <p className="school__period">2023.10 - 2023.10</p>
        </div>
      </div>

      <div className="school">
        <img width="55px" height="55px" src="./school/KT.png" alt="에이블스쿨" className="school__logo6" />
        <div className="school__description">
          <p className="school__name">KT 에이블스쿨 5기 AI과정</p>
          <p className="school__period">2024.02 - 2024.08</p>
        </div>
      </div>

    </section>
  );
};

export default About;
