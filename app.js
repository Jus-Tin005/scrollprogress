var getprogressBar = document.getElementById("progress-bar");

// jQ = $(document).scroll(function(){});
window.onscroll = function(){  // anonymous function.
        scrollPoint();
}

function scrollPoint(){
        // console.log("i am working !");

        /*
        !st, pro h,window h,  = por h - window h   .  st * 100 / ph-wh result.

        */

        var getScrollTop = document.documentElement.scrollTop; // YGN to MDY.
        // console.log(getScrollTop);
        var getScrollHeight = document.documentElement.scrollHeight; // the place arrive
        // console.log(getScrollHeight);
        var getClientHeight = document.documentElement.clientHeight; //  ygn to phyuu on the way of mdy.
        // console.log(getClientHeight);

        var calculateHeight = getScrollHeight - getClientHeight;

        // var getFinal = Math.round((getScrollTop * 100) / calculateHeight);
        // console.log(getFinal);

        var getFinal = Math.floor((getScrollTop/calculateHeight) * 100);

         getprogressBar.style.width = `${getFinal}%`;
}

        function printMe(){
        window.print();
        }




