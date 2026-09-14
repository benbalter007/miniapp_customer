/**
 * 文件名: rank-item.js
 * 功能描述: 排名列表项
 * 作者: 开发团队
 * 创建时间: 2026-07-08
 */
Component({
  options: {
    styleIsolation: 'apply-shared',
    virtualHost: true,
    addGlobalClass: true,
  },

  properties: {
    item: { type: Object, value: {} },
  },

  methods: {
    onTap() {
      this.triggerEvent('tap', { item: this.properties.item });
    },
  },
});
