
/////////Functions///////
var curSl=1;
function doSomething() {

    $(".slider").find("section:nth-child("+curSl+")").removeClass("slided");
    if(curSl<4){
        curSl++;
    }else{
        curSl=1;
    }

    $(".slider").find("section:nth-child("+curSl+")").addClass("slided");

    setTimeout(doSomething, 3000);
}










setTimeout(doSomething, 3000);


var std={};
function stdadd(r){
    std=r;
 }

 var points={pro:{Aliya:{},Bidaya:{},Uoola:{},Thaniya:{},Thanawiya:{}},
            int:{Aliya:{},Bidaya:{},Uoola:{},Thaniya:{},Thanawiya:{}},
            ex:{Aliya:{},Bidaya:{},Uoola:{},Thaniya:{},Thanawiya:{}},
        }
$(document).ready(function () {
    //////IMPRESS//////



    var roundLogEl = document.querySelector('.rou center');

    anime({
        targets: roundLogEl,
        innerHTML: [0, 112],
        easing: 'linear',
        round: 10 // Will round the animated value to 1 decimal
    });



    $.getJSON('Json/std.json', function(jd) {
        stdadd(jd.std)
    })

   GetTab("Bidaya");
  GetTab("Aliya");
  GetTab("Thaniya");
  GetTab("Uoola")
 GetTab("Thanawiya");





})




function GetTab(cat){
    $.getJSON('Json/'+cat+'.json', function(jd) {

        var aaaa=JSON.parse(JSON.stringify(jd));

        aaa=aaaa["Program"][cat]

        for(var arrayIndex in aaa){
           // console.log(aaa[arrayIndex])
            if(aaa[arrayIndex]["result"]["first"]["adNo"]=="" && aaa[arrayIndex]["result"]["second"]["adNo"]=="" && aaa[arrayIndex]["result"]["third"]["adNo"]==""){

            }else{


                var pro="";
                var int="";
                var ex="";

                var poin={first:3,second:2,third:1,grade:0}
                var gradePoin={A:5,B:3,undefined:0}

                points.pro[cat][arrayIndex]=0;
                points.int[cat][arrayIndex]=0;
                points.ex[cat][arrayIndex]=0;



                var res=aaa[arrayIndex]["result"]
                for(var re in res){

                    resu=res[re]["adNo"];
                   for(var resul in resu){

                    var stdName=std[resu[resul]]["Name"];
                    var stdHouse=std[resu[resul]]["house"];


                    switch(stdHouse){
                        case "pro":
                                var poi=poin[re];
                                var gradp=gradePoin[res[re]["grade"][resul]];
                                points.pro[cat][arrayIndex]=points.pro[cat][arrayIndex]+gradp+poi;




                            pro=pro+'<button class="'+re+'">'+resu[resul]+'|'+stdName+'</button>'+'<button class="Withgrade">'+res[re]["grade"][resul]+'</button><br>';

                        break;
                        case "in":
                            var poi=poin[re];
                            var gradp=gradePoin[res[re]["grade"][resul]];
                            points.int[cat][arrayIndex]=points.int[cat][arrayIndex]+poi+gradp;
                            int=int+'<button class="'+re+'">'+resu[resul]+'|'+stdName+'</button>'+'<button class="Withgrade">'+res[re]["grade"][resul]+'</button><br>';

                        break;
                        case "ex":
                        var poi=poin[re];
                        var gradp=gradePoin[res[re]["grade"][resul]];
                        points.ex[cat][arrayIndex]=points.ex[cat][arrayIndex]+poi+gradp;

                        ex=ex+'<button class="'+re+'">'+resu[resul]+'|'+stdName+'</button>'+'<button class="Withgrade">'+res[re]["grade"][resul]+'</button><br>';
                        break;
                    }
                    console.log(re+resu[resul]+res[re]["grade"][resul]+stdName+int)
                   }





                    //console.log(res[re])

                }
                $("#"+cat).append('<div class="ResTabCol">' +
                '<div>'+aaa[arrayIndex]["Program"]+'</div>' +
                '<div><div class="point_col">'+points.pro[cat][arrayIndex]+'</div><span>'+pro+'</span></div>'+
                '<div><div class="point_col">'+points.int[cat][arrayIndex]+'</div><span>'+int+'</span></div>'+
                '<div><div class="point_col">'+points.ex[cat][arrayIndex]+'</div><span>'+ex+'</span></div>'+
            ''+
            '</div>'+'<div class="TotF"><div class="total"></div><div class="total Pro"></div><div class="total In"></div><div class="total Ex"></div></div>')


console.log(points.pro.Thaniya[arrayIndex])


            }

        }

        Tottal("Bidaya","Pro",2)
        Tottal("Bidaya","In",3)
        Tottal("Bidaya","Ex",4)

        Tottal("Aliya","Pro",2)
        Tottal("Aliya","In",3)
        Tottal("Aliya","Ex",4)

        Tottal("Uoola","Pro",2)
        Tottal("Uoola","In",3)
        Tottal("Uoola","Ex",4)

        Tottal("Thaniya","Pro",2)
        Tottal("Thaniya","In",3)
        Tottal("Thaniya","Ex",4)

        Tottal("Thanawiya","Pro",2)
        Tottal("Thanawiya","In",3)
        Tottal("Thanawiya","Ex",4)

     });

    }




    function Tottal(cat,hou,cou){
        var aa=0;
        $("#"+cat+" .ResTabCol").each(function(){
           aa=aa+Number($(this).find("div:nth-child("+cou+") .point_col").html())
        });;
      $("#"+cat+" .total."+hou).html(aa)

    }
