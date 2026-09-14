Component({
  properties: {
    text: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'primary',
    },
    icon: {
      type: String,
      value: '',
    },
    iconSize: {
      type: String,
      value: '16',
    },
    iconColor: {
      type: String,
      value: '#ffffff',
    },
    block: {
      type: Boolean,
      value: false,
    },
    disabled: {
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
      const styles = [];
      if (this.data.customStyle) {
        styles.push(this.data.customStyle);
      }
      return styles.join(';');
    },
  },

  methods: {
    onTap() {
      if (this.data.disabled) return;
      this.triggerEvent('tap');
    },
  },
});