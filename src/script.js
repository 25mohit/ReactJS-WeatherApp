var reverce = (value) => {
    let rValue = value
    let sValue = rValue.split(",")
    let reverceValue = sValue.reverce()
    let join = reverceValue.join(",")
    console.log(join);
}
reverce([1,2,3,4,5])