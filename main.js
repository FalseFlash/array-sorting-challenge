
class Endorsements {
    /**
     * @constructor
     */
    constructor(info) {
        if (typeof info !== 'object')
            return TypeError('Param 1 must be an object!');

        this.userArray = [];

        this.userArray.push(info);

        this.sortedArray = [];
    }

    /**
     * Sort the users in the array by skills.
     * @returns array
     */
    sort_users_by_skill() {
        if (this.userArray.length <= 0)
            return Error('There is no data in the array.');

        const _self = this;

        this.userArray.forEach(function(data) {
            for (let i = 0; i < data.length; i++) {
                let skill = data[i].skill;
                let user = data[i].user;

                if (_self.skill_exists(skill).found) {
                    let index = _self.skill_exists(skill).index;

                    if (_self.sortedArray[index].skill === skill) {
                        _self.sortedArray[index].user.push(user);
                        _self.sortedArray[index].count++;
                    }
                } else {
                    _self.sortedArray.push({skill: skill, user: [user], count: 1});
                }
            }
        });

        return this.sortedArray;
    }

    /**
     * Search for the requested skill in the sorted array.
     * @param skill
     * @returns {{found: boolean, index: number}}
     */
    skill_exists(skill) {
        for (let i = 0; i < this.sortedArray.length; i++) {
            if (this.sortedArray[i].skill == skill)
                return {found: true, index: i};
        }

        return {found: false, index: -1};
    }
}

let test = new Endorsements([
        { skill: 'css', user: 'Bill' },
        { skill: 'javascript', user: 'Chad' },
        { skill: 'javascript', user: 'Bill' },
        { skill: 'css', user: 'Sue' },
        { skill: 'javascript', user: 'Sue' },
        { skill: 'html', user: 'Sue' }
]);


const sorted = test.sort_users_by_skill();

console.log(sorted);