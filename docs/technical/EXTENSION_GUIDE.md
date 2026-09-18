# Extension Guide

## Add a task pack
Add detection vocabulary, policy requirements, validators and regression tests.

## Add a target
Add a target profile and lowering branch in `providers.js`. Preserve requirement IDs in the output so coverage remains verifiable. Add surface-specific capability warnings rather than claiming unavailable tools.

## Change the CIS
Increment the schema version, add a migration, preserve older imports, and add semantic-diff tests.
