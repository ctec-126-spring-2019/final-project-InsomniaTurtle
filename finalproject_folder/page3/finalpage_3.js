// Jquery area

    $(document).ready(function() {
        $('#form').on('submit', function (evt) {

            console.log(evt);
            var errorHole = [];
            var flag = false;

            if ($('#firstName').val() === '') {
                $('#firstName').css('border','3px solid red');
                $('#hole1').remove();
                $('firstName').after('<span id="hole1"> Please fill this space in</span>');

                flag = true;
                errorHole.push(['firstName', 'Please fill in your first name']);
            }
            
            if ($('#lastName').val() === '') {
                $('#lastName').css('border','3px solid red');
                $('#hole2').remove();
                $('lastName').after('<span id="hole2"> Please fill this space in</span>');

                flag = true;
                errorHole.push(['firstName', 'Please fill in your last name']);
            }
            
            if ($('#myEmail').val() === '') {
                $('#myEmail').css('border','3px solid red');
                $('#hole3').remove();
                $('firstName').after('<span id="hole3"> Please fill this space in</span>');

                flag = true;
                errorHole.push(['firstName', 'Please fill in your email']);
            }
            
            if (!$('input:radio[name=rateMe]:checked').val() === '') {
                $('#catch1').css('color','red');
                $('#hole4').remove();
                $('rateMe').after('<span id="hole4"> Please check an option</span>');

                flag = true;
                errorHole.push(['rateMe', 'Please check an valid option']);
            }
            
            if ($('input:radio[name=wouldYou]:checked').val() === '') {
                $('#catch2').css('color','red');
                $('#hole5').remove();
                $('wouldYou').after('<span id="hole5"> Please check an option</span>');

                flag = true;
                errorHole.push(['wouldYou', 'Please select a valid option']);
            }
            
            if ($('#difficult').val() === 'choose') {
                $('#difficult').css('border','3px solid red');
                $('#hole6').remove();
                $('difficult').after('<span id="hole6"> Please select an option</span>');

                flag = true;
                errorHole.push(['difficult', 'Please select a valid option']);
            }
            
            if ($('#tableTop').val() === 'options') {
                $('#tableTop').css('border','3px solid red');
                $('#hole7').remove();
                $('tableTop').after('<span id="hole7"> Please select an option</span>');

                flag = true;
                errorHole.push(['tableTop', 'Please select a valid option']);
            }

            if (flag){
                var errorHoles = $('.errorHole');
                var output = '<ul>';
                for (let index = 0; index < errorHole.length; index++) {
                    output += '<li>' + errorHole[index][1] + '</li>';
                } 
                output += '</ul>';
                errorHole.html(output);
                evt.preventDefault();
                $('#' + errorHole[0][0]).focus();
            }
        });
    });
