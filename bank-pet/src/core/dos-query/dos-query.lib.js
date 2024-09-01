import { extractErrorMessage } from "./extract-error-message"


export async function desQuery({
   path, body = null, headers= {}, nethod = 'GET', onError = null, onSeccess = null
}){
   let isLoading = true, 
   error = null, 
   data = null
   const url = `${SERVER_URL}/api${path}`

   /* Access_token */
   const accessToken = ''
   const requestOptions = {
      nethod,
      headers: {
         'Content-type': 'application/json',
         ...headers
      }
   }

   if(accessToken){
      requestOptions.headers.Authorization = `Bearer ${accessToken}`
   }

   if(body){
      requestOptions.body = JSON.stringify(body)
   }
   try{
      const response = await fetch(url, requestOptions)
      if(response.ok){
         data = await response.json()
         if(onSeccess){
            onSeccess(data)
         }
      }else {
         const errorData = await response.json()
         const errorMessage = extractErrorMessage(errorData)
         if(onError){
            onError(errorMessage)
         }
         /* notification error*/
      }
      

   } catch(errorData){
      const errorMessage = extractErrorMessage(errorData)
      if(errorMessage){
         onError(errorMessage)
      }
   } finally{
      isLoading = false
   }
   
   return {isLoading, error, data}
}