console.log("Hello this is just simple interactions made with jQuery, Enjoy!");
console.log($)
$('#hide').click(function(){
    $('#one').hide();
})
$('#two').hide();
$('#show').click(function(){
    $('#two').show();
})
$('#toggle').click(function(){
    $('#three').toggle();
})
$('#four').hide();
$('#slidedown').click(function(){
    $('#four').slideDown();
})
$('#slideup').click(function(){
    $('#five').slideUp();
})
$('#slidetoggle').click(function(){
    $('#six').slideToggle();
})
$('#fadeout').click(function(){
    $('#pictureone').fadeOut();
})
$('#picturetwo').hide();
$('#fadein').click(function(){
    $('#picturetwo').fadeIn();
})
$('#before').click(function(){
    $('#seven').before('2+3');
})
$('#after').click(function(){
    $('#eight').after('=5');
})
$('#addclass').click(function(){
    $('nine').addClass(alert("added a class"));
})
$('#append').click(function(){
    $('#ten').append('BAM WAM ');
})
$('#html').click(function(){
    $('#eleven').html('<h1>RAWR!!!!!</h1>');
})
$('#attribute').click(function(){
    $('#twelve').attr(alert('Confused'));
})
$('#text').click(function(){
    $('#thirteen').text('I am the king of the world!');
})
$('#val').click(function(){
    $('#tfourteen').val(alert('Still Confused'));
})