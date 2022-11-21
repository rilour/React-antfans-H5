module.exports = {
    plugins: {
      'postcss-px2vp': {
        viewportWidth(rule) {
          const file = rule.source?.input.file
          return file?.includes('vant') ? 375 : 750
        },
        propList: ['*', '!font*', '!line-height', '!letter-spacing'],
        selectorBlackList: ['digitcollection-creator-avatar', 'tabbar', 'tabbaritem', 'home-menu'],
      },
    },
  }