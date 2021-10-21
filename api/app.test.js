const { getTask } = require('./Src/Routes/functions.ts')


describe('TESTINGS', () => {

    beforeEach(() => {
        
    })

    afterEach(() => {

    })

    describe('Users', () => {

        it('Get info', () => {

            let tasks = getTask()

            expect('object').toBe(typeof(tasks))
        })

        it('Post info', () => {

        })

        it('Put info', () => {

        })
    })

    describe('Tasks', () => {

        it('Get info', () => {

        })

        it('Post info', () => {

        })

        it('Put info', () => {

        })
    })
})