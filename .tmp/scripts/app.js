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
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['c/c-index']());
    });
});
require.register('d/d-main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['d/d-index']());
    });
});
require.register('e/e-main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['e/e-index']());
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
//# sourceMappingURL=app.js.map
