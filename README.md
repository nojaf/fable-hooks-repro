# Fable Invalid hook call repro

## Steps

In both `rc-008` and `3.0.1`:

- dotnet tool restore
- npm i
- npm start

## Problem

I believe the rules of Hooks are broken due to naming.
The exported hook function name needs to start with `use`, see https://reactjs.org/warnings/invalid-hook-call-warning.html.