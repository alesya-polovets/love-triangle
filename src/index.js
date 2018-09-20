/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let count = 0;
    let a, b, c;
    preferences.unshift(0);
    for (let i = 1; i < preferences.length; i++) {
        a = preferences[i];
        b = preferences[a];
        c = preferences[b];
        if (i == c) {
            count++;
        }
    }
    return Math.floor(count/3);
};