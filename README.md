# react-game-engine

## Lifecycle

Every node has 3 separate processes going on - update, fixed, state

    - update - runs constantly, handles game updates
    - fixed - runs a 100 times per second, handles physics
    - state - runs without a pattern, handles rendering and keeps data up-to-date