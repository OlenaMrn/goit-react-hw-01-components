import user from '../data/user.json'; // імпортуємо данні з бекенду user.json
import { Profile } from './Profile/Profile';


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
      {/* <section>
          <Statistics title="Upload stats" stats={data} />
      </section>

      <section className={css.section}>
          <FriendList friends={friends} />
      </section>

      <section className={css.section}>
          <TransactionHistory transactions={transactions} />
      </section> */}
    </div>
  );
};