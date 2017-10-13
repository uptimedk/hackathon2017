extern crate prime_factors;

fn main() {
    let n: i32 = 198273912;
    let result = prime_factors::decompose(n);
    println!("Prime factors: {:?}", result);
}
