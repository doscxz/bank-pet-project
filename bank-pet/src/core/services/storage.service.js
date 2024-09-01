export class StorageService {
   /**
    * 
    * @param {string} key 
    * @param {any} value 
    */
   setItem(key, value){
      localStorage.setItem(key, JSON.stringify(value))
   }
   removwItem(key){
      localStorage.removeItem(key)
   }
   clear(){
      localStorage.clear()
   }

   getItem(key){
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : null
   }
}