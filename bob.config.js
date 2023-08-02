export default {
    source: 'src',
    output: 'dist',
    targets: [
        'module',
        [
            'typescript',
            {
                project: 'tsconfig.json',
            },
        ],
    ],
}
