export default {
  all() {
    return new Promise((resolve, reject) => {
      fetch('/products.json')
        .then( response => {
          //Ok status 200, fue exitosa la llamada al api.
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Fallo el llamado hacia el api de products')
          }
        }).then(data => {
          console.log(data);
          return resolve(data);
        }).catch(error => reject(error));
    });
  }
}


// export default {
//   async all() {
//     try {
//       const response = await fetch('/products.json');
//       if(!response.ok) {
//         throw new Error('Fallo el llamado hacia el api de products');
//       }
//       return response.json();
//     } catch (error) {
//       throw error;
//     }
//   }
// }
