#![feature(test)]

extern crate test;
extern crate prime_factors;

use test::Bencher;

#[bench]
fn runs_fast(b: &mut Bencher) {
    let n: i32 = 198273912;
    b.iter(|| prime_factors::decompose(n));
}
