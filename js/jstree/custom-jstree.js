
	// html demo
	$('#treeview-html').jstree();

	// inline data demo
	$('#treeview-data').jstree({
		'core' : {
			'data' : [
				{ "text" : "Folder", "children" : [
						{ "text" : "Sub folder 01" },
						{ "text" : "Sub folder 02" }
				]}
			]
		}
	});

	// data format demo
	$('#treeview-frmt').jstree({
		'core' : {
			'data' : [
				{
					"text" : "Folder",
					"state" : { "opened" : true },
					"children" : [
						{
							"text" : "Sub folder 01",
							"state" : { "selected" : true },
							"icon" : "jstree-file"
						},
						{ "text" : "Sub folder 02", "state" : { "disabled" : true } }
					]
				}
			]
		}
	});

	// ajax demo
	$('#treeview-ajax').jstree({
		'core' : {
			'data' : {
				"url" : "./js/jstree/root.json",
				"dataType" : "json" // needed only if you do not supply JSON headers
			}
		}
	});

	// lazy demo
	$('#treeview-lazy').jstree({
		'core' : {
			'data' : {
				"url" : "./js/jstree/lazy.json",
				"data" : function (node) {
					return { "id" : node.id };
				}
			}
		}
	});

	