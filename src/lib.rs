pub fn decompose(n: i32) -> Vec<i32> {
    let upper_limit = (n as f64).sqrt() as i32;
    do_decompose(n, 2, upper_limit, Vec::new())
}

fn do_decompose(n: i32, next: i32, upper_limit: i32, mut acc: Vec<i32>) -> Vec<i32> {
    if next >= upper_limit {
        acc.push(n);
        return acc;
    }

    match n % next {
        0 => {
            acc.push(next);
            do_decompose(n/next, next, upper_limit, acc)
        },
        _ => {
            let upper_limit = (n as f64).sqrt() as i32;
            let next = if next == 2 { 3 } else { next + 2};
            do_decompose(n, next, upper_limit, acc)
        }
    }
}
