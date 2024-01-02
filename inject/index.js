(function() {
  let duration = 0
  const timer = setInterval(() => {
    const host = document.documentElement.querySelector('#transmart-crx-shadow-root')
    if (host) {
      clearInterval(timer)
      const sheet = new CSSStyleSheet
      sheet.replaceSync(
        `
          .trans-ctx--action-page-translate {
            opacity: 0.3
          }
          .trans-ctx--action-page-translate.trans-ctx--focused {
            opacity: 1
          }
        `
      )
      host.shadowRoot.adoptedStyleSheets.push(sheet) 
    } else if (duration > 3000) {
      clearInterval(timer)
    } else {
      duration += 500
    }
  }, 500)
})()
