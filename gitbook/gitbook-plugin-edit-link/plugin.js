require(["gitbook","jQuery"],function(o,t){o.events.bind("start",function(t,e){var n=e["edit-link"],e=n.label,i=n.base,a=o.state.innerLanguage;a&&("object"==typeof e&&(e=e[a]),a+="/"),"/"!=i.slice(-1)&&(i+="/"),o.toolbar.createButton({icon:"fa fa-edit",text:e,onClick:function(){var t=o.state.filepath;window.open(i+a+t)}})})});