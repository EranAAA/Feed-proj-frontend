import { httpService } from './http.service'

export const commentService = {
   query,
   getById,
   save,
   remove,
}

async function query(filterBy = {}) {
   try {
      return await httpService.get('comment/', { filterBy })
   } catch (err) {
      console.log('cant get comments!')
      throw err
   }
}

async function getById(commentId) {
   try {
      return await httpService.get(`comment/${commentId}`)
   } catch (err) {
      console.log('cant get comment by id!')
      throw err
   }
}

async function remove(commentId) {
   try {
      return await httpService.delete(`comment/${commentId}`)
   } catch (err) {
      console.log('cant delete comment')
      throw err
   }
}

async function save(comment) {
   try {
      if (comment._id) {
         return await httpService.put(`comment/${comment._id}`, comment)
      } else {
         return await httpService.post(`comment/`, comment)
      }
   } catch (err) {
      console.log('cant save comment')
      throw err
   }
}


