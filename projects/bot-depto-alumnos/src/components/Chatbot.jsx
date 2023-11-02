import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'badc0809-1c02-4ef5-812d-1e4858217082',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'badc0809-1c02-4ef5-812d-1e4858217082',
        composerPlaceholder: "Bienvenidos",
        webhookId: "6430d4fe-e988-424a-8985-2814cd6cfb29",
        lazySocket: true,
        themeName: "prism",
        botName: "Departamento de Alumnos ",
        frontendVersion: "v1",
        useSessionStorage: true,
        showPoweredBy: true,
        theme: "prism",
        themeColor: "#2563eb",
        stylesheet: "https://webchat-styler-css.botpress.app/prod/code/f9de560a-f942-4126-a79c-36f78710d360/v18214/style.css"
        

      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot