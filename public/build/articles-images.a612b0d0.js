(self.webpackChunk=self.webpackChunk||[]).push([[873],{1287:(n,e,t)=>{t(9826),t(4916),t(5306);var a=t(9755),i=a('<button type="button" class="btn btn-outline-success add_img_link">Ajouter une image</button>'),o=a('<div class="row"></div>').append(i);a(document).ready((function(){var n;(n=a(".galleryImages")).append(o),n.length>0&&(n.data("index",n.find(":input").length),i.on("click",(function(e){!function(n,e){var t=n.data("prototype"),i=n.data("index"),o=t;o=(o=o.replace(/__name__label__/g,i)).replace(/__name__/g,i),n.data("index",i+1);var c=a('<li class="mb-4"></li>').append(o);e.before(c)}(n,o)})),n.find(".image-form-row").each((function(){var n=this,e=a('<button type="button" class="btn btn-outline-warning">Supprimer cette image</button>');a(this).find(".col-img").append(e),e.on("click",(function(){a(n).remove()}))})))}))}},n=>{"use strict";n.O(0,[819,480],(()=>{return e=1287,n(n.s=e);var e}));n.O()}]);