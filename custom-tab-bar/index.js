/**
 * 文件名: custom-tab-bar/index.js
 * 功能描述: 自定义底部导航栏
 * 作者: 开发团队
 * 创建时间: 2026-07-08
 */
Component({
  data: {
    selected: 0,
    color: '#6a8a90',
    selectedColor: '#017781',
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        iconType: 'home',
      },
      {
        pagePath: '/pages/classroom/classroom',
        text: '养生课堂',
        iconType: 'tea',
      },
      {
        pagePath: '/pages/ranking/ranking',
        text: '公益排名',
        iconType: 'chart',
      },
      {
        pagePath: '/pages/profile/profile',
        text: '我的',
        iconType: 'user',
      },
    ],
  },

  lifetimes: {
    attached() {
      this.syncSelected();
    },
  },

  pageLifetimes: {
    show() {
      this.syncSelected();
    },
  },

  methods: {
    syncSelected() {
      const pages = getCurrentPages();
      const currentRoute = pages[pages.length - 1]?.route || '';
      const selected = this.data.list.findIndex((item) => item.pagePath.replace(/^\//, '') === currentRoute);
      if (selected !== -1 && selected !== this.data.selected) {
        this.setData({ selected });
      }
    },

    switchTab(e) {
      const { path, index } = e.currentTarget.dataset;
      if (this.data.selected === index) {
        return;
      }
      wx.switchTab({ url: path });
    },
  },
});
