const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(teamArr) {
  let teamNameArr = []
  let teamName
  if (Array.isArray(teamArr)) {
    teamArr.forEach(element => {
      if (typeof element === typeof '') {
        teamNameArr.push(element.trim().charAt(0).toUpperCase())
      }
    })
  }
  if (teamNameArr.length === 0) {
    teamName = false
  } else {
    teamNameArr.sort()
    teamName = teamNameArr.join('')
  }
  return teamName
}

module.exports = {
  createDreamTeam
};
