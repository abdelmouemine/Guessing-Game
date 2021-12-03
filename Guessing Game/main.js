        var y = Math.floor(Math.random() * 100 + 1);
        var guess = 0;
        var output = document.getElementById('outputtext');
        var i= 10
        var tries = document.getElementById('tries');

          function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
            
            return true;
      }
        document.getElementById("my_btn").addEventListener('click',(e)=>{
        var x = document.getElementById("guess").value
        i -= 1
        
        if(i <= -1) {
            output.innerHTML="GAME OVER";
        }

        /* if guessed the right number number*/

       if(x == y && (guess<=1)){    
           output.innerHTML="PEEERFECTOOOO !! YOU GUESSED IT RIGHT IN " + guess + " GUESS ";
                    
        }
        else if(x == y && (guess<=3)){    
           output.innerHTML="GREAT !! YOU GUESSED IT RIGHT IN " + guess + " GUESS ";
                   
        }
        else if(x == y && (guess<=5)){ 
           output.innerHTML="GOOD !! YOU GUESSED IT RIGHT IN " + guess + " GUESS ";
                    
        }

        else if(x == y && (guess<=10)){ 
           output.innerHTML="NOT BAD !! YOU GUESSED IT RIGHT IN " + guess + " GUESS "; 
                  
        }

        // greater or smaller

        if(x > y && !(i<=-1)) { /* if guessed number is greater
                       than actual number*/ 
           guess++;
           output.innerHTML="TRY A SMALLER NUMBER";
           tries.innerHTML=" TRIES : " + i;  
        }

       if (x < y && !(i<=-1)) { /* if guessed number is smaller
                       than actual number*/ 
           guess++;
           output.innerHTML="TRY A GREATER NUMBER"
           tries.innerHTML=" TRIES : " + i;
       }
       
       console.log(i)
    })
