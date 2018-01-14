/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function deumerda() {
    console.log("deu merda na request");
}

var sendLoginRequest = function () {
//    $.ajax({
//        url: "LoginServlet",
//        method: "post",
//        success: function (data, textStatus, jqXHR) {
//            try {
//                if (data == "1") {
//                    console.log("sucesso");
//                } else {
//                    deumerda();
//                }
//            } catch (e) {
//                console.log("deu exception");
//                console.log(e);
//            }
//
//        },
//        error: function () {
//            deumerda();
//        }
//    });
    location.href = "index.html";
};
$(".btn-login").click(function () {
    /* TODO MODAL DE AGUARDE*/
    var usuario = $(".usuario").val();
    var senha = $(".senha").val();
    if ("" == usuario || "" == senha) {
        console.log("nulos");
    } else {
        sendLoginRequest();
    }
}
);