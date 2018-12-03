/*jshint esversion:6*/

function solution(command) {

    const commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let reportedUpvotes = '';
            let reportedDownpvotes = '';
            let rating = '';
            if (this.upvotes + this.downvotes > 50) {
                reportedDownpvotes = Math.round(this.downvotes * 1.25);
                reportedUpvotes = Math.round(this.upvotes * 1.25);
            } else {
                reportedDownpvotes = this.upvotes;
                reportedDownpvotes = this.downvotes;
            }


            if (this.upvotes + this.downvotes < 10) {
                rating = 'new';
            } else if (this.upvotes / this.downvotes > 1.66) {
                rating = 'hot';
            } else if (this.upvotes > this.downvotes) {
                rating = 'contaversal';
            } else {
                rating = 'unpoular';
            }
            return [reportedUpvotes, reportedDownpvotes, reportedUpvotes - reportedDownpvotes, rating];
        }
    }


    return commands[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
score = solution.call(post, 'score');
console.log(score);