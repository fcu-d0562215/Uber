$( window ).resize(function() {
    youtubeiframeresize();
});

$(document).ready(function() {
    youtubeiframeresize();
});

function youtubeiframeresize(){
    yt = $( "#youtube" ).width();
    $( "#youtube" ).height(yt/18*8.65)
}