Component({
  properties: {
    radius: {
      type: String,
      value: '24rpx',
    },
    padding: {
      type: String,
      value: '28rpx',
    },
    background: {
      type: String,
      value: '#ffffff',
    },
    border: {
      type: String,
      value: '1rpx solid rgba(0, 0, 0, 0.06)',
    },
    shadow: {
      type: String,
      value: '0 12rpx 32rpx rgba(1, 119, 129, 0.08)',
    },
    marginBottom: {
      type: String,
      value: '24rpx',
    },
    hover: {
      type: Boolean,
      value: true,
    },
    full: {
      type: Boolean,
      value: false,
    },
    customStyle: {
      type: String,
      value: '',
    },
  },

  computed: {
    resolvedStyle() {
      const styles = [
        `border-radius:${this.data.radius}`,
        `padding:${this.data.padding}`,
        `background:${this.data.background}`,
        `border:${this.data.border}`,
        `box-shadow:${this.data.shadow}`,
        `margin-bottom:${this.data.marginBottom}`,
      ];
      if (this.data.customStyle) {
        styles.push(this.data.customStyle);
      }
      return styles.join(';');
    },
  },
});