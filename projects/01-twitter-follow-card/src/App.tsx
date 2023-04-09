import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

interface User {
  userName: string
  name: string
  isFollowing: boolean
}

const users: User[] = [
  {
    userName: 'kfoq7',
    name: 'Fabrizio',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className="App">
      {users.map(({ name, userName, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
