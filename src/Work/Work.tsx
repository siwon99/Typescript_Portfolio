import React from 'react';

interface ProjectProps {
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  description: JSX.Element;
  dataType: string;
}

const Work: React.FC = () => {
  return (
    <section id="work" className="section">
      <div className="section__container">
        <h1>My Projects</h1>
        <h3>개발 공부를 통해 진행한 프로젝트와 간략한 설명을 작성했습니다.<br />각 프로젝트에 대한 자세한 내용은 해당 사진을 클릭하여 깃허브 페이지로 이동할 수 있습니다.</h3>
        <div className="work__categories">
          <button className="category__btn selected" data-filter="*">All<span className="category__count">11</span></button>
          <button className="category__btn" data-filter="Web">Web<span className="category__count">3</span></button>
          <button className="category__btn" data-filter="platform">Platform<span className="category__count">4</span></button>
          <button className="category__btn" data-filter="game">Game<span className="category__count">4</span></button>
        </div>
        <div className="work__projects">
          <Project
            href="https://github.com/siwon99/Portfolio"
            imgSrc="./projects/project_portfolio.png"
            alt="포트폴리오"
            title="포트포리오"
            description={
              <>
                React, TypeScript를 사용한 <br /> 개발자 포트폴리오 제작
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/ToDoDoesDid"
            imgSrc="./projects/project_Calendar.png"
            alt="일정 관리"
            title="일정 관리"
            description={
              <>
                React, Java, Spring Boot를 채택한 <br /> 팀프로젝트로, AWS를 사용해 배포 기능 <br /> 구현과 vite와 공통 컴포넌트를 통해 <br /> 성능 최적화를 한 일정관리 기능 구현
              </>
            }
            dataType="platform"
          />
          
          <Project
            href="https://github.com/siwon99/4cutalbum-front?tab=readme-ov-file"
            imgSrc="./projects/project_4CUS.png"
            alt="일정 프로젝트"
            title="인생네컷 앨범"
            description={
              <>
                React, TypeScript, Java, Spring Boot를 <br /> 채택한 팀프로젝트로, eslint와 Axios를 <br /> 활용하여 디버깅 시간을 단축 및 데이터 <br /> 호출을 효율적으로 처리해 디지털화한 <br /> 인생네컷 앨범
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/Disney-Plus-App-with-React"
            imgSrc="./projects/project_disney plus login.png"
            alt="디즈니 플러스 앱"
            title="Disney Plus App"
            description={
              <>
                React, Firebase, themoviedbAPI를 <br /> 사용하여 로그인 페이지 구현 및 <br /> 사용자에게 영화 추천 가능
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/Tic-Tac-Toe"
            imgSrc="./projects/project_Tic-Tac-Toe.png"
            alt="react로 만든 tic-tac-toe 게임"
            title="Tic-Tac-Toe 게임"
            description={
              <>
                React를 사용해 2인이 할 수 있는 <br /> Tic-Tac-Toe 게임 제작
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/Starbucks"
            imgSrc="./projects/project_starbucks.png"
            alt="스타벅스 홈페이지"
            title="StarBucks Website"
            description={
              <>
                HTML, CSS, JavaScript를 활용하여 <br /> 웹 사이트 및 로그인 페이지를 <br /> 구현하였으며, 메타데이터 프로토콜을 <br /> 적용하여 사이트를 공유할 때 사용자 <br /> 경험을 최적화
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/Apple-Web-Site"
            imgSrc="./projects/project_Apple Web.png"
            alt="애플 홈페이지"
            title="Apple Website"
            description={
              <>
                HTML, CSS, JavaScript를 활용하여 <br /> 애플 제품을 이미지, 동영상, 그리고 <br /> 애니메이션을 통해 효과적으로 홍보하는 <br /> 웹사이트를 제작
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/Find-the-Carrot"
            imgSrc="./projects/project_carrot game.png"
            alt="당근찾기 게임"
            title="당근 찾기 게임"
            description={
              <>
                HTML, CSS, JavaScript를 활용하여 <br /> 구현한 게임으로, 사용자는 제한된 시간 <br /> 동안 폭탄과 벌레를 피하면서 <br /> 당근을 찾는 게임
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/OverWatch"
            imgSrc="./projects/project_overwatch.png"
            alt="오버워치 홈페이지"
            title="OverWatch"
            description={
              <>
                HTML, CSS, JavaScript를 사용해 <br /> 캐릭터 선택 창 구현
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/Crocket-Game"
            imgSrc="./projects/project_croket.png"
            alt="크로켓 게임 홈페이지"
            title="크로켓 게임"
            description={
              <>
                HTML, CSS, JavaScript를 사용해 <br /> 크로켓 게임소개 페이지 구현
              </>
            }
            dataType="platform"
          />

          <Project
            href="https://github.com/siwon99/To-Do-List"
            imgSrc="./projects/project_To Do List.png"
            alt="할일 목록"
            title="To Do List"
            description={
              <>
                HTML, CSS, JavaScript를 사용해 <br /> 오늘 할 일 추가, 삭제 가능한 <br /> 페이지 만들기
              </>
            }
            dataType="platform"
          />
        </div>
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({ href, imgSrc, alt, title, description, dataType }) => {
  return (
    <a href={href} className="project" target="_blank" data-type={dataType}>
      <img src={imgSrc} alt={alt} className="project__img" />
      <div className="project__description">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </a>
  );
};

export default Work;
