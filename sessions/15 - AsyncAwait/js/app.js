// //async example of single thread and async task
// console.log(1);
// console.log(2);


// setTimeout(() => {
//   console.log('callback fired');
// }, 5000);

// console.log(3);
// console.log(4);

//HTTP REQUESTS
/*
* Make requests to get data and we make them to API endpoints
*
*/

const url = 'https://api.kanye.rest/';
const holder = document.querySelector('.holder');


const getKanye = async () => {
 const response = await fetch(url);
  // .then(res => {
  //   if(res.status === 200){
  //     return res.json();
  //   }
  // })
  // .then(data => {
  //   const {quote} = data;
  //   holder.innerHTML = `<strong>${quote}</strong> - <i>Kanye West</i>`;
  // })
  // .catch(err => {
  //   console.log(err);
  // });

  if(response.status !== 200){
    throw new Error('cannot fetch data');
  }
  
  const data = await response.json();
  
  // const {quote} = data;  
  // console.log(data);  

  return data;

}

getKanye()
  .then(data => console.log(data.quote))
  .catch(err => console.log(err.message));