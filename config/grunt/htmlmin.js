module.exports = {
    default: {
        files: [
            {
                cwd: 'build/rtc-on-2025/browser',
                dest: 'build/rtc-on-2025/browser',
                expand: true,
                src: ['**/404.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
