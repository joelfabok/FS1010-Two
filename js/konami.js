

let global = {
  
  konami: function() {
    let konamikeys = [38,38,40,40,37,39,37,39,66,65], 
        started = false, 
        count = 0;
    
    $(document).keydown(function(e){
      let reset = function() {
        started = false; 
        count = 0;
        return;
      };
      
      key = e.keyCode;
      
      if(!started){
        if(key == 38){
          started = true;
        }
      }
      
      if (started){
        
        if (konamikeys[count] == key){
          count++;
        } else {
          reset();
        }
        if (count == 10){
          $('section').css({
            'display': 'none',
        }); 
        
        $('img').css ({
            'display' : 'block',
            'repeat' : 'no-repeat',
            'margin' : 'auto',
            'animation': '11s spinImg infinite',
            
        })


        setTimeout(function(){
          location.reload();
         },5000);
          
        }
      } 
    });
  }
}

global.konami();