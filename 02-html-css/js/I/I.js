
//loop
var number=0;
while (number<30){
   number=number+1;
   if (number%3==0 && number%5==0){
   console.log('hong kong');
   }
   else if (number%3==0 || number%5==0){
       console.log('hong kong'); 
   }
   else{
   console.log(number);
   }
}
