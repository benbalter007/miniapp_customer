Component({
  properties: {
    name: {
      type: String,
      value: '',
      observer: 'syncState',
    },
    size: {
      type: String,
      value: '20',
      observer: 'syncState',
    },
    color: {
      type: String,
      value: '#6a8a90',
      observer: 'syncState',
    },
    activeColor: {
      type: String,
      value: '#017781',
      observer: 'syncState',
    },
    active: {
      type: Boolean,
      value: false,
      observer: 'syncState',
    },
    block: {
      type: Boolean,
      value: false,
      observer: 'syncState',
    },
    tone: {
      type: String,
      value: 'plain',
      observer: 'syncState',
    },
    bgColor: {
      type: String,
      value: 'rgba(1, 119, 129, 0.08)',
      observer: 'syncState',
    },
    radius: {
      type: String,
      value: '9999rpx',
      observer: 'syncState',
    },
    padding: {
      type: String,
      value: '0',
      observer: 'syncState',
    },
    iconStyle: {
      type: String,
      value: '',
      observer: 'syncState',
    },
    wrapperStyle: {
      type: String,
      value: '',
      observer: 'syncState',
    },
  },

  data: {
    resolvedColor: '#6a8a90',
    wrapperClasses: 'app-icon',
    resolvedWrapperStyle: '',
  },

  lifetimes: {
    attached() {
      this.syncState();
    },
  },

  methods: {
    syncState() {
      const { active, activeColor, color, block, tone, bgColor, radius, padding, wrapperStyle } = this.data;
      const styles = [];
      if (tone !== 'plain') {
        styles.push(`background:${active ? bgColor : 'transparent'}`);
        styles.push(`border-radius:${radius}`);
        styles.push(`padding:${padding}`);
      }
      if (wrapperStyle) {
        styles.push(wrapperStyle);
      }
      this.setData({
        resolvedColor: active ? activeColor : color,
        wrapperClasses: `app-icon ${block ? 'app-icon--block' : ''} app-icon--${tone} ${active ? 'app-icon--active' : ''}`,
        resolvedWrapperStyle: styles.join(';'),
      });
    },
  },
});