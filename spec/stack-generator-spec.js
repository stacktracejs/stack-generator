/* global StackFrame: false, StackGenerator: false */
describe('StackGenerator', function () {
    describe('#backtrace', function () {
        it('should generate backtrace for function declarations', function () {
            var stackFrames = undefined;
            function foo() {
                bar();
            }
            function bar() {
                stackFrames = StackGenerator.backtrace();
            }
            foo();

            expect(stackFrames).toBeTruthy();
            expect(stackFrames[0]).toMatchStackFrame(['backtrace', undefined, undefined, undefined, undefined]);
            expect(stackFrames[1]).toMatchStackFrame(['bar', undefined, undefined, undefined, undefined]);
            expect(stackFrames[2]).toMatchStackFrame(['foo', undefined, undefined, undefined, undefined]);
        });

        it('should generate backtrace for named function expressions', function () {
            var stackFrames = undefined;
            var foo = function foo() {
                bar();
            };
            var bar = function bar() {
                stackFrames = StackGenerator.backtrace();
            };
            foo();

            expect(stackFrames).toBeTruthy();
            expect(stackFrames[0]).toMatchStackFrame(['backtrace', undefined, undefined, undefined, undefined]);
            expect(stackFrames[1]).toMatchStackFrame(['bar', undefined, undefined, undefined, undefined]);
            expect(stackFrames[2]).toMatchStackFrame(['foo', undefined, undefined, undefined, undefined]);
        });

        it('should limit stack size given a max stack size', function () {
            var stackFrames = undefined;
            var foo = function foo() {
                bar();
            };
            var bar = function bar() {
                stackFrames = StackGenerator.backtrace({maxStackSize: 2});
            };
            foo();

            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(2);
        });
    });
});