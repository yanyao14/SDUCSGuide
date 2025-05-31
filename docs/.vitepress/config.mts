import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config

export default  defineConfig({
  base: '/SDUCSGuide_test/',
  title: "SDUCS 本科指南",
  head: [
    ['link', { rel: 'icon', href: '/SDUicon.png' }]   // 这里写你的图标文件名
    // 你也可以用 '/favicon.ico' 或 '/SDUicon.png'，但路径一定要以 / 开头
  ],
  themeConfig: {
    logo: '/SDUicon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/README' },
      { text: '分享经历', link: '/join' },
      { text: 'GitHub', link: 'https://github.com/你的仓库', target: '_blank' }
    ],
    outline: {
      level: [2, 4],         // 显示 ##、###、#### 标题
      label: 'Outline'  // 右侧目录标题
    },
    sidebar: [
      {
        text: "前言",
        link: "/README"
      },
      {
        text: "生存攻略",
        link: "/sheng-cun-gong-le/README",
        collapsed: true,
        items: [
          { text: "🎨 绘图", link: "/sheng-cun-gong-le/hui-tu" },
          { text: "🧠 AI 使用指南", link: "/sheng-cun-gong-le/ai-shi-yong-zhi-nan" },
          { text: "🤯 学堂指南", link: "/sheng-cun-gong-le/xue-tang-zhi-nan" },
          {
            text: "🥳 课余生活指南",
            collapsed: true,
            items: [
              { text: "🥘 夜宵指北", link: "/sheng-cun-gong-le/ke-yu-sheng-huo-zhi-nan/ye-xiao-zhi-bei" }
            ]
          },
          {
            text: "转专业指南",
            link: "/sheng-cun-gong-le/zhuan-zhuan-ye-zhi-nan/README",
            collapsed: true,
            items: [
              { text: "土木->计科转专业指南", link: "/sheng-cun-gong-le/zhuan-zhuan-ye-zhi-nan/tu-mu-ji-ke-zhuan-zhuan-ye-zhi-nan" }
            ]
          },
          {
            text: "CS自学指南",
            link: "/sheng-cun-gong-le/cs-zi-xue-zhi-nan/README",
            collapsed: true,
            items: [
              { text: "操作系统自学心得", link: "/sheng-cun-gong-le/cs-zi-xue-zhi-nan/cao-zuo-xi-tong-zi-xue-xin-de" }
            ]
          },
          { text: "这些事要是大一大二知道就好了", link: "/sheng-cun-gong-le/zhe-xie-shi-yao-shi-da-yi-da-er-zhi-dao-jiu-hao-le" },
          { text: "一些有趣的公开课", link: "/sheng-cun-gong-le/yi-xie-you-qu-de-gong-kai-ke" }
        ]
      },
      {
        text: "留学之旅",
        link: "/liu-xue-zhi-l/README",
        collapsed: true,
        items: [
          { text: "多国混申之路", link: "/liu-xue-zhi-l/duo-guo-hun-shen-zhi-lu" },
          { text: "港科广Ph.D", link: "/liu-xue-zhi-l/gang-ke-guang-ph.d" }
        ]
      },
      {
        text: "保研之旅",
        link: "/bao-yan-zhi-l/README",
        collapsed: true,
        items: [
          { text: "中科大保研", link: "/bao-yan-zhi-l/zhong-ke-da-bao-yan" },
          { text: "2025届保研经验分享（北计，情深，高瓴，中科大）", link: "/bao-yan-zhi-l/2025-jie-bao-yan-jing-yan-fen-xiang-bei-ji-qing-shen-gao-ling-zhong-ke-da" }
        ]
      },
      {
        text: "本科科研之旅",
        link: "/ben-ke-ke-yan-zhi-l/README",
        collapsed: true,
        items: [
          { text: "IIC科研经历", link: "/ben-ke-ke-yan-zhi-l/iic-ke-yan-jing-li" },
          { text: "lzm经验", link: "/ben-ke-ke-yan-zhi-l/lzm-jing-yan" }
        ]
      },
      {
        text: "考研之旅",
        link: "/kao-yan-zhi-l/README",
        collapsed: true,
        items: [
          { text: "北京大学软件与微电子学院ai方向", link: "/kao-yan-zhi-l/bei-jing-da-xue-ruan-jian-yu-wei-dian-zi-xue-yuan-ai-fang-xiang" },
          { text: "南京大学软件学院学硕", link: "/kao-yan-zhi-l/nan-jing-da-xue-ruan-jian-xue-yuan-xue-shuo" }
        ]
      },
      {
        text: "工作之旅",
        link: "/gong-zuo-zhi-l/README",
        collapsed: true,
        items: [
          { text: "拼多多后端开发", link: "/gong-zuo-zhi-l/pin-duo-duo-hou-duan-kai-fa" },
          { text: "华为软开", link: "/gong-zuo-zhi-l/hua-wei-ruan-kai" }
        ]
      },
      { text: "竞赛", 
        link: "/jing-sai/README" ,
        collapsed: true,
        items: [
        ],
      },
    ]
  }
  
})

