/**
 * 文件名: shop-card.js
 * 功能描述: 首页店铺卡片组件
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
    shopId: { type: String, value: '' },
    name: { type: String, value: '' },
    coverUrl: { type: String, value: '' },
    coverType: { type: String, value: '' },
    logoText: { type: String, value: '' },
    logoColor: { type: String, value: '' },
    distance: { type: String, value: '' },
    address: { type: String, value: '' },
    latitude: { type: Number, value: 0 },
    longitude: { type: Number, value: 0 },
    rating: { type: String, value: '' },
    hygieneLevel: { type: String, value: '' },
    score: { type: String, value: '' },
    isOpen: { type: Boolean, value: true },
    businessStatus: { type: String, value: '' },
    isFeatured: { type: Boolean, value: false },
  },

  methods: {
    onTapCard() {
      if (!this.data.shopId) {
        return;
      }
      this.triggerEvent('shoptap', { shopId: this.data.shopId });
    },

    onTapBook(e) {
      if (!this.data.isOpen) {
        return;
      }
      this.triggerEvent('booktap', { shopId: this.data.shopId });
    },

    onTapAddress() {
      if (!this.data.latitude || !this.data.longitude) {
        this.triggerEvent('addressmissing', { shopId: this.data.shopId });
        return;
      }
      this.triggerEvent('addresstap', {
        shopId: this.data.shopId,
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        address: this.data.address,
        name: this.data.name,
      });
    },
  },
});
