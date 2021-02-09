
let Konami = Konami || {};

Konami.key = '38384040373937396665';

Konami.onCode = function(callback) {
    let input = '';
    $(document).on("keydown", function(e) {
        input += ("" + e.keyCode);
        if (input === Konami.key) {
            if(typeof callback == 'undefined') {
                $('main').css({
                    'display': 'none',
                }); 
                
                $('body').css ({
                    'background-image' : "url('https://media4.giphy.com/media/eiGU1eOEoxIIYL4I42/giphy.gif')",
                    'background-repeat' : 'no-repeat',
                    'background-position' : 'center',  
                })
            }
            else {
                return callback();
            }
        }
        if (!Konami.key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

Konami.offCode = function() {
    $(document).off("keydown");
}

Konami.onCode();