this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Objective Links</h1>\n\n<a href=\"a.html\"><button>Objective A</button></a>\n<a href=\"b.html\"><button>Objective B</button></a>\n<a href=\"c.html\"><button>Objective C</button></a>\n<a href=\"d.html\"><button>Objective D</button></a>\n<a href=\"e.html\"><button>Objective E</button></a>\n\n<a href=\"index.html\"><button>Index</button></a>\n";
},"useData":true});
this["JST"]["a/a-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1 class=\"aBlogPost\">Create a Blog Post</h1>\n";
},"useData":true});
this["JST"]["a/form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input placeholder=\"Blog Title\" type=\"text\" name=\"title\" value=\"\" class=\"blogTitle\">\n<textarea placeholder=\"Blog Body\" type=\"text\" name=\"post\" value=\"\" class=\"postTextArea\"></textarea>\n<input type=\"submit\" class=\"blogSubmit\">\n";
},"useData":true});
this["JST"]["c/blogListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div data-behavior=show-post>\n<h1 class='c-blog-list-title'>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n<h3 class='c-blog-list-body'>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.post : stack1), depth0))
    + "</h3>\n</div>\n";
},"useData":true});
this["JST"]["c/blogListItemHeader"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div data-behavior=show-post>\n<h1 class='c-blog-list-title'>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n</div>\n";
},"useData":true});
this["JST"]["c/c-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"c-blog-posts\">\n<h1>Page C</h1>\n<div id=\"c-blog-posts-list\"></div>\n</div>\n\n<div class=\"current-post\">\n  \n</div>\n";
},"useData":true});
this["JST"]["b/b-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Page B</h1>\n";
},"useData":true});
this["JST"]["b/form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input type=\"text\" name=\"firstName\" value=\"\" placeholder=\"First Name\" class=\"personFormInput\">\n<input type=\"text\" name=\"lastName\" value=\"\" placeholder=\"Last Name\" class=\"personFormInput\">\n<input type=\"text\" name=\"address\" value=\"\" placeholder=\"Address\" class=\"personFormInput\">\n<input type=\"text\" name=\"phoneNumber\" value=\"\" placeholder=\"Phone Number\" class=\"personFormInput\">\n<input type=\"submit\">\n";
},"useData":true});
this["JST"]["d/d-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Page D</h1>\n";
},"useData":true});
this["JST"]["e/e-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Page E</h1>\n";
},"useData":true});
this["JST"]["g-original-c/blogListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h3>stuff</h3>\n<h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n<p>"
    + alias3(((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"post","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});
this["JST"]["g-original-c/c-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Page C</h1>\n";
},"useData":true});