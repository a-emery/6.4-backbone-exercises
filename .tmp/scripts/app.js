require.register('main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST.application());
    });
});
require.register('a/a-main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['a/a-index']());
    });
});
require.register('b/b-main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST['b/b-index']());
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
//# sourceMappingURL=app.js.map
