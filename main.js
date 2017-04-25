console.log('QUIC webRequest tester is running. Make sure QUIC is enabled in chrome://flags/#enable-quic.')

const cb = (details) => {
  console.log('webRequest blocked a request to:', details.url)
  return { cancel: true }
}
const filter = {
  urls: [
    '*://*.doubleclick.net/*'
  ]
}

chrome.webRequest.onBeforeRequest.addListener(cb, filter)

console.log('Browse YouTube and open chrome://net-internals/#events&q=type:QUIC_SESSION to see what QUIC requests are occurring. You should not see any doubleclick connections.')
