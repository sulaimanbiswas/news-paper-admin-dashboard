( function( $ ) {
  'use strict'; // Start of use strict
  
      $.validator.setDefaults({
        submitHandler: function() {
          alert("submitted!");
        }
      });

      $(document).ready(function() {
        
        /* ------------------------------------------------------------------------
         * Validation
         * ------------------------------------------------------------------------ */

        $.validator.setDefaults({
          submitHandler: function() {
            alert("submitted!");
          }
        });

        var _commentForm = $( '#commentForm' );
        if( _commentForm.exists() ){ 
          _commentForm.validate();
        }

        var _signupForm = $( '#signupForm' );
        if( _signupForm.exists() ){
          _signupForm.validate({
            rules: {
              firstname: "required",
              lastname: "required",
              username: {
                required: true,
                minlength: 2
              },
              password: {
                required: true,
                minlength: 5
              },
              confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
              },
              email: {
                required: true,
                email: true
              },
              topic: {
                required: "#newsletter:checked",
                minlength: 2
              },
              agree: "required"
            },
            messages: {
              firstname: "Please enter your firstname",
              lastname: "Please enter your lastname",
              username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
              },
              password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
              },
              confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
              },
              email: "Please enter a valid email address",
              agree: "Please accept our policy",
              topic: "Please select at least 2 topics"
            }
          });
        }

        var _form_username = $( '#form_username' );
        if( _form_username.exists() ){
          _form_username.focus(function() {
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            if (firstname && lastname && !this.value) {
              this.value = firstname + "." + lastname;
            }
          });
        }


        //code to hide topic selection, disable for demo
        var _newsletter = $("#newsletter");
        if ( _newsletter.exists() ) {
          // newsletter topics are optional, hide at first
          var inital = _newsletter.is(":checked");
          var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
          var topicInputs = topics.find("input").attr("disabled", !inital);
          // show when newsletter is checked
          _newsletter.click( function() {
            topics[this.checked ? "removeClass" : "addClass"]( "gray" );
            topicInputs.attr("disabled", !this.checked);
          } );
        }  

      } );

} )( jQuery ); // End of use strict