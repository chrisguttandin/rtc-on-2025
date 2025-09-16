module.exports = () => {
    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/rtc-on-2025/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /rtc-on-2025/ --configuration production --subresource-integrity'
        },
        'rimraf-source-maps': {
            cmd: 'rimraf build/rtc-on-2025/browser/**.map'
        },
        'verify': {
            cmd: `npx bundle-buddy build/rtc-on-2025/browser/*.js.map && \
                grep -r build/rtc-on-2025/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};
