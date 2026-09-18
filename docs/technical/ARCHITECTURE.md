# Technical Architecture

The application is a static ES module system with no server dependency. The pipeline is: understand → CIS → policies → planning → target lowering → verification → explanations and semantic changes. Persistent projects use IndexedDB version 2. Offline assets are managed by a service worker.
