pub fn decompose(number: i32) -> Vec<i32> {
    let mut n = number;
    let mut upper_limit = (n as f64).sqrt() as i32;
    let mut next = 2;
    let mut acc = Vec::new();

    loop {
        if next >= upper_limit {
            acc.push(n);
            break;
        }
        let rem =  n % next;
        if rem == 0 {
            acc.push(next);
            n = n / next;
            continue;
        } else {
            upper_limit = (n as f64).sqrt() as i32;
            next = if next == 2 { 3 } else { next + 2};
            continue;
        }
    }

    return acc;
}
