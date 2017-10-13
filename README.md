# hackathon2017

### Konkurrence:
Find Prim faktorerne af 198273912.
Det der vil blive lagt vægt på er følgende:
1. Den rigtige løsning
2. Hvor hurtig er algoritmen
3. Clean Code
4. Søde commit beskeder

Fork repo'et og kom med PR.

Vinderens pull request bliver godkendt.

## GUIDE
1. npm install
2. npm run test
3. node app.js

### Rust

Install rust with `curl https://sh.rustup.rs -sSf | sh` (or take a look at the [official installation instructions](https://doc.rust-lang.org/book/second-edition/ch01-01-installation.html)).

```
cargo test
cargo run
```

To run the benchmarks, you'll need to switch to the `nightly` channel (to enable use of unstable test interface):

```
rustup default nightly
cargo bench
```

On my machine, it benchmarks to `827 ns/iter`.
