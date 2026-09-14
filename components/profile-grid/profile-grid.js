Component({
  properties: {
    items: {
      type: Array,
      value: [],
    },
  },

  methods: {
    onItemTap(e) {
      const { id, label } = e.currentTarget.dataset;
      this.triggerEvent('itemtap', { id, label });
    },
  },
});