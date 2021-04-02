var estilo = $('abrir-modal').data('height')
$('a').each(function() {
    $(this).click(function(e) {
        e.preventDefault();

        $(this).css('background', 'blue')
    })
    console.log(this)

})

setTimeout(function() {
    $('a').css('background', 'red') // mudou de todos os A
}, 2000)

setTimeout(function() {
    $('a').css('background', 'green') // mudou de todos os A
}, 3000) // sequencia de ação, vem logo depois do primeiro, dependendo do tempo passado]]]]]]]]]]]]]]
// $('h2').click(function(){
//     $(this).closest('div').css('background', 'blue')
// })


$('h2').click(function(){
    $(this).parent().css('background', 'blue')
}) // faz a mesma coisa do closest só que de forma mais direta, sem precisar passar o pai, ele mesmo seleciona


$('a').click(function(){
    $(this).parents().css('background', 'blue')
}) // seleciona todos os pais do elemento

//find - procura o elemento dentro dos filhos
$('section').click(function(){
    $(this).find('span').css('background', 'blue')
})

$('.btn').first().css('background', 'blue')

$('.btn').last().css('background', 'blue')


$('p').prev().css('background', 'pink')

$('h2').next().css('background', 'blue')

$('h2').eq(1).css('background', 'blue')

$('a').not('btn').css('background', 'blue') // vai selecionar todos os A, menos os que tiver dentro de btn
