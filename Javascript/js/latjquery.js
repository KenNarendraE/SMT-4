// $(document).ready(function () {//tanda dari jquery diawali dengan $
//     console.log("ready1");
// });

//jquery adalah library dari javascript

$(function (params) {
    $("#isi").html("<h1>TEST</h1>");

    $("#klik").click(function (e) {
        e.preventDefault();
        alert("ini pake snippets");//install snippets jquery agar mempercepat pengetikan
    });

    $("#isi").mouseleave(function () {
        console.log("leave mouse anda");
    });
})