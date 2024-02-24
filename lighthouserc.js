module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            url: [
                'http://localhost:4200'
            ]
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
}