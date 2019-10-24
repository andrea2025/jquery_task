
$(document).ready(function () {
         $('.instruction').hide();
        $('.question_1').hide();
        $('.question_2').hide();
        $('.question_3').hide();
        $('.question_4').hide();
        $('.question_5').hide();
        $(".try").hide();
        $(".try2").hide();
        $(".try3").hide();
        $(".try4").hide();
        $(".image_wrapper").hide();



    $('#btn').click(function (e) { 
        if($('#username').val() == "Andrea" && $('#password').val() == "master"){
            // alert('welcome!!');
            $('#result').text('login complete');
            $('.login').hide();
            $('.instruction').show();
         }else if($('#username').val() == "Andrea" || $('#password').val() == "master"){
            $('#result').text('invalid login details');
        }else{
            $('#result').text('Wrong details');
        }
     });

         $('#btn1').on('click', function(){
                $('.question_1').show();
                $('.instruction').hide();
            
         });

        $('.btn-grp1').on('click', function(e){
            // e.preventDefault();
            if($('input[value="C"]:checked').val()){
                 $('.question_2').show(500);
                 $('.question_1').hide();
             }else {
                $('.answer_result').text('incorrect').css({'color':'red'});
                $('.try').show();
                $('.try').click(function (e) { 
                    e.preventDefault();
                    $('.instruction').show();
                    $('.try').hide();
                    $('.answer_result').text('incorrect').hide();
                });
                 $('.question_1').hide();
             }
        });
        // $("form input[type='radio']:checked").val();
        
        $('.btn-grp2').on('click', function(){
            if($("input[value ='A']:checked").val()){
                 $('.question_3').show(500);
                 $('.question_2').hide();
            }else {
              $('.answer_result2').text('incorrect').css({'color':'red'});
              $('.try2').show();
              $('.try2').click(function (e) { 
                  e.preventDefault();
                  $('.instruction').show();
                  $('.try2').hide();
                  $('.answer_result2').text('incorrect').hide();
              });
            $('.question_2').hide();

            }
        });

        
        $('.btn-grp3').on('click', function(){
            if($("input[value ='ans_1']:checked").val()){
                $('.question_4').show(500);
                $('.question_3').hide();
            }else {
                $('.answer_result3').text('incorrect').css({'color':'red'});
                $('.try3').show();
                $('.try3').click(function (e) { 
                    e.preventDefault();
                    $('.instruction').show();
                    $('.try3').hide();
                    $('.answer_result3').text('incorrect').hide();
                });
              $('.question_3').hide();
  
            }
        });

        
        $('.btn-grp4').on('click', function(){
            if($("input[value ='A1']:checked").val()){
                 $('.question_5').show(500);
                $('.question_4').hide();
             }else {
                 $('.answer_result4').text('incorrect').css({'color':'red'});
                 $('.try4').show();
                 $('.try4').click(function (e) { 
                     e.preventDefault();
                     $('.instruction').show();
                     $('.try4').hide();
                     $('.answer_result4').text('incorrect').hide();
                 });
               $('.question_4').hide();
              }
        });

            
        $('.btn-grp5').on('click', function(){
            if($("input[value ='C2']:checked").val()){
                  $('.question_5').hide();
            }
            $('.answer_result5').text('Congratulation!!!You successfully passed all test')
            .css({'color': 'maroon','font-size':'50px'});
            $(".image_wrapper").animate({
                 'opacity':'1',
                'height':'toggle',
                  'left':'500px'});
        });
            
     });
