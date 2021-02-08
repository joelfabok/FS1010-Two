$(document).ready(
    function(){

        // *********************************** //
        // This Will Add Item To List On Enter //
        // *********************************** //
        
        $('input').keydown(function(e) {
            if (e.which === 13) {
                if (!$('input').val()) {                
                    alert('Please Add Item');           
                  }                                     
                  
                  else {
                    $(".undone").append("<li>" + this.value + '<button class="close"><i class="fa fa-trash"></i></span></button>' + "</li>");
                  }
                this.value = "";
            }
        });

        // ********************************************** //
        // This Will Add Item To List When Add Is Clicked //
        // ********************************************** //
        $('.add').click(
            function(){
                let toAdd = $('input[name=item]').val();
                if (!$('input').val()) {
                    alert('Please Add Item');
                  }
                  
                  else {
                    $('.undone').append('<li>' + toAdd + '<button class="close">X</button>' + '</li>');
                  }
        
            });
            
            $('.add').click(function(){				 
                $('input[name=item]').val('');
            });

        // ******************************************************************* //
        // This Will Check Off And Put A Line Through Item And Move It To Done //
        // ******************************************************************* //
          
        $(document).on('click','.undone li', function(){
        $(this).toggleClass('checked').toggleClass('strike').appendTo('.done');
        });

        // ***************************************************************** //
        // This Will Remove Line A Checkmark From Item And Move It To Undone //
        // ***************************************************************** //

        $(document).on('click','.done li', function(){
            $(this).toggleClass('checked').toggleClass('strike').appendTo('.undone');
            });
        
        $('ul').on("click", ".close", function(e) {
            e.preventDefault();
            $(this).parent().remove();
        });

        
    }
);


