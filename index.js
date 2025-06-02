$(function(){
    $("button").click(function(){
        let a = $("input.a").val()
        let b = $("input.b").val()
        a = Math.ceil(a);
        b = Math.floor(b);

        $("h2").text(Math.floor(Math.random() * (b - a + 1)) + a)
    })
})