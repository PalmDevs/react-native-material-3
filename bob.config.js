export default {
    source: 'src',
    output: 'lib',
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
