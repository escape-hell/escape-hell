import MainListItem from "./MainListItem";

type tutorialListType = {
  title: string;
  techStackIcon: TechIconImg[];
};

const tutorialList: tutorialListType[] = [
  {
    title: "기초공사",
    techStackIcon: [
      { src: "HTML5", alt: "HTML 5" },
      { src: "CSS3", alt: "CSS 3" },
      { src: "JavaScript", alt: "JavaScript" },
    ],
  },
  {
    title: "라이브러리",
    techStackIcon: [
      { src: "Angular", alt: "Garbage" },
      { src: "Vue", alt: "Vue.js" },
      { src: "React", alt: "React.js" },
    ],
  },
  {
    title: "라이브러리 심화",
    techStackIcon: [{ src: "React", alt: "React.js" }],
  },
  {
    title: "Style",
    techStackIcon: [
      { src: "Styled-Components", alt: "Styled-Components" },
      { src: "TailwindCSS", alt: "Tailwind CSS" },
    ],
  },
  {
    title: "상태 관리 라이브러리",
    techStackIcon: [
      { src: "Redux", alt: "Redux" },
      { src: "Recoil", alt: "Recoil" },
      { src: "React-Query", alt: "React-Query" },
      { src: "Zustand", alt: "Zustand" },
    ],
  },
  {
    title: "라우터",
    techStackIcon: [
      { src: "React-Router-Dom", alt: "React-Router-Dom" },
      { src: "TanStack-Router", alt: "TanStack-Router" },
    ],
  },
  {
    title: "타입스크립트",
    techStackIcon: [
      { src: "TypeScript", alt: "TypeScript" },
      { src: "React", alt: "React" },
    ],
  },
  {
    title: "Next와 서버사이드 렌더링",
    techStackIcon: [{ src: "Next", alt: "Next.js" }],
  },
  {
    title: "테스팅",
    techStackIcon: [
      { src: "Jest", alt: "Jest.js" },
      { src: "Testing-Library", alt: "Testing-Library" },
    ],
  },
  {
    title: "데이터 베이스",
    techStackIcon: [
      { src: "MongoDB", alt: "MongoDB" },
      { src: "MySQL", alt: "MySQL" },
      { src: "Graphql", alt: "Grapql" },
      { src: "Supabase", alt: "Supabase" },
    ],
  },
  {
    title: "클라우드",
    techStackIcon: [
      { src: "AWS", alt: "AWS" },
      { src: "Firebase", alt: "MySQL" },
      { src: "CloudFlare", alt: "CloudFlare" },
    ],
  },
  {
    title: "모듈 번들러",
    techStackIcon: [
      { src: "Webpack", alt: "Webpack" },
      { src: "Vite", alt: "Vite" },
      { src: "Turbopack", alt: "Turbopack" },
    ],
  },
  {
    title: "버전관리와 협업",
    techStackIcon: [
      { src: "Git", alt: "Git" },
      { src: "Github", alt: "Github" },
    ],
  },
];

const MainList = () => {
  return (
    <ul className="max-w-screen-xl my-0 mx-auto flex flex-col gap-10">
      {tutorialList.map(({ title, techStackIcon }, idx) => (
        <MainListItem
          key={idx}
          title={title}
          idx={idx}
          techStackIcons={techStackIcon}
        />
      ))}
    </ul>
  );
};

export default MainList;
