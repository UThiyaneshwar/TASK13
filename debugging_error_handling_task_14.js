function processUserData(user) {
  try {
    console.log('Processing user data...')
    console.table(user)

    if (!user.name) {
      throw new MissingPropertyError('User name is required')
    }

    let age = user.age.toUpperCase()

    console.log(`User is ${user.name} and age is ${age}`)

  } catch (error) {
    if (error instanceof MissingPropertyError) {
      console.error('Custom Error:', error.message)
    } else {
      console.error('Runtime Error:', error)
    }
  } finally {
    console.log('Finished processing user data.')
  }
}

class MissingPropertyError extends Error {
  constructor(message) {
    super(message)
    this.name = 'MissingPropertyError'
  }
}

console.log('Starting application')

let user1 = { name: 'Alice', age: 25 }
let user2 = { age: 30 }

processUserData(user1)
processUserData(user2)

console.log(nonExistentVariable)

document.body.style.backgroundColor = 'lightyellow'
