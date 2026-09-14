/**
 * 文件名: video-card.js
 * 功能描述: 健康课堂视频卡片
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
    video: { type: Object, value: {} },
  },

  methods: {
    onTap() {
      this.triggerEvent('tap', { video: this.properties.video });
    },

    onToggleFavorite(e) {
      e.stopPropagation();
      const video = this.properties.video;
      const isFavorite = !video.isFavorite;
      this.triggerEvent('favorite', {
        id: video.id,
        isFavorite,
      });
    },
  },
});
