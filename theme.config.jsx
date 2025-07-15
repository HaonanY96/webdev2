import { useRouter } from 'next/router'

export default {
  logo: (
    <span>
      <span style={{ color: "#00e626" }}>&lt;/&gt;</span> Web Dev 2
    </span>
  ),
  project: {
    link: 'https://github.com/warsylewicz/webdev2'
  },
  docsRepositoryBase: 'https://github.com/warsylewicz/webdev2/tree/main',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  footer: {
    text: 'Programming is best learned by solving problems. If you want to learn more, create more problems.'
  },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s | Web Dev 2'
      }
    }
    return {
      title: 'Web Dev 2'
    }
  },
  head: null,
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
} 