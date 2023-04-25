import PropTypes from 'prop-types';

export function FriendList({friends}) {
    return (
      <ul class="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li class="item" key={id}>
            <span
              style={{ background: isOnline ? 'green' : 'red' }}
            ></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
          </li>
        ))}
      </ul>
    );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};