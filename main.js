//Assigning Variables
const input=document.querySelector('input');
const button=document.querySelector('button');

const MTNArray=['07025','07026','0703','0704','0706','0803','0810','0806','08010','08013','08014','0816','0813','0814','08016','0903','0906','0913','0916'];

const AirtelArray=['0701','0708','0802','0812','0808','0901','0902','0904','0907','0912'];

const GlOArray=['0705','0805','0807','0811','0815','0905','0915'];

const nineMobile=['0809','0817','0818','0909','0908']

const concatArray=[...MTNArray,...AirtelArray,...GlOArray,...nineMobile];
const h2=document.querySelector('.h2')
const modal=document.querySelector('.modal')
const output=document.querySelector('.output');
//Clicking Button
button.addEventListener('click',()=>{

  concatArray.forEach((value)=>{
    if(!input.value.startsWith([value])||input.value.length==11){
      input.style.border="1px solid red";
    }
    
  })

     //Validating For MTN
   MTNArray.forEach((n)=>{
      
      if(input.value.startsWith([n])&&input.value.length==11){
            console.log(n)
            h2.textContent="MTN";
            modal.classList.remove('none')
            output.classList.add('anime')
 
   output.style.backgroundColor="#fff019";
   input.style.border="1px solid #fff019";
   modal.style.backgroundColor="#fff01936"

        }
       

      })


      //Validating For Airtel
      AirtelArray.forEach((n)=>{
      
        if(input.value.startsWith([n])&&input.value.length==11){
              console.log(n)
              h2.textContent="Airtel";
              modal.classList.remove('none')
              output.classList.add('anime')
   
   output.style.backgroundColor="#d80606"; 
   input.style.border="1px solid #d80606";
   modal.style.backgroundColor="#d8060636";
  
          }
  
        })

        //Validating For Glo

        GlOArray.forEach((n)=>{
      
            if(input.value.startsWith([n])&&input.value.length==11){
                  console.log(n)
                  h2.textContent="GLO";
                  modal.classList.remove('none')
            output.classList.add('anime')
       
         output.style.backgroundColor="#00bd00";
         input.style.border="1px solid #00bd00";
         modal.style.backgroundColor="#00bd0036";


      
              }
      
            })
 
            nineMobile.forEach((n)=>{
              
            if(input.value.startsWith([n])&&input.value.length==11){
              console.log(n)
              h2.textContent="9Mobile";
              modal.classList.remove('none')
        output.classList.add('anime')
   
     output.style.backgroundColor="#C3D507";
     input.style.border="1px solid #00bd00";
     modal.style.backgroundColor="#00bd0036";


  
          }

            })
            modal.addEventListener('click',()=>{
                modal.classList.add('none')
            })

})

