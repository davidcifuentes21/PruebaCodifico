import { useState } from 'react';
import { SearchUser } from './components/SearchUser'
import { UserCard } from './components/UserCard'

export const App = () => {
    
  const [ User, setUser ] = useState('');
  
  const onAddUser = ( newUser ) => {
      if ( User.includes(newUser) ) return;
      console.log(newUser);
      setUser([ newUser, ...User ]);
  }

  return (
    <>
      <div className="finder">
        <h1 style={{textAlign: 'center'}}>Find GitHub user</h1>

        <SearchUser onNewUser={onAddUser}/>
        
        <UserCard 
          key={User}
          user={User}/>
      </div>
    </>
  )
}

