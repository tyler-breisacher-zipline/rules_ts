# Vitest mock resolution

The test fails as written. From what I can tell this is because `__dirname` is not
always the same path, because the vite config file can be copied into different places
for different actions. Changing `__dirname` to `process.cwd()` fixes the test.
