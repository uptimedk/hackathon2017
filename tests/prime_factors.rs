extern crate prime_factors;

#[test]
fn calculates_correct_result() {
    let expected: Vec<i32> = vec![2, 2, 2, 3, 61, 135433];
    let n: i32 = 198273912;
    let actual: Vec<i32> = prime_factors::decompose(n);
    assert!(expected == actual);
}
