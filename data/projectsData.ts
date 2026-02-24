interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Markdown Renderer with TOC & Antd Table',
    description: `在前端进行解析、渲染，并自动生成大纲（TOC）与表格组件。基于 React + Remark + Ant Design 实现，适用于文档展示。`,
    imgSrc: '/static/images/markdown.png',
    href: 'https://markdown-render-nine.vercel.app/',
  },
  {
    title: 'Webpack Module Federation in React',
    description: `A project demonstrating how to use Webpack Module Federation in a React application.`,
    imgSrc: '/static/images/webpack-module-federation.png',
    href: 'https://github.com/shiqiWang0/mf-example',
  },
  {
    title: 'web-socket in User Authentication',
    description: `local try websocket with Front and back ends in User Authentication`,
    href: 'https://github.com/shiqiWang0/web-socket',
  },
]

export default projectsData
