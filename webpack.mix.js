let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    'resources/assets/cybertron/css/app.css',
    'resources/assets/cybertron/css/blocks.css',
    'resources/assets/cybertron/plugins/style-switcher.css',
    'resources/assets/cybertron/css/style.css'
], 'public/css/global.css').version();

mix.styles([
    'resources/assets/cybertron/plugins/animate.css',
    'resources/assets/cybertron/plugins/line-icons/line-icons.css',
    'resources/assets/cybertron/plugins/font-awesome/css/font-awesome.min.css',
    'resources/assets/cybertron/plugins/scrollbar/css/jquery.mCustomScrollbar.css',
    'resources/assets/cybertron/plugins/sky-forms-pro/skyforms/css/sky-forms.css',
    'resources/assets/cybertron/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css',
    'resources/assets/cybertron/plugins/img-hover/imagehover.css',
    'node_modules/daterangepicker/daterangepicker.css',
    'node_modules/datatables.net-bs/css/dataTables.bootstrap.css'
], 'public/css/implement.css').version();

mix.styles([
    'resources/assets/cybertron/css/pages/page_log_reg_v2.css',
    'resources/assets/cybertron/css/custom.css'
], 'public/css/login.css').version();

mix.styles([
    'resources/assets/cybertron/css/theme-colors/default.css',
    'resources/assets/cybertron/css/theme-skins/dark.css',
    'resources/assets/cybertron/css/custom.css',
    'resources/assets/cybertron/css/headers/header-default.css',
    'resources/assets/cybertron/css/footers/footer-v1.css',
    'resources/assets/cybertron/css/pages/profile.css'
], 'public/css/cybertron.css').version();

mix.js([
    'resources/assets/js/app.js'
], 'public/js/app.js').version();

mix.babel([
    'resources/assets/cybertron/js/custom.js'
], 'public/js/cybertron.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmFront.js',
    'resources/assets/cybertron/js/vue/vmFront.js'
], 'public/js/vueFront.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmPersonales.js',
    'resources/assets/cybertron/js/vue/vmPersonales.js'
], 'public/js/vueDatosPersonales.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmAcademicos.js',
    'resources/assets/cybertron/js/vue/vmAcademicos.js'
], 'public/js/vueDatosAcademicos.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmCertificacion.js',
    'resources/assets/cybertron/js/vue/vmCertificacion.js'
], 'public/js/vueCertificacion.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmExperiencia.js',
    'resources/assets/cybertron/js/vue/vmExperiencia.js'
], 'public/js/vueExperiencia.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmAcademicos.js',
    'resources/assets/cybertron/js/vue/form/vmAcademicos.js'
], 'public/js/formDatosAcademicos.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmCertificacion.js',
    'resources/assets/cybertron/js/vue/form/vmCertificacion.js'
], 'public/js/formCertificacion.js').version();

mix.babel([
    'resources/assets/cybertron/js/vue/class/vmExperiencia.js',
    'resources/assets/cybertron/js/vue/form/vmExperiencia.js'
], 'public/js/formExperiencia.js').version();

mix.babel([
    'resources/assets/cybertron/js/app.js',
    'resources/assets/cybertron/js/plugins/datepicker.js',
    'resources/assets/cybertron/plugins/backstretch/jquery.backstretch.min.js',
    'resources/assets/cybertron/plugins/counter/waypoints.min.js',
    'resources/assets/cybertron/plugins/counter/jquery.counterup.min.js',
    'resources/assets/cybertron/plugins/smoothScroll.js',
    'resources/assets/cybertron/plugins/back-to-top.js',
    'resources/assets/cybertron/plugins/scrollbar/js/jquery.mCustomScrollbar.concat.min.js',
    'resources/assets/cybertron/plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js',
    'resources/assets/cybertron/plugins/sky-forms-pro/skyforms/js/jquery.maskedinput.min.js',
    'resources/assets/cybertron/plugins/sky-forms-pro/skyforms/js/jquery-ui.min.js',
    'resources/assets/cybertron/plugins/sky-forms-pro/skyforms/js/jquery.form.min.js',
    'node_modules/datatables.net-bs/js/dataTables.bootstrap.js',
    'resources/assets/cybertron/js/routes.js',
], 'public/js/implement.js').version();

mix.copy('resources/assets/favicon.ico', 'public/favicon.ico');

mix.copyDirectory([
    'resources/assets/cybertron/plugins/line-icons/fonts'
],'public/fonts');

mix.copyDirectory([
    'resources/assets/img'
],'public/assets/img');