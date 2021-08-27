/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

const $ = require('jquery');

var $addImgBtn = $('<button type="button" class="btn btn-outline-success add_img_link">Ajouter une image</button>');
var $newImgLi = $('<div class="row"></div>').append($addImgBtn);

$(document).ready(function() {

	initImgsCollectionField('.galleryImages');

});
/**
 *
 * @param imgCollectionClass
 */
function initImgsCollectionField(imgCollectionClass){

	// Get the ul that holds the collection of tags
	var $imagesCollection = $(imgCollectionClass);
	$imagesCollection.append($newImgLi);

	if ($imagesCollection.length > 0){

		$imagesCollection.data('index', $imagesCollection.find(':input').length);
		$addImgBtn.on('click', function(e) {
			addTagForm($imagesCollection, $newImgLi);
		});

		$imagesCollection.find('.image-form-row').each(function() {
			var $removeFormButton = $('<button type="button" class="btn btn-outline-warning">Supprimer cette image</button>');
			$(this).find('.col-img').append($removeFormButton);
			$removeFormButton.on('click', () => { $(this).remove(); });
		});
	}

}


function addTagForm($collectionHolder, $newLinkLi) {
	var prototype = $collectionHolder.data('prototype');
	var index = $collectionHolder.data('index');
	var newForm = prototype;
	newForm = newForm.replace(/__name__label__/g, index);
	newForm = newForm.replace(/__name__/g, index);
	$collectionHolder.data('index', index + 1);
	var $newFormLi = $('<li class="mb-4"></li>').append(newForm);
	$newLinkLi.before($newFormLi);
}
