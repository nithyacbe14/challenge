function countDistinctPairsWithGivenSum(nums: number[], givenNumber: number): number {
    let count = 0;
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const currentSum = nums[start] + nums[end];

        console.log(`Checking pair: (${nums[start]}, ${nums[end]}) with currentSum: ${currentSum}`);

        if (currentSum === givenNumber) {
            console.log(`Found matching pair: (${nums[start]}, ${nums[end]})`);
            count++;
            start++;
            end--;
        } else if (currentSum < givenNumber) {
            console.log(`currentSum is less than givenNumber. Moving the start pointer.`);
            start++;
        } else {
            console.log(`currentSum is more than givenNumber. Moving the end pointer.`);
            end--;
        }
    }

    console.log(`Total pairs with currentSum ${givenNumber}: ${count}`);
    return count;
}

const arr = [3,5,2,4,1];
const X = 6;
countDistinctPairsWithGivenSum(arr, X);
