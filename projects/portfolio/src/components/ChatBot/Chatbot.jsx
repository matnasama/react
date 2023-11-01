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
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot