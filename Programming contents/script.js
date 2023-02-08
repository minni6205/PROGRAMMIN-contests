let url="https://kontests.net/api/v1/all"
 let response=fetch(url) 
 response.then((v)=>{ 
    return v.json()
 }).then((contests)=>{ 
    console.log(contests)  
    ihtml = "" 
    for(item in contests){ 
        console.log(contests[item]) 
        ihtml += `
        <div class="card" style="width: 18rem;">
    <img src="https://www.jamesgmartin.center/wp-content/uploads/2017/09/Fotolia_169539793_Subscription_Monthly_M-1200x840.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title>${contests[item].name}</h5>
      <p class="card-text">Status is ${contests[item].status} and site is  ${contests[item].site}</p>  
      <p class="card-text"> in 24Hours? ${contests[item].in_24_hours} </p> 
      <p>Starts at: ${contests[item].start_time} 
      <p>Starts at: ${contests[item].end_time}
      <a href="${contests[item].url}" class="btn btn-primary">visit Contests</a>
    </div>
  </div> 
  `
    } 
  cardContainer.innerHTML=ihtml
    
 })
