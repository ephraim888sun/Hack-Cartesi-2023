# ChronoSnap
## Built with Cartesi Machine

ChronoSnap is a system designed to seperate photos taken of the real world from AI generations.

## How it works (Theory)
When a photo is taken by our camera client, it is digitally signed by the app, and the signature is posted on chain through the dapp generated by the cartesi machine. The state is advanced and the cartesi program will create a notice.

Whenever the validity of a photo comes into question, the photographer, time, and location of the photo can all be verified by refering to the
signature posted on-chain

## How it works (This demo)
When a photo is taken by our camera client, iOS generates an ID for it. This ID is posted on chain. The state is advanced and the cartesi program will create a notice.

The cartesi part of the app is mostly flushed out, its just the image hashing and signing in the client that have yet to be implemented.