$(document).ready(function(){
            $('#menu').on("click" , function(){
                            $('#sidenav').toggle("slide",function(){
                                let visibilityStatus = $("#sidenav").attr("data-visibile");
                                $("#sidenav").attr(visibilityStatus, "data-visibile");
                            })
            })
        })