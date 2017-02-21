'use restric'
import qtip from 'qtip2';

export default()=>{
  console.log('load tooltips');
  $('[data-url]').qtip({
      content: {
          text: function(event, api) {
              $.ajax({
                  url: this.data('url') // Use data-url attribute for the URL
              })
              .then(function(content) {
                  // Set the tooltip content upon successful retrieval
                  let elements = $("<div />").append( $.parseHTML(content) ).find('h1');

                  api.set('content.text', elements);
              }, function(xhr, status, error) {
                  // Upon failure... set the tooltip content to the status and error value
                  api.set('content.text', status + ': ' + error);
              });

              return 'Loading...'; // Set some initial text
          }
      },
      hide: {
        event: 'click mouseleave',
          // event: false,
          // inactive: 500
      },
      position: {
         my: 'left top',
         at: 'right top',
         adjust: {
             x: -10
         }
       },
      style: {
        classes: 'comp__tooltips'
      }
  });
}
