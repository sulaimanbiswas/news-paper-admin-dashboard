( function( $ ) {
  'use strict'; // Start of use strict

  $("#swal-message").on("click",function(){
      swal('Any fool can use a computer')
    });
    $("#swal-question").on("click",function(){
      swal(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    });
    $("#swal-error").on("click",function(){
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    });
    $("#swal-warning").on("click",function(){
      swal({
        type: 'warning',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    });
    $("#swal-success").on("click",function(){
      swal({
        type: 'success',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    });
    $("#swal-info").on("click",function(){
      swal({
        type: 'info',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    });


    $("#swal-html").on("click",function(){
      swal({
        title: '<strong>HTML <u>example</u></strong>',
        type: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
      })
    });

    // position

    
    $(".swal-alrt-btn").on("click",function(){
      var position = $(this).attr("data-position");
      swal({
        position: position,
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    });


    $("#swal-success").on("click",function(){
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    });
    $("#swal-delete").on("click",function(){
      const swalWithBootstrapButtons = swal.mixin({
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false,
        })

        swalWithBootstrapButtons({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            swalWithBootstrapButtons(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })

    });


    $("#swal-custom-image").on("click",function(){
      swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'images/image-medium.jpg',
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: 'Custom image',
        animation: false
      })
    });

    $("#swal-auto-close").on("click",function(){
      let timerInterval
      swal({
        title: 'Auto close alert!',
        html: 'I will close in <strong></strong> seconds.',
        timer: 2000,
        onOpen: () => {
          swal.showLoading()
          timerInterval = setInterval(() => {
            swal.getContent().querySelector('strong')
              .textContent = swal.getTimerLeft()
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
    });

    $("#swal-rtl-container").on("click",function(){
      swal({
        title: 'هل تريد الاستمرار؟',
        confirmButtonText:  'نعم',
        cancelButtonText:  'لا',
        showCancelButton: true,
        showCloseButton: true,
        target: document.getElementById('rtl-container')
      })
    });

    

    $("#swal-input").on("click",function(){
      swal({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {
        if (result.value) {
          swal({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
    });

    $("#swal-question-answers").on("click",function(){
      swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
      ]).then((result) => {
        if (result.value) {
          swal({
            title: 'All done!',
            html:
              'Your answers: <pre><code>' +
                JSON.stringify(result.value) +
              '</code></pre>',
            confirmButtonText: 'Lovely!'
          })
        }
      })
  });
    
} )( jQuery ); // End of use strict  