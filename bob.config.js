module.exports = {
    source: 'src',
    output: 'dist',
    targets: [
        'module',
        'commonjs',
        [
            'typescript',
            {
                project: 'tsconfig.json',
            },
        ],
    ],
}
