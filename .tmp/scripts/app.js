require.register('main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST.application());
    });
});
require.register('a/a-main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _aModelsPostsCollection = require('a/models/PostsCollection');
    var _aModelsPostsCollection2 = _interopRequireDefault(_aModelsPostsCollection);
    var _aViewCreatePostFormView = require('a/view/CreatePostFormView');
    var _aViewCreatePostFormView2 = _interopRequireDefault(_aViewCreatePostFormView);
    $(document).ready(function () {
        $('#container').append(JST['a/a-index']());
        var postsCollection = new _aModelsPostsCollection2['default']();
        var createPostFormView = new _aViewCreatePostFormView2['default']({ collection: postsCollection });
        $('#container').append(createPostFormView.render().el);
    });
});
require.register('b/b-main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _bViewPersonForm = require('b/view/PersonForm');
    var _bViewPersonForm2 = _interopRequireDefault(_bViewPersonForm);
    var _bModelsPeopleCollection = require('b/models/PeopleCollection');
    var _bModelsPeopleCollection2 = _interopRequireDefault(_bModelsPeopleCollection);
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['b/b-index']());
        var people = new _bModelsPeopleCollection2['default']();
        var personFormView = new _bViewPersonForm2['default']({ collection: people });
        $('#container').append(personFormView.render().el);
    });
});
require.register('c/c-main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _cModelsPostsCollection = require('c/models/PostsCollection');
    var _cModelsPostsCollection2 = _interopRequireDefault(_cModelsPostsCollection);
    var _cViewPostsList = require('c/view/PostsList');
    var _cViewPostsList2 = _interopRequireDefault(_cViewPostsList);
    $(document).ready(function () {
        $('#container').append(JST['c/c-index']());
        var posts = new _cModelsPostsCollection2['default']();
        posts.fetch();
        console.log(posts);
        var postsListView = new _cViewPostsList2['default']({ collection: posts });
        $('#c-blog-posts-list').append(postsListView.render().el);
    });
});
require.register('d/d-main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _dViewBookmarkCreate = require('d/view/BookmarkCreate');
    var _dViewBookmarkCreate2 = _interopRequireDefault(_dViewBookmarkCreate);
    var _dModelsBookmarksCollection = require('d/models/BookmarksCollection');
    var _dModelsBookmarksCollection2 = _interopRequireDefault(_dModelsBookmarksCollection);
    var _dViewBookmarkTitleList = require('d/view/BookmarkTitleList');
    var _dViewBookmarkTitleList2 = _interopRequireDefault(_dViewBookmarkTitleList);
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['d/d-index']());
        var bookmarksCollection = new _dModelsBookmarksCollection2['default']();
        bookmarksCollection.fetch();
        // var keyList = _.filter(bookmarksCollection, )
        var bookmarkCreateView = new _dViewBookmarkCreate2['default']({ collection: bookmarksCollection });
        $('.d-create-url').append(bookmarkCreateView.render().el);
        var bookmarkTitleList = new _dViewBookmarkTitleList2['default']({ collection: bookmarksCollection });
        $('.d-url-list-container').append(bookmarkTitleList.render().el);
    });
});
require.register('e/e-main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['e/e-index']());
    });
});
require.register('g-original-c/c-main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _cModelsBlogPostsCollection = require('c/models/BlogPostsCollection');
    var _cModelsBlogPostsCollection2 = _interopRequireDefault(_cModelsBlogPostsCollection);
    var _cViewBlogList = require('c/view/BlogList');
    var _cViewBlogList2 = _interopRequireDefault(_cViewBlogList);
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['c/c-index']());
        var blogPostsCollection = new _cModelsBlogPostsCollection2['default']();
        $('#container').append(blogPostsCollection.render().el);
        var blogList = new _cViewBlogList2['default']({ collection: blogPostsCollection });
        $('#container').append(blogList.render().el);
    });
});
require.register('a/models/Post', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var Post = Backbone.Model.extend({
        'default': {
            title: '',
            body: ''
        }
    });
    exports['default'] = Post;
    module.exports = exports['default'];
});
require.register('a/models/PostsCollection', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _aModelsPost = require('a/models/Post');
    var _aModelsPost2 = _interopRequireDefault(_aModelsPost);
    var PostsCollection = Backbone.Collection.extend({
        model: _aModelsPost2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts'
    });
    exports['default'] = PostsCollection;
    module.exports = exports['default'];
});
require.register('a/view/CreatePostFormView', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var CreatePostForm = Backbone.View.extend({
        tagName: 'form',
        events: { 'submit': 'createBlogPost' },
        template: JST['a/form'],
        render: function render() {
            this.$el.html(this.template());
            return this;
        },
        createBlogPost: function createBlogPost(e) {
            e.preventDefault();
            this.collection.create(this.serializeForm());
            this.$('input[type=text]').val('');
        },
        serializeForm: function serializeForm() {
            var result = {};
            var inputs = this.$el.serializeArray();
            inputs.forEach(function (input) {
                result[input.name] = input.value;
            });
            return result;
        }
    });
    exports['default'] = CreatePostForm;
    module.exports = exports['default'];
});
require.register('b/models/PeopleCollection', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _bModelsPerson = require('b/models/Person');
    var _bModelsPerson2 = _interopRequireDefault(_bModelsPerson);
    exports['default'] = Backbone.Collection.extend({
        model: _bModelsPerson2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronpersonpost'
    });
    module.exports = exports['default'];
});
require.register('b/models/Person', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var Person = Backbone.Model.extend({
        'default': {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: ''
        }
    });
    exports['default'] = Person;
    module.exports = exports['default'];
});
require.register('b/view/PersonForm', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.View.extend({
        tagName: 'form',
        template: JST['b/form'],
        render: function render() {
            this.$el.html(this.template());
            return this;
        },
        events: { 'submit': 'createPerson' },
        createPerson: function createPerson(e) {
            e.preventDefault();
            this.collection.create(this.serializeForm());
            this.$('input[type=text]').val('');
        },
        serializeForm: function serializeForm() {
            console.log('something');
            var result = {};
            var inputs = this.$el.serializeArray();
            inputs.forEach(function (input) {
                result[input.name] = input.value;
            });
            return result;
        }
    });
    module.exports = exports['default'];
});
require.register('c/models/Post', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.Model.extend({
        'default': {
            title: 'no title',
            post: 'no body'
        }
    });
    module.exports = exports['default'];
});
require.register('c/models/PostsCollection', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _cModelsPost = require('c/models/Post');
    var _cModelsPost2 = _interopRequireDefault(_cModelsPost);
    exports['default'] = Backbone.Collection.extend({
        model: _cModelsPost2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts'
    });
    module.exports = exports['default'];
});
require.register('c/view/PostItemView', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.View.extend({
        tagName: 'li',
        className: 'blog-list-item',
        events: { 'click [data-behavior=show-post]': 'showPost' },
        template: JST['c/blogListItemHeader'],
        showTemplate: JST['c/blogListItem'],
        showPost: function showPost() {
            $('.current-post').html(this.rerender().el);
        },
        rerender: function rerender() {
            this.$el.html(this.showTemplate({ model: this.model.toJSON() }));
            return this;
        },
        render: function render() {
            this.$el.html(this.template({ model: this.model.toJSON() }));
            return this;
        }
    });
    module.exports = exports['default'];
});
require.register('c/view/PostsList', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _cModelsPostsCollection = require('c/models/PostsCollection');
    var _cModelsPostsCollection2 = _interopRequireDefault(_cModelsPostsCollection);
    var _cViewPostItemView = require('c/view/PostItemView');
    var _cViewPostItemView2 = _interopRequireDefault(_cViewPostItemView);
    exports['default'] = Backbone.View.extend({
        initialize: function initialize() {
            this.listenTo(this.collection, 'add remove', this.render);
        },
        tagName: 'ul',
        className: 'c-blog-list',
        render: function render() {
            this.renderChildren();
            return this;
        },
        renderChildren: function renderChildren() {
            var self = this;
            this.$el.html('');
            this.collection.each(function (post) {
                var postItemView = new _cViewPostItemView2['default']({ model: post });
                self.$el.append(postItemView.render().el);
            });
        }
    });
    module.exports = exports['default'];
});
require.register('d/models/Bookmark', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.Model.extend({
        idAttribute: '_id',
        defaults: {
            url: '',
            title: '',
            tag: ''
        }
    });
    module.exports = exports['default'];
});
require.register('d/models/BookmarksCollection', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _dModelsBookmark = require('d/models/Bookmark');
    var _dModelsBookmark2 = _interopRequireDefault(_dModelsBookmark);
    exports['default'] = Backbone.Collection.extend({
        model: _dModelsBookmark2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronbookmarks'
    });
    module.exports = exports['default'];
});
require.register('d/view/BookmarkCreate', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.View.extend({
        tagName: 'form',
        events: { 'submit': 'createUrl' },
        template: JST['d/createURL'],
        render: function render() {
            this.$el.html(this.template());
            return this;
        },
        createUrl: function createUrl(e) {
            e.preventDefault();
            this.collection.create(this.serializeForm());
            this.$('input[type=text]').val('');
        },
        serializeForm: function serializeForm() {
            var result = {};
            var inputs = this.$el.serializeArray();
            inputs.forEach(function (input) {
                result[input.name] = input.value;
            });
            return result;
        }
    });
    module.exports = exports['default'];
});
require.register('d/view/BookmarkTitleList', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _dViewBookmarkTitleListItem = require('d/view/BookmarkTitleListItem');
    var _dViewBookmarkTitleListItem2 = _interopRequireDefault(_dViewBookmarkTitleListItem);
    exports['default'] = Backbone.View.extend({
        tagName: 'ul',
        className: 'bookmark-title-list',
        initialize: function initialize() {
            this.listenTo(this.collection, 'add remove', this.render);
        },
        render: function render() {
            this.renderChildren();
            return this;
        },
        renderChildren: function renderChildren() {
            var self = this;
            this.$el.html('');
            this.collection.each(function (bookmark) {
                var bookmarkTitleListItem = new _dViewBookmarkTitleListItem2['default']({ model: bookmark });
                self.$el.append(bookmarkTitleListItem.render().el);
            });
        }
    });
    module.exports = exports['default'];
});
require.register('d/view/BookmarkTitleListItem', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.View.extend({
        template: JST['d/URLListItem'],
        tagName: 'li',
        render: function render() {
            this.$el.html(this.template({ model: this.model.toJSON() }));
            return this;
        }
    });
    module.exports = exports['default'];
});
require.register('g-original-c/models/BlogPost', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.Model.extend({
        'default': {
            blogTitle: '',
            blogPost: ''
        }
    });
    module.exports = exports['default'];
});
require.register('g-original-c/models/BlogPostsCollection', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _cModelsBlogPost = require('c/models/BlogPost');
    var _cModelsBlogPost2 = _interopRequireDefault(_cModelsBlogPost);
    exports['default'] = Backbone.Collection.extend({
        model: _cModelsBlogPost2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts'
    });
    module.exports = exports['default'];
});
require.register('g-original-c/view/Base-view', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.View.extend({
        render: function render() {
            this.$el.html(this.template());
            return this;
        }
    });
    module.exports = exports['default'];
});
require.register('g-original-c/view/BlogList', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _cViewBlogListItem = require('c/view/BlogListItem');
    var _cViewBlogListItem2 = _interopRequireDefault(_cViewBlogListItem);
    var _cViewBaseView = require('c/view/Base-view');
    var _cViewBaseView2 = _interopRequireDefault(_cViewBaseView);
    exports['default'] = _cViewBaseView2['default'].extend({
        tagName: 'ul',
        render: function render() {
            this.renderChildren();
            return this;
        },
        renderChildren: function renderChildren() {
            this.collection.each(function (post) {
                var postView = new _cViewBlogListItem2['default']({ model: post });
                console.log('newest');
                self.$el.append(postView.render().el);
            });
        }
    });
    module.exports = exports['default'];
});
require.register('g-original-c/view/BlogListItem', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _cViewBaseView = require('c/view/Base-view');
    var _cViewBaseView2 = _interopRequireDefault(_cViewBaseView);
    exports['default'] = _cViewBaseView2['default'].extend({
        tagName: 'li',
        template: JST['c/blogListItem'],
        render: function render() {
            this.$el.html(this.template({ model: this.model.toJSON() }));
            return this;
        }
    });
    module.exports = exports['default'];
});
//# sourceMappingURL=app.js.map
