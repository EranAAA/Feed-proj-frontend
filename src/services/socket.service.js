import io from 'socket.io-client'

export const SOCKET_EVENT_ADD_MSG = 'chat-add-msg'
export const SOCKET_EMIT_SEND_MSG = 'chat-send-msg'
export const SOCKET_EMIT_SET_TOPIC = 'chat-set-topic'
export const SOCKET_EMIT_USER_WATCH = 'user-watch'
export const SOCKET_EVENT_USER_UPDATED = 'user-updated'
export const SOCKET_EVENT_REVIEW_ADDED = 'review-added'
export const SOCKET_EVENT_REVIEW_ABOUT_YOU = 'review-about-you'
export const SOCKET_EMIT_TYPE_MSG = 'type addMsg'

export const SOCKET_EVENT_ADD_MEMBER = 'add-member'
export const SOCKET_EMIT_EVENT_MEMBER_ADDED = 'event-add-member'

const SOCKET_EMIT_LOGIN = 'set-user-socket'
const SOCKET_EMIT_LOGOUT = 'unset-user-socket'


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

// for debugging from console
// window.socketService = socketService

socketService.setup()

function createSocketService() {
   var socket = null
   const socketService = {
      setup() {
         socket = io(baseUrl)
      },
      on(eventName, cb) {
         socket.on(eventName, cb)
      },
      off(eventName, cb = null) {
         if (!socket) return
         if (!cb) socket.removeAllListeners(eventName)
         else socket.off(eventName, cb)
      },
      emit(eventName, data) {
         socket.emit(eventName, data)
      },
      login(userId) {
         socket.emit(SOCKET_EMIT_LOGIN, userId)
      },
      logout() {
         socket.emit(SOCKET_EMIT_LOGOUT)
      },
      terminate() {
         socket = null
      },

   }
   return socketService
}

// Basic Tests
// function cb(x) {('Socket Test - Expected Puk, Actual:', x)}
// socketService.on('baba', cb)
// socketService.on('baba', cb)
// socketService.on('baba', cb)
// socketService.on('mama', cb)
// socketService.emit('baba', 'Puk')
// socketService.off('baba', cb)
