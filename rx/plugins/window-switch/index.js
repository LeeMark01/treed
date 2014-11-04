
module.exports = {
  view: null,
  keys: {
    'window left': {
      normal: 'w h',
      insert: 'alt+w h'
    },
    'window right': {
      normal: 'w l',
      insert: 'alt+w l'
    },
  },

  store: {
    actions: {
      windowLeft: function () {
        if (undefined === this.view.windowLeft) return
        this.parent.activeView = this.view.windowLeft
        this.changed(this.events.activeViewChanged())
      },
      windowRight: function () {
        if (undefined === this.view.windowRight) return
        this.parent.activeView = this.view.windowRight
        this.changed(this.events.activeViewChanged())
      },
    },
  },
}

