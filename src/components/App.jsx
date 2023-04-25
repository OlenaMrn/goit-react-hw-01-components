import user from '../data/user.json'; // імпортуємо данні з бекенду user.json
import { Profile } from './Profile/Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList'
import transactions from '../data/transactions.json';
import { Transactions } from './TransactionHistory/Transactions';


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export function App () {
  return (
    <div>
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>

      <section>
        <Statistics title="Upload stats" stats={data} />
      </section>

      <section>
        <FriendList friends={friends} />
      </section>

      <section>
        <Transactions items={transactions} />
      </section>
    </div>
  );
};