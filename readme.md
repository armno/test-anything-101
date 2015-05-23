# test-anything-101

Learning how to test node code with `test-anything`. http://nodeschool.io/#workshoppers

## random notes taken

- my first mistake was a typo. `emoify` instead of `emotify`. awesome!
- `assert` is the simplest way to get started. `assert()` with 1 argument checks
for any truthy value. (same with `assert.ok()` i think).
- chapter 3 i learned about `tape` module. it provides more descriptive tests
where i can describe more about the tests in case it fails or passes.
- chapter 3 i learned about `t.plan()` to tell `tape` how many times the callback runs
so i can verify that the callback was called exactly X times.
- chapter 4 i learned about tests that expect errors: an Error is actually thrown for some specific case, not just produces erros output.