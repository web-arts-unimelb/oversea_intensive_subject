(function ($) {
  Drupal.behaviors.oversea_intensive_subject = {
		attach: function(context, settings) {
			var button_id = "p.button";
			$(button_id).each(function(key, value) {
				/*
					The key actually contains the actual object,
				 	While value is like the key.
				
				 	Sample data:
					<p>Close at ....</p>
					<p class="button">link_to_form_stack</p>
				*/
			
				// Sample input: <strong>Application deadline for this subject:</strong>&nbsp;6 July 2015
        // Need to get 6 July 2015
        // Pattern: (\d+\s.*\s\d{4})$	
				var date_text = $(this).prev().html().match(/(\d+\s.*\s\d{4})$/)[1];
				var date_unix = moment(date_text).unix();
				var curr_unix = moment().unix();

				// Sample data: SOCI90003 Comparative Social PolicyUniversity Gadjah Mada, Jogjakarta, Indonesia
				var subject_code = $(this).prev().prev().text().match(/(^.+\d{5})/)[1];

				console.log('-s-');
				console.log(subject_code);
				console.log('-e-');

				if(date_unix < curr_unix) {
					// Note: people may want to custom this text in the future.
					var default_text = "<p><strong>Application deadline for this subject:</strong> Applications for the 2015 round of this subject have closed.</p>";
					var text = '';				

					/*
						POLS90044
						SOCI90003
						POLS40017
						PPMN90036
					*/
					if(subject_code == 'POLS90044') {
						// Change here
						text = default_text;
					}
					else if(subject_code == 'SOCI90003') {
						// Change here
						text = default_text;
					}
					else if(subject_code == 'POLS40017') {
						// Change here
						text = default_text;
					}
					else if(subject_code == 'PPMN90036')
					{
						text = "<strong>Application deadline for this subject</strong>: Applications for the 2015 round of this subject have closed. Applications for the 2016 round of this subject will open in <strong>May 2016</strong>.";
					}
					else {

					}

					$(this).prev().html(text);
					$(this).hide();
					
				}
				else {
				
				}
	
			});

		}
	}

	// Define your func

	
})(jQuery);
