this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Objective Links</h1>\n\n<a href=\"a.html\" class=\"index-link\"><button class=\"index-button\">Objective A <br> (Create a blog post)</button></a>\n<a href=\"b.html\" class=\"index-link\"><button class=\"index-button\">Objective B <br> (Create a contact)</button></a>\n<a href=\"c.html\" class=\"index-link\"><button class=\"index-button\">Objective C <br> (View a blog post)</button></a>\n<a href=\"d.html\" class=\"index-link\"><button class=\"index-button\">Objective D <br> (Create something)</button></a>\n<a href=\"e.html\" class=\"index-link\"><button class=\"index-button\">Objective E <br> (Create, view, and delete blog posts)</button></a>\n";
},"useData":true});
this["JST"]["a/a-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1 class=\"aBlogTitleTitle\">Create a Blog Post</h1>\n<h4><a href=\"/\">Home</a></h4>\n<h4>Results will be console logged and posted to http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts</h4>\n";
},"useData":true});
this["JST"]["a/form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input placeholder=\"Blog Title\" type=\"text\" name=\"title\" value=\"\" class=\"blogTitle\">\n<textarea placeholder=\"Blog Body\" type=\"text\" name=\"post\" value=\"\" class=\"postTextArea\"></textarea>\n<input type=\"submit\" class=\"blogSubmit\">\n";
},"useData":true});
this["JST"]["b/b-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Create A Contact</h1>\n<h4><a href=\"/\">Home</a></h4>\n<h4>Results will be console logged and posted to http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts</h4>\n";
},"useData":true});
this["JST"]["b/form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input type=\"text\" name=\"firstName\" value=\"\" placeholder=\"First Name\" class=\"personFormInput\">\n<input type=\"text\" name=\"lastName\" value=\"\" placeholder=\"Last Name\" class=\"personFormInput\">\n<input type=\"text\" name=\"address\" value=\"\" placeholder=\"Address\" class=\"personFormInput\">\n<input type=\"text\" name=\"phoneNumber\" value=\"\" placeholder=\"Phone Number\" class=\"personFormInput\">\n<input type=\"submit\">\n";
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
    return "<div class=\"c-blog-posts\">\n<h1>Read a Blog</h1>\n<h4><a href=\"/\">Home</a></h4>\n<h4>Click on a blog title and the full blog will appear on the right. Blogs are a Backbone Collection created with Objective A</h4>\n<div id=\"c-blog-posts-list\"></div>\n</div>\n\n<div class=\"current-post\">\n\n</div>\n";
},"useData":true});
this["JST"]["d/URLListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.url : stack1), depth0))
    + "\"><h1>Title: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1></a>\n<h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.tag : stack1), depth0))
    + "</h4>\n";
},"useData":true});
this["JST"]["d/createURL"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input type=\"text\" name=\"url\" placeholder=\"Bookmark URL\" value=\"\" class=\"d-create-input\">\n<input type=\"text\" name=\"title\" placeholder=\"Bookmark Name\" value=\"\" class=\"d-create-input\">\n<input type=\"text\" name=\"tag\" placeholder=\"Tag Name\" value=\"\" class=\"d-create-input\">\n<input type=\"submit\" name=\"submit\" value=\"submit\" class=\"d-create-input\">\n";
},"useData":true});
this["JST"]["d/d-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Page D</h1>\n<div class=\"d-create-url\"></div>\n<div class=\"d-url-list-container\"></div>\n<div class=\"d-tag-list-container\"></div>\n";
},"useData":true});
this["JST"]["e/blogPostListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"blogListItemHeader\">\n  <h1 class=\"e-blog-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n  <button class='delete' data-behavior=deletePost>Delete Post</button>\n</div>\n<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.post : stack1), depth0))
    + "</p>\n";
},"useData":true});
this["JST"]["e/createPost"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input placeholder=\"Blog Title\" type=\"text\" name=\"title\" value=\"\" class=\"blogTitle\">\n<textarea placeholder=\"Blog Body\" type=\"text\" name=\"post\" value=\"\" class=\"postTextArea\"></textarea>\n<input type=\"submit\" class=\"blogSubmit\">\n";
},"useData":true});
this["JST"]["e/e-index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"header\"><h1>Aaron's Blog Stuff</h1>\n  <h4><a href=\"/\">Home</a></h4>\n  <h4>Create a blog post and it appears on the right</h4>\n</div>\n<div class=\"sidebar\">\n<div class=\"createPost\">\n</div>\n</div>\n\n<div class=\"blogPosts\"></div>\n";
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