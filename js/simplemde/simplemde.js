( function( $ ) {
  'use strict'; // Start of use strict

  new SimpleMDE({
    element: document.getElementById("editor-demo1"),
    spellChecker: false,
  });
  
  new SimpleMDE({
    element: document.getElementById("editor-demo2"),
    spellChecker: false,
    autosave: {
      enabled: true,
      unique_id: "editor-demo2",
    },
  });
  
  new SimpleMDE({
    element: document.getElementById("editor-demo3"),
    status: false,
    toolbar: false,
  });

  } )( jQuery ); // End of use strict