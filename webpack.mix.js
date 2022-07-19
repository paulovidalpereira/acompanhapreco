const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.disableNotifications();

mix.js("resources/js/main.jsx", "public/js")
    .react()
    .sass("resources/sass/main.scss", "public/css")
    .options({
        postCss: [tailwindcss("./tailwind.config.js")],
    })
    .alias({
        "@": "resources/js",
    });

mix.browserSync({
    cors: true,
    proxy: "http://acompanhapreco.recurse.local",
});

if (mix.inProduction()) {
    mix.version();
}
